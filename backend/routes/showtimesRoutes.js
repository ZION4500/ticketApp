const express = require('express');
const {
  listShowtimesForMovie,
  getShowtime,
  updateShowtime,
  cancelShowtime
} = require('../controller/showtimesController');

const router = express.Router();

router.get('/movie/:movieId', listShowtimesForMovie);
router.get('/:id', getShowtime);
router.put('/:id', updateShowtime);
router.delete('/:id', cancelShowtime);

module.exports = router;