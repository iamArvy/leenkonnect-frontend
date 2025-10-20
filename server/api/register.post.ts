import { z } from 'zod'
import { faker } from '@faker-js/faker'
const bodySchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
  password: z.string().min(8),
})
export default defineEventHandler(async (event) => {
  const { firstName, lastName, email, password } = await readValidatedBody(event, bodySchema.parse)
  const user = {
    firstName,
    lastName,
    email,
    password
  }
  setUserSession(event, {
    user
  })
  throw createError({
    statusCode: 401,
    message: 'Password validation incorrect',
  })
})
