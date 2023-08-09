import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetials from "./MovieDetials";
import { apiUrl } from "../../important/api";
import apicalls from "../../utills/apicalls";

export function SingleMovie(props) {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      const url = `${apiUrl.base}movie/${id}?api_key=${apiUrl.key}`;
      const res = await apicalls(url);
      console.log(res.data);
      setMovieData(res.data);
    };

    fetchMovieData();
  }, [id]);

  if (!movieData) {
    return <div>Loading...</div>;
  }
  const stateLift2 = (arg, arg2) => {
    console.log("flagStatus called in SingleMovie");
    props.flagStatus(arg, arg2);
  };

  return (
    <div>
      <MovieDetials
        movieDetils={{ data: [], detils: movieData }}
        stateUpLift2={stateLift2} // Pass the stateLift2 function as a prop
      />
    </div>
  );
}

export default SingleMovie;