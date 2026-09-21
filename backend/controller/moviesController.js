const movieService = require("../services/movieServices");

function listMovies(req, res) {
  res.json(movieService.findAll());
}

function getMovie(req, res) {
  const movie = movieService.findById(req.params.id);
  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }
  res.json(movie);
}

// ADD MOVIE
function addMovie(req, res) {
  if (!req.body.title) {
    return res.status(400).json({ error: "Movie title is required" });
  }
  const newMovie = movieService.create(req.body);
  res.status(201).json(newMovie);
}

//CREATE MOVIE
function createMovie(req, res) {
  const updatedMovie = movieService.update(req.params.id, req.body);  
  res.json(updatedMovie);
}

// DELETE MOVIE
function removeMovie(req, res) {
  const deleted = movieService.deleteById(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: "Movie not found" });
  }
  res.status(200).json({ message: "Movie deleted successfully" });
}
 
module.exports = { listMovies, getMovie ,addMovie , createMovie, removeMovie};


    




