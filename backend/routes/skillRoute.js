const express = require("express");
const { getAllSkills, createSkill } = require("../controllers/skillController");
const upload = require("../middleware/upload");

const router = express.Router();

router.get("/skills", getAllSkills);
router.post("/skills", upload, createSkill);

module.exports = router;
