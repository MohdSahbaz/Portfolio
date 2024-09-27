const express = require("express");
const router = express.Router();
const { getProjects } = require("../controllers/projectController");

// Route to get all projects
router.get("/projects", getProjects);

module.exports = router;
