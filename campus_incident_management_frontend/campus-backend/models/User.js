const mongoose = require('mongoose');

// User schema definition
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // User's full name
  email: { type: String, required: true, unique: true }, // User's unique email
  password: { type: String, required: true }, // User's password
});

// Create and export the User model based on the schema
module.exports = mongoose.model('User', userSchema);
