const express = require("express");
const handleLove = require("../controllers/loveController");

const router = express();

router.post("/setlovecount", handleLove);

module.exports = router;
