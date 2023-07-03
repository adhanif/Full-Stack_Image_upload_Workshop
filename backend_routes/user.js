const express = require("express");
const userRouter = express.Router();
const { newUser, allUsers } = require("../backend_controllers/user");

userRouter.post("/user", newUser);

userRouter.get("/user", allUsers);

module.exports = userRouter;
