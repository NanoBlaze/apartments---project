const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    minlength: 2,
  },
  description: {
    type: String,
    required: true,
    minlength: 6,
  },
  image: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
