import { useForm } from 'vee-validate';
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const useTwoFactorAuthenticationForm = () => {
  const { success, error } = useToast()

  const formSchema = toTypedSchema(z.object({
      code: z.string().min(1),
      recovery_code: z.string()
  }).refine((data) => !data.code && !data.recovery_code, {
      message: "Please input code",}))

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: formSchema,
  })

  const submit = handleSubmit((values) => {
    success('Two Factor Authentication successful!')
  })

  return {
    submit,
    isSubmitting,
  }
}