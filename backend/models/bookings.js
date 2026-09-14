const bookings = [];
let newId = 1;

function findAll() {
  return bookings;
}

function findById(id) {
  return bookings.find((b) => b.id === Number(id)) || null;
}

function create({ showtimeId, seatIds, customerName, customerEmail, total }) {
  const booking = {
    id: newId++,
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
};

function update(id, updates) { showtimeId, seatIds, customerName, customerEmail, total, status } = updates;
  const index = bookings.findIndex((b) => b.id === Number(id));
  if (index === -1) return null;
  bookings[index] = { ...bookings[index], ...updates, id: Number(id) };
  return bookings[index];


module.exports = { findAll, findById, create };

/*const tickets = [];

let newId = tickets.length + 1;

 Get all tickets
function findAll() {
  return tickets;
}

// Get ticket by ID
function findById(id) {
  return tickets.find(ticket => ticket.id === Number(id)) || null;
}

// Create a new ticket
function create({ title, description, movieId, seatId }) {
  const newTicket = {
    id: newId++,
    title,
    description,
    movieId,   // link to movie
    seatId,    // link to seat
    status: "open"
  };
  tickets.push(newTicket);
  return newTicket;
}

// Update a ticket
function update(id, updates) {
  const index = tickets.findIndex(ticket => ticket.id === Number(id));
  if (index !== -1) {
    tickets[index] = { ...tickets[index], ...updates, id: Number(id) };
    return tickets[index];
  }
  return null;
}

// Delete a ticket
function remove(id) {
  const index = tickets.findIndex(ticket => ticket.id === Number(id));
  if (index !== -1) {
    tickets.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = { findAll, findById, create, update, remove };*/
