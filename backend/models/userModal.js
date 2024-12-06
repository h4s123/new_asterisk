// backend/models/userModel.js
const pool = require('../db');

// Function to create a new user (Signup)
const createUser = async (name, email, password, role) => {
  const query = `
    INSERT INTO users (name, email, password, role)
    VALUES ($1, $2, $3, $4)
    RETURNING id, name, email, role;
  `;
  const values = [name, email, password, role];
  
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error(err);
    throw new Error('Error creating user');
  }
};

// Function to get a user by email (used for login)
const getUserByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email = $1`;
  try {
    const result = await pool.query(query, [email]);
    return result.rows[0];
  } catch (err) {
    console.error(err);
    throw new Error('Error fetching user');
  }
};

// Function to update the balance of a user
const updateBalance = async (userId, newBalance) => {
  const query = `
    UPDATE users
    SET balance = $1, updated_at = CURRENT_TIMESTAMP
    WHERE id = $2
    RETURNING id, balance;
  `;
  const values = [newBalance, userId];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error(err);
    throw new Error('Error updating balance');
  }
};

module.exports = { createUser, getUserByEmail, updateBalance };
