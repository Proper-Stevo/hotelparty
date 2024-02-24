const express = require('express');
const router = express.Router();
const db = require('../../db'); // Import the database connection
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { emailOrUsername, password } = req.body;
  try {
    // Check if a user with the provided email/username exists
    const user = await User.findByEmailOrUsername(emailOrUsername);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password matches
    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // If credentials are correct, return user data
    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
