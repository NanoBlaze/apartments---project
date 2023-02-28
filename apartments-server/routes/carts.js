const express = require("express");
const auth = require("../middlewares/auth");
const Cart = require("../models/Cart");
const joi = require("joi");
const router = express.Router();

const productsSchema = joi.object({
  name: joi.string().required().min(2),
  price: joi.number().required().min(0),
  category: joi.string().required().min(2),
  description: joi.string().required().min(2),
  image: joi.string().required().min(2),
  quantity: joi.number().required(),
});

router.get("/", auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.payload._id });
    if (!cart) return res.status(404).send("No cart for user");
    res.status(200).send(cart.products);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const { error } = productsSchema.validate(req.body);
    if (error) return res.status(400).send(error.message);

    let cart = await Cart.findOne({ userId: req.payload._id });
    if (!cart) return res.status(404).send("No cart for user");

    cart.products.push(req.body);
    await cart.save();
    res.status(200).send(cart.products);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:productId", auth, async (req, res) => {
  try {
    const productId = req.params.productId;

    let cart = await Cart.findOne({ userId: req.payload._id });
    if (!cart) return res.status(404).send("No cart for user");

    const productIndex = cart.products.findIndex(
      (product) => product._id.toString() === productId.toString()
    );

    if (productIndex === -1)
      return res.status(404).send("Product not found in cart");

    cart.products.splice(productIndex, 1);
    await cart.save();

    res.status(200).send(cart.products);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/:productId", auth, async (req, res) => {
  try {
    const productId = req.params.productId;
    const quantity = req.body.quantity;

    let cart = await Cart.findOne({ userId: req.payload._id });
    if (!cart) return res.status(404).send("No cart for user");

    const productIndex = cart.products.findIndex(
      (product) => product._id.toString() === productId.toString()
    );

    if (productIndex === -1)
      return res.status(404).send("Product not found in cart");

    // Update the product's quantity
    cart.products[productIndex].quantity = quantity;
    await Cart.findByIdAndUpdate(cart._id, cart, { new: true });

    res.status(200).send(cart.products);
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;
