const AppError = require('../utils/AppError');

// Tiny dependency-free body validator. Pass a list of required field
// names; swap for zod/joi/express-validator once the schemas grow.
function requireFields(fields) {
  return (req, res, next) => {
    const missing = fields.filter((field) => {
      const value = req.body?.[field];
      return value === undefined || value === null || value === '';
    });

    if (missing.length > 0) {
      return next(new AppError(`Missing required field(s): ${missing.join(', ')}`, 400));
    }
    next();
  };
}

module.exports = { requireFields };