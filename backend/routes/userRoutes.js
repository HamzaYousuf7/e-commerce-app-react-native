const express = require('express');

// local imp
const userController = require('../controllers/userController');

// start
const router = express.Router();

router.post('/login', userController.login);
router.post('/register', userController.register);

module.exports = router;
