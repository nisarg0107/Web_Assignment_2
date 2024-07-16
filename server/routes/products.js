const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  const { description, image, pricing, shippingCost } = req.body;
  if (!description || !pricing) {
    return res.status(400).json({ success: false, message: 'Description and pricing are required' });
  }

  const product = new Product({
    description,
    image,
    pricing,
    shippingCost,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
