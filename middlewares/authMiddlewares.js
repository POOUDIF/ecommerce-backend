const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/auth');

// Middleware untuk memverifikasi token JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']; // Token dikirimkan di header Authorization

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const verified = jwt.verify(token.split(' ')[1], jwtSecret); // Verifikasi token
    req.user = verified; // Menyimpan data pengguna dari token ke req.user
    next(); // Lanjutkan ke handler berikutnya
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};

// Middleware untuk memeriksa peran pengguna (contoh: admin)
const authorizeRole = (requiredRole) => {
  return (req, res, next) => {
    if (req.user.role !== requiredRole) {
      return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
    }
    next();
  };
};

module.exports = { authenticateToken, authorizeRole };
