import { useForm } from 'vee-validate';
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const useResetPasswordForm = () => {
  const { success, error } = useToast()
  const { query } = useRoute()

  const formSchema = toTypedSchema(z.object({
      token: z.string().min(1),
      email: z.email(),
      password: z.string().min(8, "Password must be at least 8 characters long").max(50, "Password must be at most 50 characters long"),
      password_confirmation: z.string(),
  }).refine((data) => data.password === data.password_confirmation, {
      message: "Passwords don't match",}))

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: formSchema,
    initialValues: {
      email: query.email as string || '',
      token: query.token as string || '',
    },
  })

  const submit = handleSubmit((values) => {
    success('Password reset successfully!')
  })

  return {
    submit,
    isSubmitting,
  }
}