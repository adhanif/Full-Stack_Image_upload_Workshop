const Product = require("../models/products");

const newProduct = async (req, res) => {
  try {
    const { name, price, owner } = req.body;
    const image = req.file.filename;
    console.log(image);
    // if (req.file) {
    //   image = req.file.filename;
    // } else if (req.body.image && req.body.image.startsWith("http")) {
    //   image = req.body.image;
    // }
    const product = await Product.create({
      name: name,
      price: price,
      image: image,
      owner: owner,
    });
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating user");
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
