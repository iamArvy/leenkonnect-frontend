import { toTypedSchema } from "@vee-validate/zod"
import { useForm } from 'vee-validate'
import * as z from 'zod'

export const useBookingForm = () => {
  const { success } = useToast()
  const locations = [
    {
      name: 'Google Meet',
      id: 'meet'
    },
    {
      name: 'Zoom',
      id: 'zoom'
    },
    {
      name: 'In Person',
      id: 'inperson'
    }
  ]
  // use services and locations from db
  const formSchema = toTypedSchema(z.object({
    service: z.string().min(2).max(50),
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.email(),
    company: z.string().min(2).max(50).optional(),
    challenge: z.string().min(10).max(500),
    location: z.string().min(2).max(50)
  }))

  const { handleSubmit } = useForm({
    validationSchema: formSchema,
  })


  const submit = handleSubmit((values) => {
    success('Form submitted')
  })

  return { submit, locations }

}