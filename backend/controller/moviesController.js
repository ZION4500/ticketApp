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

module.exports = { listMovies, getMovie };



/*const movies = require("../../models/movies");
const AppError = require("../utils/AppError"); 
    function listMovies(req, res) {
        res.json(movies);
    }

let newId = movies.length + 1;

function findAll() {
  return movies;
}

function findById(id) {
  return movies.find(movie => movie.id === Number(id)) || null;
}

function create({ img, name, category, rating, time }) {
  const newMovie = {
    id: newId++,
    img,
    name,
    category,
    rating,
    time
  };
  movies.push(newMovie);
  return newMovie;
}

function update(id, updates) {
    const index = movies.findIndex(movie => movie.id === Number(id));
    if (index !== -1) {
      movies[index] = { ...movies[index], ...updates, id: Number(id) };
      return movies[index];
    }
   // return null;
}

function remove(id) {
  const index = movies.findIndex(movie => movie.id === Number(id));
  if (index !== -1) {
    movies.splice(index, 1);
    return true;
  }
  return false;
}

export default {
  findAll,
  findById, create , update, remove
};

module.exports = { listMovies, getMovie };*/
    




