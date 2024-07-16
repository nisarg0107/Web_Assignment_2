const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create an order
router.post('/', async (req, res, next) => {
  try {
    const { user, products } = req.body;
    if (!user || !products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ success: false, message: 'User and products are required' });
    }

    const order = new Order({ user, products });
    await order.save();
    res.status(201).json({ success: true, data: order });
  } catch (error) {
    next(error);
  }
});

// Get orders by user ID
router.get('/:userId', async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).populate('products.product');
    if (!orders || orders.length === 0) {
      return res.status(404).json({ success: false, message: 'No orders found for this user' });
    }
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
