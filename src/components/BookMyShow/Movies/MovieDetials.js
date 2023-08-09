import React, { useState, useEffect } from "react";
import { apiUrl } from "../../important/api";
import { FaStar } from "react-icons/fa";
import apicalls from "../../utills/apicalls";
import noImage from '../../utills/images/no-image.png';
import "../Movies/MovieDetails.css"
import Navbar from "../../BookMyShow/NavBar/NavBar";
import Movie from "../../BookMyShow/Movies/Movies";

export function MovieDetials(props) {
  const [duration, setDuration] = useState(null);
  const [price, setPrice] = useState(Math.floor(Math.random() * (300 - 250 + 1)) + 250);

  useEffect(() => {
    const fetchMovieData = async () => {
      const url = `${apiUrl.base}movie/${props.movieDetils.detils.id}?api_key=${apiUrl.key}`;
      const res = await apicalls(url);
      setDuration(res.data.runtime);
    };
    fetchMovieData();
  }, [props.movieDetils.detils.id]);

  const bookTickets = () => {
    console.log("bookTickets function called in MovieDetials", props.movieDetils,price);
    props.stateUpLift2(props.movieDetils, price);
  };

  let wishList;
  if (localStorage.getItem('wishlist') === null) {
    wishList = [];
  } else {
    wishList = JSON.parse(localStorage.getItem('wishlist'));
  }

  const addToWishList = () => {
    if (wishList.some((info) => info.detils.id === props.movieDetils.detils.id)) {
      return;
    } else {
      wishList.push(props.movieDetils);
      localStorage.setItem("wishlist", JSON.stringify(wishList));
    }
  };

  return (
    <div className="main">
      <Navbar/>
    <div className="className='movie_poster_and_details" style={{background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${apiUrl.imageBase}${props.movieDetils.detils.poster_path})`}}>
      <div className="for-flex">
      <div className="i">
        <img className='imageSpace'
        src={props.movieDetils.detils.poster_path === null ? noImage : `${apiUrl.imageBase}${props.movieDetils.detils.poster_path}`}
        alt={props.movieDetils.detils.title}
      />
      </div>
      <div className="details-space">
        <div className='titleOfMovie space'>
          <h1><strong>{props.movieDetils.detils.title}</strong></h1></div>
        <div>
          <FaStar /> {props.movieDetils.detils.vote_average}/10
        </div>
        <div className="aboutMovie">
          <span>{duration} minutes</span>
          {props.movieDetils.data.map((item, index) => (
            <span key={"span" + index}>{item.name}</span>
          ))}
        </div>
        <div className='aboutMovie'>
        <h2><strong>About the movie</strong></h2>
        <h4>{props.movieDetils.detils.overview}</h4>
        </div>
        <p>
          <span className="rupee">&#8377;</span>
          {price}
        </p>
      </div>
      </div>
      <div className="buy-wishlist">
        <button className='btn btn-danger wishlistbtn' type="button" onClick={addToWishList}>Wishlist</button>
        <button clasName="bookingButton space" type="button" onClick={bookTickets}>Book Tickets</button>
      </div>
    </div>
    <Movie/>
    </div>
  );
}

export default MovieDetials;