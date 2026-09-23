const bookingService = require('../services/bookingsServices');
const Booking = require('../models/bookings');
const AppError = require('../utils/AppError');

function createBooking(req, res) {
  const { showtimeId, seatIds, sessionId, customerName, customerEmail } = req.body;
  const booking = bookingService.confirmBooking({
    showtimeId,
    seatIds,
    sessionId,
    customerName,
    customerEmail,
  });
  res.status(201).json(booking);
}

function getBooking(req, res, next) {
  const booking = Booking.findById(req.params.id);
  if (!booking) return next(new AppError('Booking not found', 404));
  res.json(booking);
}

module.exports = { createBooking, getBooking };