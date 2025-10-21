import { BookingCustomer, BookingDateTimePicker, BookingPaymentPanel, BookingServicePicker } from "#components";
import { z, type ZodType } from "zod"

export const serviceSchema = z.object({
  serviceId: z.string(),
})

export const timeSchema = z.object({
  time: z.string(),
})

export const customerSchema = z.object({
  name: z.string().nonempty(),
  email: z.email(),
  phone: z.string().min(11).max(11),
  notes: z.string().optional(),
  consent: z
  .boolean()
  .default(false) // defaults to false
  .refine(val => val === true, {
    message: "You must agree to the terms",
  }),
});

export const paymentSchema = z.object({
  paymentMethod: z.enum(["spa", "paystack"]),
})

export const bookingSchema = serviceSchema
                              .and(timeSchema)
                              .and(customerSchema)
// infer types
export type ServiceForm = z.infer<typeof serviceSchema>
export type TimeForm = z.infer<typeof timeSchema>
export type CustomerForm = z.infer<typeof customerSchema>
export type PaymentForm = z.infer<typeof paymentSchema>
// Combine all step schemas into a single object type
export type BookingForm = ServiceForm &
                  TimeForm &
                  CustomerForm;


export interface bookingStepInterface {
  step: number;
  title: string;
  description: string;
  schema: ZodType
  component: Component;
}

export interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
  category: string;
}

export interface TimeSlot {
  id: string
  time: Date
  displayTime: string
  isAvailable: boolean
  date: Date
}


export interface CustomerData {
  fullName: string
  email: string
  phone: string
  notes?: string
}

export interface PaymentBookingData {
  service?: {
    price: number;
    name: string;
  };
  staff?: string;
  date?: string;
}

export interface PaymentData {
  method: "deposit" | "pay-at-spa";
  depositAmount?: number;
}

export interface PaymentPanelProps {
  bookingData: PaymentBookingData;
  onPaymentSelect: (payment: PaymentData) => void;
}

export interface BookingState {
  service?: Service;
  dateTime?: TimeSlot;
  customer?: CustomerData;
  payment?: {
    method: "deposit" | "pay-at-spa";
    depositAmount?: number;
  };
}

export const bookingSteps: bookingStepInterface[] = [
  { 
    step: 1,
    title: "Service",
    description: "Choose your treatment",
    component: BookingServicePicker,
    schema: serviceSchema,
  },
  { 
    step: 2,
    title: "Date & Time",
    description: "Pick your slot",
    component: BookingDateTimePicker,
    schema: timeSchema,
  },
  {
    step: 3,
    title: "Details",
    description: "Your information",
    component: BookingCustomer,
    schema: customerSchema,
  },
  { 
    step: 4,
    title: "Payment",
    description: "Complete booking",
    component: BookingPaymentPanel,
    schema: paymentSchema,
  },
];
