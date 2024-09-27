const Education = require("../models/education");

// Get all education data
const getAllEducation = async (req, res) => {
  try {
    const education = await Education.find();
    res.status(200).json(education);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch education records", error });
  }
};

// Add a new education data
const addEducation = async (req, res) => {
  const { degree, university, details, completionYear } = req.body;
  try {
    const newEducation = new Education({
      degree,
      university,
      details,
      completionYear,
    });
    await newEducation.save();
    res.status(201).json({ message: "Data Saved Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add education record", error });
  }
};

module.exports = { getAllEducation, addEducation };
