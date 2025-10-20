export default defineEventHandler(async (event) => {
  const items = getSamplePosts()
  return { items }
})
