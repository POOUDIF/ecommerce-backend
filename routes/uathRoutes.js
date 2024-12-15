const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Rute untuk mendaftarkan pengguna baru
router.post('/register', authController.register);

// Rute untuk login pengguna
router.post('/login', authController.login);

module.exports = router;
