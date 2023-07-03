const express = require("express");
const multer = require("multer");

require("dotenv").config();
require("./db");
const cors = require("cors");
const app = express();
const port = 3000;
const userRouter = require("./backend_routes/user");
const productRouter = require("./backend_routes/product");
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop();
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

// Create multer instance with the storage configuration
const upload = multer({ storage: storage });

app.use(express.json({ limit: "10mb" }));

app.use("/", userRouter);
app.use("/", productRouter);

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
