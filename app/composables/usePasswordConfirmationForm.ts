import { useForm } from 'vee-validate';
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
export const usePasswordConfirmationForm = () => {
  const { success, error } = useToast()

  const formSchema = toTypedSchema(z.object({
    password: z.string().min(2).max(50),
  }))

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: formSchema,
  })


  const submit = handleSubmit((values) => {
    success('Password changed successfully!')
  })
  return {
    submit,
    isSubmitting
  }
}