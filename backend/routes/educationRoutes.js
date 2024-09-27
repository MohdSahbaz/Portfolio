const express = require("express");
const router = express.Router();
const {
  getAllEducation,
  addEducation,
} = require("../controllers/educationController");

router.get("/education", getAllEducation);

router.post("/education", addEducation);

module.exports = router;
