import React, { useEffect, useState } from "react";
import "./MoviesCard.css";

// import image from "../../images/img2.png";

function MoviesCard({ card }) {
  const [isLike, SetLike] = React.useState(false);

  const {
    country,
    id,
    image,
    nameEN,
    nameRU,
    trailerLink,
    updated_at,
    year,
    duration,
  } = card;

  
  const getTimeFromMins = (mins) => {
    const hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours ? hours + "ч" : ""} ${minutes}м`;
  };

  return (
    <div className="card_wrapper">
      <div className="card_image">
        <img src={`https://api.nomoreparties.co${image.url}`} alt="logo" />
      </div>
      <div className="card_info">
        <div className="card_name">{nameRU}</div>

        <button>
          <svg
            className="card_like"
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill={isLike ? "red" : "white"}
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => SetLike(!isLike)}
          >
            <path
              d="M6.65242 1.89789L7.01419 2.24773L7.36168 1.8837C8.08219 1.12888 8.97817 0.5 10.1818 0.5C12.1019 0.5 13.5 2.02862 13.5 4C13.5 4.9368 13.0747 5.73587 12.3847 6.40496L7 11.3228L1.60992 6.40004L1.59988 6.39087L1.58936 6.38227C0.885614 5.80642 0.5 4.96765 0.5 4C0.5 2.02862 1.89813 0.5 3.81818 0.5C5.01333 0.5 5.90847 1.17846 6.65242 1.89789Z"
              stroke="#E8E8E8"
            />
          </svg>
        </button>
      </div>
      <div className="card_time">{getTimeFromMins(duration)} </div>
    </div>
  );
}

export default MoviesCard;
