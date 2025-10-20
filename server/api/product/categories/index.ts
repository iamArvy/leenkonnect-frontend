export default defineEventHandler(async (event) => {
  const items = getCategories()
  return { items }
})
