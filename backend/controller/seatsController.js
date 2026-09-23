const Seat = require('../models/seats');

// Create seat
exports.createSeat = (req, res) => {
  const { seatNumber, showtimeId } = req.body;

  if (!seatNumber || !showtimeId) {
    return res.status(400).json({ error: "seatNumber and showtimeId are required" });
  }

  // Use Seat.create instead of Seat.update
  const newSeat = Seat.create({
    seatNumber,
    showtimeId: Number(showtimeId),
    status: "available"
  });

  res.status(201).json(newSeat);
};

// Get all seats
exports.getSeats = (req, res) => {
  res.json(Seat.findAll());
};

// Get single seat by ID
exports.getSeat = (req, res) => {
  const seatId = Number(req.params.id);
  const seat = Seat.findById(seatId);
  seat ? res.json(seat) : res.status(404).send("Seat not found");
};

// Update seat status or details
exports.updateSeat = (req, res) => {
  const seatId = Number(req.params.id);
  const seat = Seat.update(seatId, req.body);
  seat ? res.json(seat) : res.status(404).send("Seat not found");
};

// Delete seat
exports.deleteSeat = (req, res) => {
  const seatId = Number(req.params.id);
  // Ensure function name matches model export (e.g., Seat.remove or Seat.delete)
  const success = Seat.remove ? Seat.remove(seatId) : Seat.delete(seatId);
  success ? res.send("Seat deleted") : res.status(404).send("Seat not found");
};




/*const Seat = require('../models/seats');

// Create seat
exports.createSeat = (req, res) => {
  const { seatNumber, movieId } = req.body;
  const newSeat = Seat.update(Seat.findAll().length + 1, { seatNumber, movieId, status: "available" });
  res.status(201).json(newSeat);
};

// Get all seats
exports.getSeats = (req, res) => {
  res.json(Seat.findAll());
};

// Get single seat
exports.getSeat = (req, res) => {
  const seat = Seat.findById(req.params.id);
  seat ? res.json(seat) : res.status(404).send("Seat not found");
};

// Update seat
exports.updateSeat = (req, res) => {
  const seat = Seat.update(req.params.id, req.body);
  seat ? res.json(seat) : res.status(404).send("Seat not found");
};

// Delete seat
exports.deleteSeat = (req, res) => {
  const success = Seat.remove(req.params.id);
  success ? res.send("Seat deleted") : res.status(404).send("Seat not found");
};*/
