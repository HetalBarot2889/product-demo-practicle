const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');


router.get('/getProducts', productController.getAllProduct);

module.exports = router;