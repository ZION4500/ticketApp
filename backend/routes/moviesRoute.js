const express = require("express");
const { listMovies, getMovie, addMovie, removeMovie} = require("../controller/moviesController");

const router = express.Router();

router.get("/movies", listMovies);
router.get("/movies/:id", getMovie);
router.post("/movies/:id", addMovie);
router.delete("/movies/:id", removeMovie);

module.exports = router;