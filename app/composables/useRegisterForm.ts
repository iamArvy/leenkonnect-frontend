import { useForm } from 'vee-validate';
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const useRegisterForm = () => {
  const { success, error } = useToast()
  const formSchema = toTypedSchema(z.object({
      name: z.string().min(1),
      email: z.email(),
      password: z.string().min(8, "Password must be at least 8 characters long").max(50, "Password must be at most 50 characters long"),
      password_confirmation: z.string(),
      terms: z.boolean().optional()
  }).refine((data) => data.password === data.password_confirmation, {
      message: "Passwords don't match",}))

  const { handleSubmit, isSubmitting, meta } = useForm({
    validationSchema: formSchema,
    initialValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      terms: false,
    },
  })

  const submit = handleSubmit((values) => {
    console.log('Form submitted!', values)
  })
  return {
    submit,
    isSubmitting,
    meta
  }
}