const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  added: {
    type: Date,
  },
});

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel;
