const express = require('express');
const router = express.Router();
const User = require('../models/User');
// Register a new user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body); // Assuming req.body contains the user data
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// Get a user by ID
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
