const Seat = require('../models/seats');

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
};
