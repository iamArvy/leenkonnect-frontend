import type { Cart, Product } from "~/interfaces"

interface CartResponse {
  success: boolean,
  cart: Cart
}
// composables/useCart.ts
export function useCart() {
  const { success, error } = useToast()
  //   const cart = useState<Cart>({
  //   items: [],
  //   total: 0,
  // });
  const cart = useState<Cart>('cart', () => ({
    items: [],
    total: 0,
  }))

  const processing = ref(false);

  onMounted(() => {
    if (import.meta.client) {
      const stored = localStorage.getItem("cart");
      if (stored) {
        try {
          cart.value = JSON.parse(stored);
        } catch {
          cart.value = { items: [], total: 0 };
        }
      }
    }
  });

  watch(
    cart,
    (val) => {
      if (import.meta.client) {
        localStorage.setItem("cart", JSON.stringify(val));
      }
    },
    { deep: true }
  );

  function add(product: Product) {
    cart.value.items.push({
      product: product,
      quantity: 1,
      total: product.price,
    })
    cart.value.total += product.price
    success('Item Added to Cart', `You have added ${product.name} to your cart.`)
  }

  async function plus(id: string) {
    const item = getItem(id)
    if (!item) {
      error('Item not found', 'The item you are trying to increase does not exist in the cart.')
      return
    }
    item.quantity++
    item.total += item.product.price
    cart.value.total += item.product.price
    success('Item Quantity Increased', `You have increased the quantity of ${item.product.name} to ${item.quantity}.`)
  }

  function minus(id: string) {
    const item = getItem(id)
    if (!item) {
      error('Item not found', 'The item you are trying to decrease does not exist in the cart.')
      return
    }
    if (item.quantity <= 1) {
      remove(id)
      return
    }
    item.quantity--
    item.total -= item.product.price
    cart.value.total -= item.product.price
    success('Item Quantity Decreased', `You have decreased the quantity of ${item.product.name} to ${item.quantity}.`)
  }

  function remove(id: string) {
    const item = getItem(id)
    if (!item) {
      error('Item not found', 'The item you are trying to remove does not exist in the cart.')
      return
    }
    cart.value.total -= item.total
    cart.value.items = cart.value.items.filter(i => i.product.id !== id)
    success('Item Removed from Cart', `You have removed ${item.product.name} from your cart.`)
  }

  function clear() {
    cart.value = {
      items: [],
      total: 0
    }
    success('Cart Cleared', 'Your cart has been cleared.')
  }

  function getItem(id: string){
    return cart.value.items.find(i => i.product.id === id);
  }

  return { cart, processing, getItem, add, plus, minus, remove, clear }
}