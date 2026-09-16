const express = require('express');
const router = express.Router();
const userController = require('../controller/userControllers');
const { findByUsername } = require('../models/users');
     
router.get('/', userController.getAllUsers);
router.get('/:username', userController.getUserByUsername);
router.post('/', userController.createUser);
router.put('/:username', userController.updateUser);
router.delete('/:username', userController.deleteUser);

module.exports = router;