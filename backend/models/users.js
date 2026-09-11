const users = [
  // password below is bcrypt-hashed "changeme123" - replace before real use
  { id: 1, username: "admin", passwordHash: "$2a$10$replace.with.real.hash", role: "admin" },
];

function findByUsername(username) {
  return users.find((u) => u.username === username) || null;
}

module.exports = { findByUsername };