import { useForm } from 'vee-validate';
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'



export const useForgotPasswordForm = () => { 
  const { success, error } = useToast()
  const formSchema = toTypedSchema(z.object({
    email: z.email(),
  }))

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: formSchema,
  })


  const submit = handleSubmit((values) => {
    success('Password reset email sent!')
  })

  return {
    submit,
    isSubmitting
  }
}