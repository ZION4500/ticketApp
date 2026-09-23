const Seat = require('../models/seats');
const Showtime = require('../models/showtimes');
const Booking = require('../models/bookings');
const AppError = require('../utils/AppError');
// const env = require('../config/env');

/* Temporarily reserves seats for a session while the user finishes
checkout. Prevents two people from booking the same seat.*/

function holdSeats(showtimeId, seatIds, sessionId) {
  Seat.releaseExpiredHolds(showtimeId);
  const seats = Seat.findByIds(seatIds);

  if (seats.length !== seatIds.length) {
    throw new AppError('One or more seats do not exist', 404);
  }

  const unavailable = seats.filter(
    (s) => s.showtimeId !== showtimeId || (s.status !== 'available' && s.heldBy !== sessionId)
  );
  if (unavailable.length > 0) {
    throw new AppError(
      `Seat(s) ${unavailable.map((s) => s.label).join(', ')} are no longer available`,
      409
    );
  }

  const heldUntil = new Date(Date.now() + env.seatHoldMinutes * 60 * 1000).toISOString();
  const held = seats.map((seat) =>
    Seat.update(seat.id, { status: 'held', heldBy: sessionId, heldUntil })
  );

  return held;
}

// Releases seats a user explicitly deselects or abandons.
function releaseSeats(seatIds, sessionId) {
  const seats = Seat.findByIds(seatIds);
  const released = [];
  for (const seat of seats) {
    if (seat.heldBy === sessionId && seat.status === 'held') {
      released.push(Seat.update(seat.id, { status: 'available', heldBy: null, heldUntil: null }));
    }
  }
  return released;
}

// Finalizes a booking: confirms the seats were actually held by this
// session, marks them booked, and creates the booking record.
function confirmBooking({ showtimeId, seatIds, sessionId, customerName, customerEmail }) {
  const showtime = Showtime.findById(showtimeId);
  if (!showtime) {
    throw new AppError('Showtime not found', 404);
  }

  const seats = Seat.findByIds(seatIds);
  const notHeldByMe = seats.filter(
    (s) => s.status !== 'held' || s.heldBy !== sessionId
  );
  if (seats.length !== seatIds.length || notHeldByMe.length > 0) {
    throw new AppError('Your seat hold expired or is invalid - please reselect seats', 409);
  }

  const booking = Booking.create({
    showtimeId,
    seatIds,
    customerName,
    customerEmail,
    totalPrice: showtime.price * seatIds.length,
  });

  for (const seat of seats) {
    Seat.update(seat.id, {
      status: 'booked',
      heldBy: null,
      heldUntil: null,
      bookingId: booking.id,
    });
  }

  return booking;
}

module.exports = { holdSeats, releaseSeats, confirmBooking };