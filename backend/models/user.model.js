// The User Schema only contains a single field i.e username. We added some validations to the username field. It is required, it must be unique, and it must be at least 3 characters long. Also, white space is trimmed off the end.

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
