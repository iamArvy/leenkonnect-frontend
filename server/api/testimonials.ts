import { getTestimonies } from "../utils/mocks"

export default defineEventHandler(async (event) => {
  const items = getTestimonies()
  return { items }
})
