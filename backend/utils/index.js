const express = require("express");
const cors = require("cors");
require("dotenv").config();

const movieRoutes = require("../routes/moviesRoute");
const seatsRoutes = require("../routes/seatsRoutes");
const userRoutes = require("../routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Cinevo");
});

// Mount routes under /api
app.use("/api", movieRoutes);
app.use("/api", seatsRoutes);
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
