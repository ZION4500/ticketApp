import Landing from "./components/landing";
import Movies from "./components/movies";
import Movie from "./components/movie";
import About from "./components/about";

let data = [
  {
    id: 1,
    img: "https://placehold.co/600x400",
    name: "Movie title",
    category: "Category",
    rating: "PG-13",
    time: "2h 5min",
  },
  {
    id: 2,
    img: "https://placehold.co/600x400",
    name: "Movie title",
    category: "Category",
    rating: "PG-13",
    time: "2h 5min",
  },
  {
    id: 3,
    img: "https://placehold.co/600x400",
    name: "Movie title",
    category: "Category",
    rating: "PG-13",
    time: "2h 5min",
  },
];

export default function App() {
  return (
    <>
      <Landing />
      <Movies>
        {data.map((movie) => (
          <Movie
            id={movie.id}
            img={movie.img}
            name={movie.name}
            category={movie.category}
            rating={movie.rating}
            time={movie.time}
          />
        ))}
      </Movies>
      <About />
    </>
  );
}
