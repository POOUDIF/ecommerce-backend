const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

// Rute untuk menambahkan item ke keranjang
router.post('/add', cartController.addToCart);

// Rute untuk mendapatkan semua item di keranjang pengguna tertentu
router.get('/:userId', cartController.getCartItems);

// Rute untuk menghapus item dari keranjang
router.delete('/remove/:cartId', cartController.removeFromCart);

module.exports = router;
