import type { Cart, CartItem } from "~/types"

export const useCart = () => {
  const processing = ref(false)
  // const url = 
  const cart = useState<Cart>('cart', () => ({
    items: [],
    total: 0,
  }))
  const clear = () => {
    cart.value = {} as Cart
      // router.post(route('cart.clear'), { preserveScroll: true });
      console.log('Cart cleared')
  }
  
  const remove = (id: string) => {
      // router.post(route('cart.remove'), { id:id }, { preserveScroll: true });
      console.log('Cart Item Removed')
  }

  const add = (value:number, id:string ) => {
    // Logic to increase item quantity
      // if (value < stock) navigate('cart.increase', id)
  }
  
  
  const minus = (value:number, id:string) => {
    // Logic to reduce item quantity
      // value <= 1 ? navigate('cart.remove', id) : navigate('cart.decrease', id)
  }

  const item = computed(() => {
    return (id: string) => cart.value.items.find((i: CartItem) => i.product.id === id)
  })

  const itemsByProductId = computed<Record<string, CartItem>>(() =>
  Object.fromEntries(
    cart.value.items.map((item: CartItem) => [item.product.id, item])
  )
)

const getItem = (id: string) => itemsByProductId.value[id]


  // const item = computed(() => 
  // cart.value.items.find((i: CartItem) => i.product.id === productId.value)

  
  return {
    cart, 
    clear,
    remove,
    add,
    minus,
    item,
    processing,
    getItem
  }
}