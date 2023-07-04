const express = require("express");
const productRouter = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {
  allProducts,
  newProduct,
  deleteProduct,
} = require("../backend_controllers/product");

productRouter.get("/", allProducts);
productRouter.post("/", upload.single("image"), newProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
