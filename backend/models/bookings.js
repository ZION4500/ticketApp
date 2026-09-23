const bookings = [];
let Id = 1;

function findAll() {
  return bookings;
}

function findById(id) {
  return bookings.find((b) => b.id === Number(id)) || null;
}

function findByMovieId(movieId) {
  return bookings.filter((b) => b.showtimeId === Number(movieId));
}

function create({ showtimeId, seatIds, customerName, customerEmail, total }) {
  const booking = {
    id: Id++,
    showtimeId: Number(showtimeId),
    seatIds: seatIds.map(Number),
    customerName,
    customerEmail,
    total,
    status: "confirmed",
    createdAt: new Date().toISOString(),
  };
  bookings.push(booking);
  return booking;
}

module.exports = { findAll, findById, findByMovieId, create };
