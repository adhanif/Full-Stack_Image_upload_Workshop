const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
    required: true,
  },
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: imageSchema,
    // type: String,
    // required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

const Product = mongoose.model("Products", productSchema);
module.exports = Product;
