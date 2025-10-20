export default defineEventHandler(async (event) => {
  const {id} = getRouterParams(event)
  const post = generatePost()
  return post
})
