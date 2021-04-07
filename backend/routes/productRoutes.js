const express = require('express');

// local imp
const productController = require('../controllers/productController');
//start
const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:productID',productController.getSingleProduct)
module.exports = router;
