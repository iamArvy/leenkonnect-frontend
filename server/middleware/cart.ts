import { useSession } from 'h3'

export default eventHandler(async (event) => {
  // Only run on /api/cart routes
  if (!event.path.startsWith('/api/cart')) return

  const session = await useSession(event, {
    name: 'cart_session',
    password: 'a_super_secure_32_char_min_secret_key',
  })

  // Ensure cart exists in session
  if (!session.data.cart) {
    session.data.cart = []
    await session.update(session.data)
  }

  event.context.cartSession = session
})
