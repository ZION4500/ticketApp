const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AppError = require('../utils/AppError');
// const env = require('../config/env');

function login(username, password) {
  const user = User.findByUsername(username);
  if (!user) {
    throw new AppError('Invalid credentials', 401);
  }

  const isMatch = bcrypt.compareSync(password, user.passwordHash);
  if (!isMatch) {
    throw new AppError('Invalid credentials', 401);
  }

  const token = jwt.sign(
    { sub: user.id, username: user.username, role: user.role },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn }
  );

  return { token, user: { id: user.id, username: user.username, role: user.role } };
}

module.exports = { login };
