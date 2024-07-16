const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

router.post('/', async (req, res, next) => {
  try {
    const { user, products } = req.body;
    if (!user || !products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ success: false, message: 'User and products are required' });
    }

    const cart = new Cart({ user, products });
    await cart.save();
    res.status(201).json({ success: true, data: cart });
  } catch (error) {
    next(error);
  }
});


router.get('/:userId', async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId }).populate('products.product');
    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }
    res.status(200).json({ success: true, data: cart });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
