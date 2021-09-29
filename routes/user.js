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
    const user = await User.find({ name: "Nikhil Sachan"}); //find by name
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error...");
  }
});

//update
router.put("/update", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error...");
  }
});

//delete
router.delete("/delete/:id", async (req, res) => {
  try {
      let user = await User.findById(req.params.id);
      if(!user){
          res.status(404).send("Not found");
      }

      user = await User.findByIdAndDelete(req.params.id);
      res.json({Success: "Note Deleted",user});

  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error...");
  }
});

module.exports = router;
