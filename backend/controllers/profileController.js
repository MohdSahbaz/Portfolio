const Profile = require("../models/profile");

const getProfile = async (req, res) => {
  try {
    const profileInfo = await Profile.findOne();

    if (profileInfo.length === 0) {
      return res.status(404).json({ error: "No profiles found" });
    }

    return res.status(200).json(profileInfo);
  } catch (error) {
    console.error("Error fetching profile info:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getProfile };
