const express = require("express");
const productRouter = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { allProducts, newProduct } = require("../backend_controllers/product");

productRouter.get("/products", allProducts);
productRouter.post("/products", upload.single("image"), newProduct);

module.exports = productRouter;
