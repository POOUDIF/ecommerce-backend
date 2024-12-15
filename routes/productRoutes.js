const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// Rute untuk menambahkan produk baru
router.post('/create', productController.createProduct);

// Rute untuk mendapatkan semua produk
router.get('/', productController.getAllProducts);

// Rute untuk memperbarui produk tertentu
router.put('/update/:productId', productController.updateProduct);

// Rute untuk menghapus produk tertentu
router.delete('/delete/:productId', productController.deleteProduct);

module.exports = router;
