import Landing from "./components/landing";
import Movies from "./components/movies";
import Movie from "./components/movie";
import About from "./components/about";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`http://localhost:3000/api/movies`);
      const data = await response.json();
      setData(data);
    }

    fetchMovie();
  }, []);
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
      h
    </>
  );
}
