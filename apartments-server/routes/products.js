const express = require("express");
const auth = require("../middlewares/auth");
const Product = require("../models/Product");
const joi = require("joi");
const router = express.Router();

const productsSchema = joi.object({
  name: joi.string().required().min(2),
  price: joi.number().required().min(0),
  category: joi.string().required().min(2),
  description: joi.string().required().min(2),
  image: joi.string().required().min(2),
});

router.delete("/:id", auth, async (req, res) => {
  try {
    if (!req.payload.isPoster)
      return res.status(400).send("Only registerd can delete products");

    let product = await Product.findByIdAndRemove({ _id: req.params.id });
    if (!product) return res.status(404).send("No such product");
    res.status(200).send("product was deleted!");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    if (!req.payload.isPoster)
      return res.status(400).send("Only registerd can add products");

    const { error } = productsSchema.validate(req.body);
    if (error) return res.status(400).send(error.message);

    let product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (!product) return res.status(404).send("No such Apartment");

    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.params.id });
    if (!product) return res.status(404).send("No such product");
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", auth, async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    if (!req.payload.isPoster)
      return res.status(400).send("Only registerd can add products");

    const { error } = productsSchema.validate(req.body);
    if (error) return res.status(400).send(error.message);

    let product = new Product(req.body);
    await product.save();

    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
