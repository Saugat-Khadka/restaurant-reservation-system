class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Middleware to handle all errors
const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  // Handle CastError
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: `Resource not found. Invalid: ${err.path}`,
    });
  }

  // Handle Mongoose ValidationError
  if (err.name === "ValidationError") {
    const validationErrors = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({
      success: false,
      message: validationErrors.join(", "),
    });
  }

  // Default error response
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

export { ErrorHandler, errorMiddleware };