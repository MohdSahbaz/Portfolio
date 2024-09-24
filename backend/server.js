const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());

// routes

app.get("/", (req, res) => {
  res.send("Welcome to solker portfolio server");
});

app.listen(port, () =>
  console.log(`Server running on url: http://localhost:${port}`)
);
