const joi = require("joi");
const express = require("express");
const router = express.Router();
const usersModel = require("../models/User");

const confirmRegisterSchema = joi.object({
  email: joi.string().email().min(7).max(255).trim().required(),
  secretKey: joi
    .string()
    .pattern(/^[0-9a-z]*$/)
    .length(8)
    .trim()
    .required(),
});

router.get("/:email/:secretKey", async (req, res) => {
  try {
    const validatedValue = await confirmRegisterValidation(req.params);
    const user = await usersModel.findUserByEmail(validatedValue.email);
    if (!user) {
      throw "Invalid Credentials";
    }
    if (user.secretKey !== validatedValue.secretKey) {
      throw "Invalid Credentials";
    }
    await usersModel.updateIsMailValid(validatedValue.email);
    res.json({ status: "OK" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
