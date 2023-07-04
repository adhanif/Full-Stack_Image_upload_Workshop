const Product = require("../models/products");
const cloudinary = require("../cloudinary");
const fs = require("fs");
const newProduct = async (req, res) => {
  try {
    const { name, price, owner } = req.body;

    const result = await cloudinary.uploader.unsigned_upload(
      req.file.path,
      "cudcirar"
    );

    if (!result || !result.secure_url) {
      throw new Error("Image upload failed");
    }

    const product = await Product.create({
      name: name,
      price: price,
      image: result.secure_url,
      owner: owner,
    });
    try {
      fs.unlinkSync(req.file.path);
      //file removed
    } catch (err) {
      console.error(err);
    }
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating Product");
  }
};

//get all the products
const allProducts = async (req, res) => {
  try {
    const data = await Product.find().populate("owner");
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating user");
  }
};

module.exports = { newProduct, allProducts };
