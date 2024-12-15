const Product = require('../models/Product');

module.exports = {
  createProduct: async (req, res) => {
    try {
      const { name, price } = req.body;

      // Buat produk baru
      const newProduct = await Product.create({ name, price });

      res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create product', error });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.findAll();

      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch products', error });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { productId } = req.params;
      const { name, price } = req.body;

      // Perbarui produk
      await Product.update({ name, price }, { where: { id: productId } });

      res.json({ message: 'Product updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to update product', error });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { productId } = req.params;

      // Hapus produk
      await Product.destroy({ where: { id: productId } });

      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete product', error });
    }
  },
};
