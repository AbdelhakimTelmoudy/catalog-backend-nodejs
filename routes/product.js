
const express = require('express');
const { getAllProducts, getProductByID, saveProduct, updateProduct, deleteProductById,  } = require('../controllers/ProductController');
const router = express.Router();



router.get('/', getAllProducts);

router.get('/:id',getProductByID);

router.post('/',saveProduct);

router.put('/:id',updateProduct);

router.delete('/:id', deleteProductById);
module.exports = router;