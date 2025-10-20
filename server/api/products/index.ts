export default defineEventHandler(async (event) => {
  const items = getProducts()
  return { items }
})
