const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');


router.post('/', async (req, res, next) => {
  try {
    const { product, user, rating, text } = req.body;
    if (!product || !user || !rating || !text) {
      return res.status(400).json({ success: false, message: 'Product, user, rating, and text are required' });
    }

    const comment = new Comment({ product, user, rating, text });
    await comment.save();
    res.status(201).json({ success: true, data: comment });
  } catch (error) {
    next(error);
  }
});

router.get('/:productId', async (req, res, next) => {
  try {
    const comments = await Comment.find({ product: req.params.productId }).populate('user');
    if (!comments || comments.length === 0) {
      return res.status(404).json({ success: false, message: 'No comments found for this product' });
    }
    res.status(200).json({ success: true, data: comments });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
