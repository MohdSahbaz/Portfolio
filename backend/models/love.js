const mongoose = require("mongoose");

// Define the schema
const loveSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
const Love = mongoose.model("Love", loveSchema);

module.exports = Love;
