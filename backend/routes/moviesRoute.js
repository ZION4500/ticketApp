const express = require("express");
const { listMovies, getMovie, addMovie, removeMovie} = require("../controller/moviesController");

const router = express.Router();

router.get("/movies", listMovies);
router.get("/movies/:id", getMovie);
router.get("/movies/:id", addMovie);
router.get("/movies/:id", removeMovie);

module.exports = router;