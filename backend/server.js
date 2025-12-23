require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth/login', require('./routes/auth/login'));
app.use('/api/auth/register', require('./routes/auth/register'));

// Default route
app.get('/', (req, res) => {
  res.send('Kapable Solutions Backend API');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});