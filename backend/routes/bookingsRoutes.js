const express = require('express');

const router = express.Router();
const { requireFields } = require('../middleware/validateMiddleware');
const { createBooking, getBooking ,getAllBookings } = require('../controller/bookingsController');

router.post(
  '/',
  requireFields(['showtimeId', 'seatIds', 'sessionId', 'customerName', 'customerEmail']),
 createBooking
);
router.get('/:id', getBooking);
router.get('/', getAllBookings);

module.exports = router;