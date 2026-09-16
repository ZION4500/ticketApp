const bookings = [];
let Id = 1;

function findAll() {
  return bookings;
}

function findById(id) {
  return bookings.find((b) => b.id === Number(id)) || null;
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

module.exports = { findAll, findById, create };

const tickets = [];

let newId = tickets.length + 1;

function findAllTickets() {
  return tickets;
}   
