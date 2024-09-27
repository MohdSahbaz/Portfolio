const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  details: [
    {
      type: String,
    },
  ],
  completionYear: {
    type: String,
  },
});

module.exports = mongoose.model("Education", educationSchema);
