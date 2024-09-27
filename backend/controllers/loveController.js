const Love = require("../models/love");
const Profile = require("../models/profile");

const handleLove = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  try {
    // Check if the user already exists
    const checkUser = await Love.findOne({ email });

    if (checkUser) {
      return res.status(409).json({ message: "User already appreciated" });
    }

    // Create a new love entry
    const newLove = new Love({
      name,
      email,
    });

    // Save the new entry to the database
    await newLove.save();

    // Find the profile and increment the loveCount
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    profile.loveCount += 1; // Increment loveCount by 1
    await profile.save();

    return res.status(201).json({ message: "Love sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = handleLove;
