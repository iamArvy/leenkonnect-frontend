import type { ProductFilters } from "~/interfaces/shop/product"

export const useBlogFilters = () => {
  const {params, query, path} = useRoute()
  const filters = ref({
    cid: query.cid as string,
    q: query.q as string
  })


  function applyFilters() {
    navigateTo({path: 'blog', query: filters.value})
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
