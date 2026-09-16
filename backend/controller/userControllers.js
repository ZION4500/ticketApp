const users = require('../models/users');

// Get all users
/*exports.getAllUsers = (req, res) => {
  res.json(users);
};

// Get user by username
exports.getUserByUsername = (req, res) => {
  const user = users.findByUsername(req.params.username);
  user ? res.json(user) : res.status(404).send("User not found");
};

//Create a New User
exports.createUser = (req, res) => {
  const { username, passwordHash, role } = req.body;
  const newUser = { id: users.length + 1, username, passwordHash, role };
  users.push(newUser);
  res.status(201).json(newUser);
}

//Update user password and/or role
exports.updateUser = (req, res) => {
  const user = users.findByUsername(req.params.username);
    if (user) {
    const { username, passwordHash, role } = req.body;
    user.username = username || user.username;
    user.passwordHash = passwordHash || user.passwordHash;
    user.role = role || user.role;
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }

  //Remove user
  exports.deleteUser = (req, res) => {
    const index = users.findIndex(u => u.username === req.params.username);
    if (index !== -1) {
      users.splice(index, 1);
      res.send("User removed");
    } else {
      res.status(404).send("User not found");
    } 
;

module.exports = { listUsers, getUserByUsername, createUser, updateUser, deleteUser };
*/

// Get all users
exports.getAllUsers = (req, res) => {
  res.json(users);
};

// Get user by username
exports.getUserByUsername = (req, res) => {
  const user = users.find((u) => u.username === req.params.username);
  user ? res.json(user) : res.status(404).send("User not found");
};

// Create a New User
exports.createUser = (req, res) => {
  const { username, passwordHash, role } = req.body;

  if (!username || !passwordHash) {
    return res.status(400).send("Username and passwordHash are required");
  }

  // Generate unique ID based on max existing ID
  const maxId = users.reduce((max, u) => (u.id > max ? u.id : max), 0);
  const newUser = {
    id: maxId + 1,
    username,
    passwordHash,
    role: role || "user",
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// Update user password and/or role
exports.updateUser = (req, res) => {
  const user = users.find((u) => u.username === req.params.username);

  if (user) {
    const { username, passwordHash, role } = req.body;
    user.username = username || user.username;
    user.passwordHash = passwordHash || user.passwordHash;
    user.role = role || user.role;
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
}; // Fixed missing closing brace

// Remove user
exports.deleteUser = (req, res) => {
  const index = users.findIndex((u) => u.username === req.params.username);
  if (index !== -1) {
    users.splice(index, 1);
    res.send("User removed");
  } else {
    res.status(404).send("User not found");
  }
};