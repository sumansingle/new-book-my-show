import React, { useState, useEffect, useRef } from "react";
import "../Movies/Movie.css";
import { Overlay } from "../../OverLay/Overlay";
import { MovieCard } from "./MovieCard";
import { MovieDetials } from "./MovieDetials";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export function Movies(props) {
  const [detailsData, setDetailsData] = useState(null);
  const [overlayFlag, setOverlayFlag] = useState(false);
  const genreData = JSON.parse(localStorage.getItem("genres"));

  const movieCardEvent = (ids) => {
    const showData = genreData.filter((el) => {
      return ids.genre_ids.some((f) => {
        return f === el.id;
      });
    });
    setOverlayFlag(true);
    setDetailsData({ data: showData, detils: ids });
  };

  const setFunction = () => {
    setOverlayFlag(false);
  };

  const movieCardList = (arr) => {
    return arr.map((item, index) => {
      return (
        // Replace the onClick event with Link to navigate to the details page
        <Link key={"movieCard" + index} to={`/single-movie/${item.id}`}>
          <div className="movieCard" onClick={() => movieCardEvent(item)}>
            <MovieCard item={item} index={index} />
          </div>
        </Link>
      );
    });
  };

  //const stateLift2 = (arg, arg2) => {
    //props.flagStatus(arg, arg2);
  //};

  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [moviesPerPage] = useState(5); // Number of movies to show per page
  const movieContainerRef = useRef(null);

  useEffect(() => {
    // Update the displayed movies when the API data changes
    if (props.apiData) {
      setDisplayedMovies(props.apiData.slice(startIndex, startIndex + moviesPerPage));
    }
  }, [props.apiData, startIndex, moviesPerPage]);

  const showPrevMovies = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - moviesPerPage);
    }
  };

  const showNextMovies = () => {
    if (startIndex + moviesPerPage < props.apiData.length) {
      setStartIndex(startIndex + moviesPerPage);
    }
  };

  const seeAllClick = () => {
    // Handle "See All" click event if needed
  };
 

  return (
    <div className="movie-container">
      <h2 className="heading-genrec">{props.heading}</h2>
      {props.apiData === null ? (
        ""
      ) : (
        <div className="whole-container">
          <button className="prev-button" onClick={showPrevMovies}>
            &lt;
          </button>
          <div className="main-movie-card" ref={movieContainerRef}>
            {movieCardList(displayedMovies)}
          </div>
          <button className="next-button" onClick={showNextMovies}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}

export default Movies;