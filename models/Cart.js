const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Cart = sequelize.define('Cart', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Cart;
