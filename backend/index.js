const express = require("express");
const cors = require("cors");
require("dotenv").config();

const movieRoutes = require("./routes/moviesRoute");
const seatsRoutes = require("./routes/seatsRoutes");
const userRoutes = require("./routes/userRoutes");
const bookingsRoutes = require("./routes/bookingsRoutes");
//const showtimesRoutes = require("./routes/showtimesRoutes");
//const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'))
app.use("/images", express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to Cinevo");
});

// Mount routes under /api
app.use("/api/movie", movieRoutes);
app.use("/api/seats", seatsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/bookings", bookingsRoutes);
//app.use("/api", showtimesRoutes);
//app.use("/api", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
