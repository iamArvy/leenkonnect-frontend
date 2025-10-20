export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const categoryId = query.cid as string
  const pageSize = query.pageSize as number
  const items = getPosts(pageSize ?? 12, { categoryId })
  return { items }
})
