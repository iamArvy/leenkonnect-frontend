import { format, isToday } from "date-fns";
import type { Service,  TimeSlot } from ".";

export const mockServices = ref<Service[]>([
  { id: "1", name: "Therapeutic Massage", duration: 60, price: 25000, description: "Release tension with our signature deep tissue and Swedish massage techniques", category: "Massage" },
  { id: "2", name: "Rejuvenating Facial", duration: 45, price: 18000, description: "Restore your skin's natural glow with customized facial treatments", category: "Facial" },
  { id: "3", name: "Aromatherapy Session", duration: 90, price: 35000, description: "Immerse yourself in healing essential oils and calming scents", category: "Wellness" },
  { id: "4", name: "Hot Stone Therapy", duration: 75, price: 30000, description: "Melt away stress with our signature hot stone massage treatment", category: "Massage" },
  { id: "5", name: "Anti-Aging Facial", duration: 60, price: 22000, description: "Combat signs of aging with our advanced skincare treatments", category: "Facial" },
  { id: "6", name: "Couples Massage", duration: 60, price: 45000, description: "Share a relaxing experience with your loved one", category: "Couples" }
]);

// Mock availability generator
export const generateMockSlots = (date: Date) => {
  const slots: TimeSlot[] = []
  const baseDate = new Date(date)

  for (let hour = 9; hour <= 19; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const slotTime = new Date(baseDate)
      slotTime.setHours(hour, minute, 0, 0)

      if (isToday(date) && slotTime <= new Date()) continue

      const isAvailable = Math.random() > 0.3

      slots.push({
        id: `${hour}-${minute}`,
        time: slotTime,
        displayTime: format(slotTime, "h:mm a"),
        isAvailable,
        date
      })
    }
  }

  return slots
}