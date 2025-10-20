import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

export const useLoginForm = () => {
  const { success, error } = useToast()
  const { fetch: refreshSession } = useUserSession()
  const { query } = useRoute()
  const redirectPath = query.redirect as string || '/'
const formSchema = toTypedSchema(z.object({
    email: z.email(),
    password: z.string().min(8, "Password must be at least 8 characters long").max(50, "Password must be at most 50 characters long"),
    remember: z.boolean().optional(),
}))

const { handleSubmit, isSubmitting, meta } = useForm({
    validationSchema: formSchema,
    initialValues: {
        email: '',
        password: '',
        remember: false,
    },
})

const submit = handleSubmit( async (values) => {
  try {
    const { data, error } = await useFetch('/api/login', {
      method: 'POST',
      body: values,
    })

    if (error.value) throw error.value
    success('Logged in successfully!')
    await refreshSession()
    navigateTo(redirectPath)
  } catch (err) {
    error('Login failed. Please try again.')
  }
})
  return {
    submit,
    isSubmitting,
    meta
  
  }
}