const express = require("express");
require("dotenv").config();
require("./db");
const cors = require("cors");
const app = express();
const port = 3000;
const userRouter = require("./backend_routes/user");
app.use(cors());
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("it is workign");
// });

app.use("/", userRouter);

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
