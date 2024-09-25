const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Load environment variables from .env file
require("dotenv").config();

connectDB();

// all routes import
const nameRoute = require("./routes/profileRoute");
const loveRoute = require("./routes/loveRoute");

// routes

app.get("/", (req, res) => {
  res.send("Welcome to solker portfolio server");
});

app.use("/api", nameRoute);
app.use("/api", loveRoute);

app.listen(PORT, () =>
  console.log(`Server running on url: http://localhost:${PORT}`)
);
