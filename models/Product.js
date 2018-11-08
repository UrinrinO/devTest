const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ProductSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  image: {
    type: String
  },
  color: {
    type: String
  }
});

module.exports = Product = mongoose.model("products", ProductSchema);
