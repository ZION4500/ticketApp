const authService = require('../services/auth.service');

function login(req, res) {
  const { username, password } = req.body;
  const result = authService.login(username, password);
  res.json(result);
}

module.exports = { login };
