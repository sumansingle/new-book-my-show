import "../premierMovie/PrimerMovie.css";
import { React, useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../Movies/MovieCard";

const PremierMovie = () => {
  const [premierMovies, setPremierMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=32bf24f3ab713486ef6bf6f5cf0ea18f&language=en-US&page=1"
      )
      .then((res) => {
        setPremierMovies(res.data.results);
        // console.log(premierMovies)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="Premier_Container">
      <div className="premier_heading">
        <div>
          <h1><strong>Premier Movies</strong></h1>
          <h5>Watch new Movies, every friday</h5>
        </div>
      </div>
      <div className="premier_details">
        {premierMovies.map((movie, index) => {
          return <MovieCard key={index} {...movie} />;
        })}
      </div>
    </div>
  );
};

export default PremierMovie;
