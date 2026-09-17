const express = require('express');
const {
  listShowtimesForMovie,
  getShowtime,
  cancelShowtime
} = require('../controller/showtimesController');

const router = express.Router();

router.get('/movie/:movieId', listShowtimesForMovie);
router.get('/:id', getShowtime);
router.get('/:id', cancelShowtime);

module.exports = router;
