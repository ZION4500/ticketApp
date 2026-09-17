const Movie = require('../models/Movie');
const Showtime = require('../models/Showtime');
const Seat = require('../models/Seat');
const AppError = require('../utils/AppError');

function createMovie(req, res) {
  const movie = Movie.create(req.body);
  res.status(201).json(movie);
}

function updateMovie(req, res, next) {
  const movie = Movie.update(req.params.id, req.body);
  if (!movie) return next(new AppError('Movie not found', 404));
  res.json(movie);
}

function deleteMovie(req, res, next) {
  const deleted = Movie.delete(req.params.id);
  if (!deleted) return next(new AppError('Movie not found', 404));
  res.status(204).send();
}

// Creates a showtime AND generates its seat grid in one step, since
// a showtime is useless without seats to book.
function createShowtime(req, res, next) {
  const movie = Movie.findById(req.body.movieId);
  if (!movie) return next(new AppError('Movie not found', 404));

  const showtime = Showtime.create(req.body);
  Seat.generateForShowtime(showtime.id);
  res.status(201).json(showtime);
}

module.exports = { createMovie, updateMovie, deleteMovie, createShowtime };
