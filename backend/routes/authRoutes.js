// backend/routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const { createUser, getUserByEmail } = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { name, email, password, confirmPassword, adminKey } = req.body;

  // Check if the passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match.' });
  }

  // Check if the user already exists
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists.' });
  }

  // Check if adminKey is provided and matches
  let role = 'user';
  if (adminKey && adminKey === process.env.ADMIN_KEY) {
    role = 'admin';
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Create the new user in the database
    const user = await createUser(name, email, hashedPassword, role);
    
    // Send success response
    res.status(201).json({ message: 'User created successfully!', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error during sign-up' });
  }
});

module.exports = router;
