// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const { sendContactMessage } = require("../controllers/contactController");

// Route to handle contact form submission
router.post("/contact", sendContactMessage);

module.exports = router;
