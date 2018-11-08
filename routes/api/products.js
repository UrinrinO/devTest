const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Product model
const Post = require("../../models/Product");

// Validation
const validateProductInput = require("../../validation/product");

// @route GET api/products/test
// @desc Tests products route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Product Works" }));

// @route GET api/products
// @desc Get products
// @access Public
router.get("/", (req, res) => {
  Product.find()
    .sort({ date: -1 })
    .then(products => res.json(products))
    .catch(err =>
      res.status(404).json({ noproductfound: "No products found" })
    );
});

// @route GET api/products/:id
// @desc Get products by ID
// @access Public
router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(404));
});

// @route GET api/products/details/:id
// @desc Get products by ID
// @access Public
router.get("/details/:id", (req, res) => {
  Product.findById(req.params.id)
    .then(
      res.json({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description
      })
    )
    .catch(err => res.status(404));
});

// @route POST api/products
// @desc create product
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProductInput(req.body);

    // Check Validation
    if (!isValid) {
      // if errors
      return res.status(400).json(errors);
    }

    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
      color: req.body.color
    });

    newProduct.save().then(product => res.json(product));
  }
);

module.exports = router;
