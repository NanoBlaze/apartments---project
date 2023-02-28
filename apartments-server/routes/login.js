const express = require("express");
const User = require("../models/User");
const _ = require("lodash");
const joi = require("joi");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");

const loginSchema = joi.object({
  email: joi.string().required().min(6).email(),
  password: joi.string().required().min(8),
});

router.post("/", async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).send(error.message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("wrong email or password");

    const result = await bcrypt.compare(req.body.password, user.password);
    if (!result) return res.status(400).send("Invaild email or password");
    const generatedToken = jwt.sign(
      { _id: user._id, isPoster: user.isPoster },
      process.env.jwtKey
    );

    res.status(200).send({ token: generatedToken });
  } catch (error) {
    res.status(400).send("error in post login");
  }
});

module.exports = router;
