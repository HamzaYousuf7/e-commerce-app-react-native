const express = require('express');

// local imp
const orderController = require('../controllers/orderController');

// start
const router = express.Router();

router.post('/', orderController.addOrder);

module.exports = router;
