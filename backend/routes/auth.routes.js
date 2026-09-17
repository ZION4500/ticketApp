const express = require('express');
const { requireFields } = require('../middleware/validate.middleware');
const { login } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/login', requireFields(['username', 'password']), login);

module.exports = router;
