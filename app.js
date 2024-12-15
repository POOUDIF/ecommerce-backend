const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize } = require('./config/db');

// Impor rute
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes');

// Inisialisasi aplikasi
const app = express();

// Middleware
app.use(cors()); // Mengaktifkan CORS
app.use(bodyParser.json()); // Parsing JSON
app.use(bodyParser.urlencoded({ extended: true })); // Parsing form data

// Gunakan rute
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/products', productRoutes);

// Root endpoint (opsional)
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Sinkronisasi database dan jalankan server
(async () => {
  try {
    await sequelize.sync(); // Sinkronisasi model dengan database
    console.log('Database synchronized successfully.');

    const PORT = 3000; // Port server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
  }
})();
