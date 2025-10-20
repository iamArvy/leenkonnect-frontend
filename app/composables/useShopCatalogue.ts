import type { ProductFilters } from "~/interfaces/shop/product"

export const useShopFilters = () => {
  const {params, query, path} = useRoute()
  const filters = ref<ProductFilters>({
    cid: params.cid as string,
    pr: query.pr as unknown as number[] || [100000, 2000000],
    r: query.r as unknown as number[] || [1, 5],
    q: query.q as string
  })


  function applyFilters() {
    const allFilters = filters.value
    const { cid, ...query } = allFilters
    const route = cid
          ? `/shop/${cid}`
          :'/shop';
    navigateTo({path: route, query: {...query}})
  }

  function paginate(page: number) {
    navigateTo({path: path, query: {...query, page}})
  }

  return {
    filters,
    applyFilters,
    paginate
  }
}
