import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./components/MovieList";


function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=mission&apikey=257dee33";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  }

  useEffect(() => {
    getMovieRequest();
  }, [])

  return (
    <div className="container-fluid movie-app">
      <div className="row" id="myRow-1">
        <MovieList movies={movies} />
      </div>

    </div>
  );
}

export default App;
