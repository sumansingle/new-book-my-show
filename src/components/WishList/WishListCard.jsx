import React, { useState } from "react";
import noImage from "../utills/images/no-image.png";
import { apiUrl } from "../important/api";
import { FaStar } from "react-icons/fa";

export function WishListCard(props) {
  const createGenres = (arr) => {
    return arr.map((item, index) => {
      return <span key={`span${index}`}>{item.name}</span>;
    });
  };

  const handleCloseButtonClick = (id) => {
    // Remove the item from local storage
    let storedItems = JSON.parse(localStorage.getItem("wishlist")) || [];
    storedItems = storedItems.filter((item) => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(storedItems));

    // Update the state to hide the component
    setIsClosed(true);
  };

  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) {
    return null;
  }

  return (
    <div className="wraper-card" key={`wraper${props.index}`}>
      <img
        src={
          props.wishData.detils.poster_path === null
            ? noImage
            : apiUrl.imageBase + props.wishData.detils.poster_path
        }
        alt={props.wishData.detils.title}
        key={`img${props.index}`}
      />
      <div className="wrap-wishlist-data" key={`div${props.index}`}>
        <h3 key={`title-wish${props.index}`}>{props.wishData.detils.title}</h3>
        <p key={`ptag${props.index}`}>
          <FaStar /> {props.wishData.detils.vote_average}/10
        </p>
        <div key={`genres${props.index}`}>{createGenres(props.wishData.data)}</div>
        <p key={`overview${props.index}`}>{props.wishData.detils.overview}</p>
        <button onClick={() => handleCloseButtonClick(props.wishData.detils.id)}>close</button>
      </div>
    </div>
  );
}
