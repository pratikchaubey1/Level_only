const express = require('express');
const router = express.Router();

const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require('../Controllers/Product');

// Get all products
router.get('/', getProducts);

// Create a new product
router.post('/', createProduct);

// Delete a product by id
router.delete('/:id', deleteProduct);

// Update a product by id
router.put('/:id', updateProduct);

module.exports = router;
