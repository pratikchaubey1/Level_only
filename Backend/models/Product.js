const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    sparse: true,
  },
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
    enum: ['Shoes', 'Shirts', 'Bags', 'Jeans'],
  },
  Description: {
    type: String,
    trim: true,
  },
}, { timestamps: true });

// Pre-save middleware to auto-generate ID
productSchema.pre('save', async function(next) {
  if (!this.id) {
    try {
      const lastProduct = await mongoose.model('Product').findOne().sort({ id: -1 }).lean();
      this.id = (lastProduct?.id || 0) + 1;
    } catch (error) {
      this.id = 1;
    }
  }
  next();
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
