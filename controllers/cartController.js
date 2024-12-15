const Cart = require('../models/Cart');
const Product = require('../models/Product');

module.exports = {
  addToCart: async (req, res) => {
    try {
      const { userId, productId, quantity } = req.body;

      // Tambahkan produk ke keranjang
      const newCartItem = await Cart.create({ userId, productId, quantity });

      res.status(201).json({ message: 'Product added to cart', cartItem: newCartItem });
    } catch (error) {
      res.status(500).json({ message: 'Failed to add product to cart', error });
    }
  },

  getCartItems: async (req, res) => {
    try {
      const { userId } = req.params;

      // Ambil semua item di keranjang untuk user tertentu
      const cartItems = await Cart.findAll({
        where: { userId },
        include: [Product],
      });

      res.json(cartItems);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch cart items', error });
    }
  },

  removeFromCart: async (req, res) => {
    try {
      const { cartId } = req.params;

      // Hapus item dari keranjang
      await Cart.destroy({ where: { id: cartId } });

      res.json({ message: 'Product removed from cart' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to remove product from cart', error });
    }
  },
};
