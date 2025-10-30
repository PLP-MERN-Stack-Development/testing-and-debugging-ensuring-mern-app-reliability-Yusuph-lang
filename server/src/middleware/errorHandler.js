// server/src/middleware/errorHandler.js

// Custom Express error-handling middleware
function errorHandler(err, req, res, next) {
  console.error('Error:', err.message); // Log the error for debugging

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
}

module.exports = errorHandler;
