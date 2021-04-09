const express = require('express');

// local imp
const orderController = require('../controllers/orderController');

// start
const router = express.Router();

router.post('/placedOrder', orderController.addOrder);
router.post('/getOrders',orderController.getCustomerOrders);
module.exports = router;
