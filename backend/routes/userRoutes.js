const express = require('express');

// local imp
const userController = require('../controllers/userController');

// start
const router = express.Router();

router.get('/', userController.test);

module.exports = router;
