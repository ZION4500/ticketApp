const AppError = require('../utils/AppError');


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