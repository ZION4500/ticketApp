const express = require('express');
const { requireFields } = require('../middleware/validateMiddleware');
const { createBooking, getBooking } = require('../controller/bookingsController');

const router = express.Router();

router.post(
  '/',
  requireFields(['showtimeId', 'seatIds', 'sessionId', 'customerName', 'customerEmail']),
  createBooking
);
router.get('/:id', getBooking);

module.exports = router;