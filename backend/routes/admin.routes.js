const express = require('express');
const { requireAdmin } = require('../middleware/auth.middleware');
const { requireFields } = require('../middleware/validate.middleware');
const {
  createMovie,
  updateMovie,
  deleteMovie,
  createShowtime,
} = require('../controllers/admin.controller');

const router = express.Router();

// Every route below requires a valid admin JWT
router.use(requireAdmin);

router.post('/movies', requireFields(['title', 'genre', 'rating', 'duration']), createMovie);
router.patch('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

router.post(
  '/showtimes',
  requireFields(['movieId', 'startsAt']),
  createShowtime
);

module.exports = router;
