import React from "react";
import { apiUrl } from "../../important/api";
import { FaStar } from "react-icons/fa";
import noImage from '../../utills/images/no-image.png'

export function MovieCard({ item, index }) {
  return (
    <div className="card">
      <div className="movieStyleCard">
        <img
          className="imageCard"
          src={item.poster_path === null ? noImage :apiUrl.imageBase + item.poster_path}
          alt={item.title}
          key={"image" + index}
          height={400}
          width={500}
        />
         <div className="rating">
        <p key={"LanCard" + index}>
          {item.original_language.charAt(0).toUpperCase() +
            item.original_language.slice(1)}
        </p>
        <p key={"rateCard" + index}>
          <FaStar /> {item.vote_average}
        </p>
      </div>
        <h4 key={"h5" + index} className="title">{item.title}</h4>
      </div>
    </div>
  );
}
export default MovieCard;