const mongoose = require("mongoose");

// Define the schema
const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  resumeLink: {
    type: String,
    required: true,
  },
  socialLinks: {
    instagram: {
      type: String,
      required: false,
    },
    youtube: {
      type: String,
      required: false,
    },
    linkedin: {
      type: String,
      required: false,
    },
    github: {
      type: String,
      required: false,
    },
  },
  loveCount: {
    type: Number,
    default: 0,
  },
  about1: {
    type: String,
    required: true,
  },
  about2: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
