const express = require("express");
const { listMovies, getMovie, addMovie, createMovie, removeMovie} = require("../controller/moviesController");

const router = express.Router();

router.get("/movies", listMovies);
router.get("/movies/:id", getMovie);
router.post("/movies/:id", addMovie);
router.put("/movies/:id", createMovie);
router.delete("/movies/:id", removeMovie);

module.exports = router;