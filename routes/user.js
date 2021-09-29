const express = require("express");
const User = require("../models/User");
const router = express.Router();

//create ==>> create new user using POST "/mongo/user/create"
router.post("/create", async (req, res) => {
  try {
    const { name, email, title } = req.body;
    console.log(req.body);

    const user = new User({ name, email, title });
    const saveUser = await user.save();
    res.json(saveUser);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error...");
  }
});

//read
router.get("/fetch", async (req, res) => {});

//update
router.put("/update", async (req, res) => {});

//delete
router.delete("/delete", async (req, res) => {});

module.exports = router;
