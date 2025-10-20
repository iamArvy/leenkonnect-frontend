export default defineEventHandler(async (event) => {
  const {slug} = getRouterParams(event)
  const product = getProduct(slug)
  if(!product) throw createError({
      statusCode: 404,
      statusMessage: 'Product not found',
    });
  return product
})
