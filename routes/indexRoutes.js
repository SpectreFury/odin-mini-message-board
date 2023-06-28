const express = require("express");
const router = express.Router();
const User = require("../models/User");


router.get("/", async (req, res) => {
  try {
    const messages = await User.find();
    res.render("index", { title: "Mini Messageboard", messages: messages });
  } catch (error) {
    res.json({ error: "Failed to fetch user" });
  }
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", async (req, res) => {
  try {
    await User.create({
      text: req.body.text,
      user: req.body.user,
      added: new Date(),
    });
    res.redirect("/");
  } catch (error) {
    res.json({ error: "Error adding user to the db" });
  }
});

module.exports = router;
