// This is for the server
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');


// JWT Secret
const jwtSecret = process.env.JWT_SECRET;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


// Import routes
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
  
// Example of using the jwtSecret to sign a token
const payload = { userId: 'user_id_example' };
const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
console.log('Generated JWT:', token);
  
// Test Route
app.get('/', (req, res) => {
    res.send('CampusLive Backend is running');
});

// Start the Server
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
