import { mockFetchProduct, mockFetchProductById } from "~/mocks/product"
import type { Cart, CartItem } from "~/types"

const generateId = () => Math.random().toString(36).substring(2, 2 + 10)
export const useCart = () => {
  const { success, error } = useToast()
  const processing = ref(false)
  // const url = 
  const cart = useState<Cart>('cart', () => ({
    items: [],
    total: 0,
  }))
  const clear = () => {
    cart.value = {
      items: [],
      total: 0,
    } as Cart
    success('Cart Cleared', 'Your cart has been cleared.')
  }
  
  const remove = (id: string) => {
    const item = cart.value.items.find(i => i.id === id)
    if (!item) {
      error('Item not found', 'The item you are trying to remove does not exist in the cart.')
      return
    }
    cart.value.total -= item.total
    cart.value.items = cart.value.items.filter(i => i.id !== id)
    success('Item Removed from Cart', `You have removed ${item.product.name} from your cart.`)
  }

  const add = async (value:number, id:string ) => {
    const product = await mockFetchProductById(id)
    cart.value.items.push({
      id: generateId(),
      product: product,
      quantity: value,
      total: product.price * value,
    })
    cart.value.total += product.price * value
    success('Item Added to Cart', `You have added ${value} x ${product.name} to your cart.`)
  }
  
  const plus = (value:number, id:string) => {
    const item = cart.value.items.find(i => i.id === id)
    if (!item) {
      error('Item not found', 'The item you are trying to increase does not exist in the cart.')
      return
    }
    item.quantity += value
    item.total += item.product.price * value
    cart.value.total += item.product.price * value
    success('Item Quantity Increased', `You have increased the quantity of ${item.product.name} to ${item.quantity}.`)
  }
  
  const minus = (value:number, id:string) => {
    const item = cart.value.items.find(i => i.id === id)
    if (!item) {
      error('Item not found', 'The item you are trying to decrease does not exist in the cart.')
      return
    }
    if (item.quantity <= 1) {
      remove(id)
      return
    }
    item.quantity -= value
    item.total -= item.product.price * value
    cart.value.total -= item.product.price * value
    success('Item Quantity Decreased', `You have decreased the quantity of ${item.product.name} to ${item.quantity}.`)
    // Logic to reduce item quantity
      // value <= 1 ? navigate('cart.remove', id) : navigate('cart.decrease', id)
  }

  const item = computed(() => {
    return (id: string) => cart.value.items.find((i: CartItem) => i.product.id === id)
  })

  // const getItem = (id: string) => computed(() => 
  //   cart.value.items.find(item => item.product.id === id)
  // )

  const getItem = (id: string) => {
    return cart.value.items.find(item => item.product.id === id);
  }

  const checkout = ({}) => {
    // Logic to handle checkout
    clear()
    success('Checkout Successful', 'You have successfully checked out.')
  }

  // const item = computed(() => 
  // cart.value.items.find((i: CartItem) => i.product.id === productId.value)

  
  return {
    cart, 
    clear,
    remove,
    add,
    plus,
    minus,
    item,
    processing,
    getItem,
    checkout
  }
}