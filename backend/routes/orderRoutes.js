const express = require('express');

// local imp
const orderController = require('../controllers/orderController');

// start
const router = express.Router();

router.post('/placedOrder', orderController.addOrder);
router.post('/getOrders', orderController.getCustomerOrders);
router.post('/getOrderItems', orderController.getOrderItems);
module.exports = router;
