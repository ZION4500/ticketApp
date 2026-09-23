const movies = require("../models/movies");

let newId = movies.length + 1;

function findAll() {
  return movies;
}

function findById(id) {
  return movies.find(movie => movie.id === Number(id)) || null;
}

function create({ img, name, category, rating, time }) {
  const newMovie = { id: newId++, img, name, category, rating, time };
  movies.push(newMovie);
  return newMovie;
}

function update(id, updates) {
  const index = movies.findIndex(movie => movie.id === Number(id));
  if (index !== -1) {
    movies[index] = { ...movies[index], ...updates, id: Number(id) };
    return movies[index];
  }
  return null;
}

function remove(id) {
  const index = movies.findIndex(movie => movie.id === Number(id));
  if (index !== -1) {
    movies.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = { findAll, findById, create, update, remove };