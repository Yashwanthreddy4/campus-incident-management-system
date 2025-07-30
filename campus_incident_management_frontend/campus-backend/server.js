const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection - Commented out for now
/*
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/campus_incidents', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));
*/

// Importing User model
// const User = require('./models/User');

// Registration Route
app.post('/api/register', (req, res) => {
  // Simulate a successful registration without MongoDB
  const { name, email, password } = req.body;
  if (name && email && password) {
    res.status(201).json({ message: 'Registration successful!' });
  } else {
    res.status(400).json({ error: 'Error during registration' });
  }
});

// Login Route
app.post('/api/login', (req, res) => {
  // Simulate a successful login without MongoDB
  const { email, password } = req.body;
  if (email === 'test@example.com' && password === 'password123') {
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ error: 'Invalid credentials!' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend server running at http://localhost:${PORT}`);
});
