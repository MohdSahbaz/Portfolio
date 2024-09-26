const Skill = require("../models/skill");

// Get all skills
const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new skill
const createSkill = async (req, res) => {
  const { category, name, color } = req.body;
  const icon = req.file ? req.file.filename : null;

  if (!icon || !category || !name || !color) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const skill = new Skill({ category, name, icon, color });
  try {
    await skill.save();
    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllSkills,
  createSkill,
};
