const express = require('express');
const router = express.Router();
const {addProduct, searchProducts} = require('../controllers/product')

router.post('/add',addProduct);

router.get('/get',searchProducts);


module.exports = router