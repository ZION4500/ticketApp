const movies = [
    {
    id: 1,
    img: "https://placehold.co/600x400",
    name: "A Quiet Place",
    category: "Thriller",
    rating: "PG-13",
    time: "2h 5min",
  },
  
  {
    id: 2,
    img: "https://placehold.co/600x400",
    name: "A Quiet Place Part II",
    category: "Thriller",
    rating: "PG-13",
    time: "2h 5min",
  },
  
  {
    id: 3,
    img: "https://placehold.co/600x400",
    name: "The Batman",
    category: "Action",
    rating: "PG-13",
    time: "2h 5min",
  },

  {
    id: 4,
    img: "https://placehold.co/600x400",
    name: "How To Train Your Dragon",
    category: "Animation",
    rating: "PG-13",
    time: "2h 5min",
  },

  {
    id: 5,
    img: "https://placehold.co/600x400",
    name: "The Bridge to Terabithia",
    category: "Drama",
    rating: "PG-12",
    time: "2h 5min",
  },

  {
    id: 6,
    img: "https://placehold.co/600x400",
    name: "Snow White and the Huntsman",
    category: "Fantasy",
    rating: "PG-13",
    time: "2h 5min",
  },

  {
    id: 7,
    img: "https://placehold.co/600x400",
    name: "The Last Horizon",
    category: "Science Fiction",
    rating: "PG-13",
    time: "2h 5min",
  },

  {
    id: 8,
    img: "https://placehold.co/600x400",
    name: "Neon Streets",
    category: "Action",
    rating: "PG-13",
    time: "2h 5min",
  },

  {
    id: 9,
    img: "https://placehold.co/600x400",
    name: "Insidious: The Red Door",
    category: "Horror",
    rating: "PG-16",
    time: "2h 5min",
  },

  {
    id: 10,
    img: "https://placehold.co/600x400",
    name: "Not a Cinderella Story",
    category: "Drama",
    rating: "PG-13",
    time: "2h 5min",
  },

  {
    id: 11,
    img: "https://placehold.co/600x400",
    name: "The HItman's Wife Bodyguard",
    category: "Action",
    rating: "PG-13",
    time: "2h 5min",
  },

  {
    id: 12,
    img: "https://placehold.co/600x400",
    name: "The Witches",
    category: "Fantasy",
    rating: "PG-13",
    time: "2h 5min",
  },

  {
    id: 13,
    img: "https://placehold.co/600x400",
    name: "Enchanted",
    category: "Animation",
    rating: "PG-13",
    time: "2h 5min",
  },

  {
    id: 14,
    img: "https://placehold.co/600x400",
    name: "A Tribe called Judah",
    category: "Drama",
    rating: "PG-12",
    time: "2h 5min",
  },

  {
    id: 15,
    img: "https://placehold.co/600x400",
    name: "The Wedding Party",
    category: "Drama",
    rating: "PG-13",
    time: "2h 5min",
  },
];

let newId = movies.length + 1;

function findAll() {
  return movies;
}

function findById(id) {
  return movies.find(movie => movie.id === Number(id)) || null;
}

function create({ img, name, category, rating, time }) {
  const newMovie = {
    id: newId++,
    img,
    name,
    category,
    rating,
    time
  };
  movies.push(newMovie);
  return newMovie;
}

function update(id, updates) {
    const index = movies.findIndex(movie => movie.id === Number(id));
    if (index !== -1) {
      movies[index] = { ...movies[index], ...updates, id: Number(id) };
      return movies[index];
    }
   // return null;
}

function remove(id) {
  const index = movies.findIndex(movie => movie.id === Number(id));
  if (index !== -1) {
    movies.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  findAll,
  findById, create , update, remove
};
