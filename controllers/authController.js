const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Buat user baru
      const newUser = await User.create({ username, email, password: hashedPassword });

      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      res.status(500).json({ message: 'Registration failed', error });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Cari user berdasarkan email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Periksa password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Buat token JWT
      const token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '1h' });

      res.json({ message: 'Login successful', token });
    } catch (error) {
      res.status(500).json({ message: 'Login failed', error });
    }
  },
};
