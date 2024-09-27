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
const projectRoutes = require("./routes/projectRoutes");
const educationRoutes = require("./routes/educationRoutes");
const contactRoutes = require("./routes/contactRoutes");

// routes
app.use("/api", nameRoute);
app.use("/api", loveRoute);
app.use("/api", skillRoute);
app.use("/api", projectRoutes);
app.use("/api", educationRoutes);
app.use("/api", contactRoutes);

app.listen(PORT, () =>
  console.log(`Server running on url: http://localhost:${PORT}`)
);
