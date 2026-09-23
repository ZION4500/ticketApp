const movies = [
  { id: 1, title: "The Last Horizon", genre: "Sci-Fi / Adventure", rating: "PG-13", time: "2h 10m" },
  { id: 2, title: "Neon Streets", genre: "Drama / Thriller", rating: "R", time: "1h 55m" },
  { id: 3, title: "Midnight Bakery", genre: "Comedy", rating: "PG", time: "1h 40m" },
  { id: 4, title: "Echoes of Lagos", genre: "Drama", rating: "PG-13", time: "2h 05m" },
  { id: 5, title: "Iron Tide", genre: "Action", rating: "PG-13", time: "2h 20m" },
  { id: 6, title: "The Quiet Garden", genre: "Romance", rating: "PG", time: "1h 48m" },
];

export default function Movies() {
  return (
<<<<<<< HEAD
    <div className="p-6 md:p-12">
      <h1 className="text-4xl font-semibold">Movies</h1>

      <p className="mt-4 text-gray-600">Welcome to the Movies page!</p>
      <p className="text-gray-600">Here you can pick movies you want to watch!</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p className="mt-1 text-sm text-gray-500">{movie.genre}</p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-gray-600">
                {movie.rating} · {movie.time}
              </span>
              <button className="rounded-full bg-yellow-400 px-4 py-1.5 font-semibold text-black hover:bg-yellow-500">
                Watch
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
