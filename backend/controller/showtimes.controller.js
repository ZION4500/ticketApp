const Showtime = require('../models/Showtime');
const Movie = require('../models/Movie');
const AppError = require('../utils/AppError');

function listShowtimesForMovie(req, res, next) {
  const movie = Movie.findById(req.params.movieId);
  if (!movie) return next(new AppError('Movie not found', 404));
  res.json(Showtime.findByMovie(req.params.movieId));
}

function getShowtime(req, res, next) {
  const showtime = Showtime.findById(req.params.id);
  if (!showtime) return next(new AppError('Showtime not found', 404));
  res.json(showtime);
}

function cancelShowtime(req,res,next) {
  const showtime = Showtime.updateStatus(req.params.id, "canceled");
  if (!showtime) return next(new AppError("Showtime not found", 404));
  
  res.json({ message: "Showtime canceled successfully", showtime });
}


module.exports = { listShowtimesForMovie, getShowtime };

