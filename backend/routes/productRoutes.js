const express = require('express');

// local imp
const productController = require('../controllers/productController');
//start
const router = express.Router();

router.get('/', productController.test);
module.exports = router;