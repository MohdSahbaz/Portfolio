const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Load environment variables from .env file
require("dotenv").config();

connectDB();

// all routes import
const nameRoute = require("./routes/profileRoute");
const loveRoute = require("./routes/loveRoute");
const skillRoute = require("./routes/skillRoute");

// routes
app.use("/api", nameRoute);
app.use("/api", loveRoute);
app.use("/api", skillRoute);

app.listen(PORT, () =>
  console.log(`Server running on url: http://localhost:${PORT}`)
);
