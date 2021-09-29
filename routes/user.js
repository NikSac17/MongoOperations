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
router.get("/fetch", async (req, res) => {
  try {
    // const user = await User.find({});    FIND ALL
    const user = await User.find({ name: "Pranjal Singh" }); //find by name
    
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error...");
  }
});

//update
router.put("/update/:id", async (req, res) => {
  try {
    const { name, age, email, title } = req.body;
    const newUser = {};
    if (name) {
      newUser.name = name;
    }

    if (age) {
      newUser.age = age;
    }

    if (email) {
      newUser.email = email;
    }

    if (title) {
      newUser.title = title;
    }

    let user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).send("Not found");
    }
    // set replaces the value of a field with the specified value,
    // {new: true} ==>> returns the modified document rather than the original)
    user = await User.findByIdAndUpdate(req.params.id, {$set: newUser}, {new: true});
    res.json({ Success: "Updated Successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error...");
  }
});

//delete
router.delete("/delete/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).send("Not found");
    }

    user = await User.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note Deleted", user });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error...");
  }
});

module.exports = router;
