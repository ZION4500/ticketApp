const seats = [];
let newId = 1;

const ROWS = ["A", "B", "C", "D", "E", "F"];
const SEATS_PER_ROW = 8;

function generateForShowtime(showtimeId) {
  const created = [];
  for (const row of ROWS) {
    for (let number = 1; number <= SEATS_PER_ROW; number++) {
      const seat = {
        id: newId++,
        showtimeId: Number(showtimeId),
        row,
        number,
        label: `${row}${number}`,
        status: "available", // available | held | booked
        heldBy: null,
        heldUntil: null,
        bookingId: null,
      };
      seats.push(seat);
      created.push(seat);
    }
  }
  return created;
}

function findByShowtime(showtimeId) {
  return seats.filter((s) => s.showtimeId === Number(showtimeId));
}

function findByIds(ids) {
  const idSet = new Set(ids.map(Number));
  return seats.filter((s) => idSet.has(s.id));
}

function update(id, updates) {
  const index = seats.findIndex((s) => s.id === Number(id));
  if (index === -1) return null;
  seats[index] = { ...seats[index], ...updates, id: Number(id) };
  return seats[index];
}

function releaseExpiredHolds(showtimeId) {
  const now = Date.now();
  for (const seat of findByShowtime(showtimeId)) {
    if (seat.status === "held" && seat.heldUntil && new Date(seat.heldUntil).getTime() < now) {
      update(seat.id, { status: "available", heldBy: null, heldUntil: null });
    }
  }
}

module.exports = { generateForShowtime, findByShowtime, findByIds, update, releaseExpiredHolds };

