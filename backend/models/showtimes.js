const showtimes = [
  { id: 1, movieId: 7, date: "Sat, Sep 12", time: "7:30 PM", screen: "Screen 1", price: 12 },
];

let newId = showtimes.length + 1;

function findAll() {
  return showtimes;
}

function findById(id) {
  return showtimes.find((s) => s.id === Number(id)) || null;
}

function findByMovie(movieId) {
  return showtimes.filter((s) => s.movieId === Number(movieId));
}

function create({ movieId, date, time, screen = "Screen 1", price = 12 }) {
  const showtime = { id: newId++, movieId: Number(movieId), date, time, screen, price };
  showtimes.push(showtime);
  return showtime;
}

function update(id, updates) {
  const index = showtimes.findIndex((s) => s.id === Number(id));
  if (index === -1) return null;
  showtimes[index] = { ...showtimes[index], ...updates, id: Number(id) };
  return showtimes[index];
}

function remove(id) {
  const index = showtimes.findIndex((s) => s.id === Number(id));
  if (index === -1) return false;
  showtimes.splice(index, 1);
  return true;
}

module.exports = { findAll, findById, findByMovie, create, update, remove };
