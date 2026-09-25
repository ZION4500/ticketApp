const bookingService = require('../services/bookingsServices');
const Booking = require('../models/bookings');
const AppError = require('../utils/AppError');

async function createBooking(req, res) {
  try {
    const { showtimeId, seatIds, sessionId, customerName, customerEmail } = req.body;
    const booking = await bookingService.confirmBooking({
      showtimeId,
      seatIds,
      sessionId,
      customerName,
      customerEmail,
    });
    res.status(201).json(booking);
  } catch (err) {
    next(err); // now your AppError from bookingService actually reaches the client
  }
}

async function getBooking(req, res, next) {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return next(new AppError('Booking not found', 404));
    res.json(booking);
  } catch (err) {
    next(err);
  }
}

async function getAllBookings(req, res, next) {
  try {
    const bookings = await Booking.findAll();
    res.json(bookings);
  } catch (err) {
    next(err);
  }
}

module.exports = { createBooking, getBooking, getAllBookings };
