const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  products: [
    {
      productId: String,
      name: String,
      price: Number,
      category: String,
      description: String,
      image: String,
      quantity: Number,
    },
  ],
  active: {
    type: Boolean,
    required: true,
  },
});

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
