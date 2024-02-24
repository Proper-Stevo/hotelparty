const express = require('express');
const router = express.Router();
const db = require('../../db'); // Import the database connection
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  const { email, username, password, birthday } = req.body;
  try {
    // Create a new user using the User model and save it to the database
    const newUser = await User.create(email, username, password, birthday);
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
