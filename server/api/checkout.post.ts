import { z } from 'zod'
const bodySchema = z.object({
  name: z.string().min(2).max(50),
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
})
export default defineEventHandler(async (event) => {
  const { email, items } = await readValidatedBody(event, bodySchema.parse)
  const order = {
    id: crypto.randomUUID(),
    email,
    price: 50000,
    items
  }
  return order
})
