const user = require("../models/user");

// create a new user
const newUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const data = await user.create({ name: name, email: email });
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating user");
  }
};

//get all teh users
const allUsers = async (req, res) => {
  try {
    const data = await user.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating user");
  }
};

module.exports = { newUser, allUsers };
