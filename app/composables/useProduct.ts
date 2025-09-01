import { mockFetchProduct, mockGetFeaturedProducts, mockListProducts } from "~/mocks/product"

export const useProduct = () => {
  const url = ''

  const fetchProduct = async (slug: string) => {
    const {data: product} = useAsyncData(
      `product-${slug}`,
      () => mockFetchProduct(slug),
      { immediate: true })
    return product.value
  }

  const getFeaturedProducts = async () => {
    const {data: products} = useAsyncData(
      'featured-products',
      () => mockGetFeaturedProducts(),
      { immediate: true })
    return products.value || []
  }

  const listProducts = async () => {
    const {data: products} = useAsyncData(
      'products',
      () => mockListProducts(),
      { immediate: true })
    return products.value || []
  }

  return {
    fetchProduct,
    getFeaturedProducts,
    listProducts,
  }
}