const express = require('express');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

// Error handling middleware (must come last)
app.use(errorHandler);

module.exports = app;
