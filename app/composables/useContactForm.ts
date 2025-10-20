import { toTypedSchema } from "@vee-validate/zod"
import { useForm } from 'vee-validate'
import * as z from 'zod'

export const useContactForm = () => {
  const { success } = useToast()
  // use services and locations from db
  const formSchema = toTypedSchema(z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.email(),
    company: z.string().min(2).max(50).optional(),
    message: z.string().min(10).max(500)
  }))

  const { handleSubmit } = useForm({
    validationSchema: formSchema,
  })


  const submit = handleSubmit((values) => {
    success('Form submitted')
  })

  return { submit }

}