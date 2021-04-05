const express = require('express');

// local imp
const userController = require('../controllers/userController');

// start
const router = express.Router();

router.post('/login', userController.login);

module.exports = router;
