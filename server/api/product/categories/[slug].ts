import { getCategory } from "~~/server/utils/mocks";

export default defineEventHandler(async (event) => {
  const {slug} = getRouterParams(event)
  const category = getCategory(slug)
  if(!category) throw createError({
      statusCode: 404,
      statusMessage: 'Product not found',
    });
  return category
})
