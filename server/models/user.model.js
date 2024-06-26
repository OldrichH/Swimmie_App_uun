const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: {type: String, required: true},
    email: { type: String, required: true},
    personalLimit: {type: String, default: 1500},
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;