import Movie from "./Movie";
import { getMovies } from "../../service/API";
import { useState, useEffect } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((res) => setMovies(res.data));
  }, []);

  return (
    <>
      <div className="page-title">Selecione o filme</div>
      <div className="movie-list">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
