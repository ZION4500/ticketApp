const express = require('express');

const router = express.Router();
const { requireFields } = require('../middleware/validateMiddleware');
const { createBooking, getBooking } = require('../controller/bookingsController');

router.post(
  '/',
  requireFields(['showtimeId', 'seatIds', 'sessionId', 'customerName', 'customerEmail']),
  bookingsController.createBooking
);
router.get('/:id', bookingsController.getBooking);

module.exports = router;