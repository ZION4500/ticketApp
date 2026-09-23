// A typed error so the error-handling middleware can distinguish
// "expected" failures (404, validation, auth) from real bugs.
class AppError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

module.exports = AppError;
