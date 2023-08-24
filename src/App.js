import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [dummyMovies, setDummyMovies] = useState([]);
  function fetchMovieHandler() {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        const transformedMovies = data.results.map((movie) => {
          return {
            id : movie.episode_id,
            title : movie.title,
            openingText : movie.opening_crawl,
            releaseDate : movie.release_date
          };
        });
        setDummyMovies(transformedMovies);
      });
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;
