// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { verifyToken, checkRole } = require('../middleware/auth');

// Get all products (public access)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new product (Seller only)
router.post('/', verifyToken, checkRole('isSeller'), async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const product = new Product({ name, description, price });
    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a product (Seller only)
router.put('/:id', verifyToken, checkRole('isSeller'), async (req, res) => {
  try {
    const updateData = req.body;
    const product = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product updated successfully', product });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a product (Seller only)
router.delete('/:id', verifyToken, checkRole('isSeller'), async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
