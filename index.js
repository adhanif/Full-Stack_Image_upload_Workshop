const express = require("express");
require("dotenv").config();
require("./db");
const cors = require("cors");
const app = express();
const port = 3000;
const userRouter = require("./backend_routes/user");
const productRouter = require("./backend_routes/product");
app.use(cors());

app.use(express.json({ limit: "10mb" }));

app.use("/", userRouter);
app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
