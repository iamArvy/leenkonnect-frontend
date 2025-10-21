import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { computed } from 'vue';
import { states } from '~/data';
export function useCheckoutForm () {
  const { success, info, error } = useToast()
  const { cart } = useCart();
  const formSchema = toTypedSchema(z.object({
    name: z.string("Name is required").min(2).max(50),
    phone: z.string().min(2).max(50),
    address: z.object({
      street: z.string().min(2).max(100),
      city: z.string().min(2).max(50),
      state: z.string().min(2).max(50),
    }),
    email: z.email(),
    items: z.array(z.object({
      id: z.string().min(2).max(50),
      quantity: z.number().min(1),
    }))
  }))

  const { handleSubmit, isSubmitting, meta, values } = useForm({
    validationSchema: formSchema,
    initialValues: {
      items: cart.value.items.map(item => ({
        id: item.product.id,
        quantity: item.quantity,
      })),
    }
  })


  const cities = computed(() => {
    const selectedState = states.find((s: any) => s.name === values.address?.state);
    return selectedState ? selectedState.cities : [];
  });

  const submit = handleSubmit( async (values) => {
    const order = await $fetch('/api/checkout', {
      method: 'POST',
      body: values,
    })

    const email = order.email
    const amount = order.price
    const reference = order.id
    const payment = await usePaystack(email, amount, reference)
    if (payment.success) {
      success('Payment success!')
    } else if (payment.cancelled) {
      info('Payment unsuccessful')
    } else if (payment.error) {
      error('Payment cancelled')
    }
    success("Checkout Successful")
  })

  return {
    submit,
    cities,
    values,
    isSubmitting,
    meta,
    states
  }
}