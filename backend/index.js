
//Import  node dependencies
const express = require("express");
const cors = require("cors");
require("dotenv").config();

//Initialize the app
const app = express();

//Set up middleware
app.use(cors());
app.use(express.json());

//Define the routes
app.get("/", (req, res) => {
  res.send("Welcome to Cinevo");
});

const moviesRoutes = require("./routes/moviesRoutes.js");
app.use("/api/movies", moviesRoutes);

//Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
