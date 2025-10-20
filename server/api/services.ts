export default defineEventHandler(async (event) => {
  const items = mockGetServices()
  return { items }
})
