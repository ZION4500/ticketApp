
//Import  node dependencies
const express = require("express");
const cors = require("cors");
require("dotenv").config();


const movies = require("./models/movies.js");
//const movieRoutes = require("./routes/movieRoutes.js");

//Initialize the app
const app = express();

/*app.use("/api/movies", movies);*/

//Set up middleware
app.use(cors());
app.use(express.json());


//Start the server
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Cinevo");
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
