// In the Exercise Schema, there are four fields And we don’t use as much validation as User Schema
const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
