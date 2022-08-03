import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({
  movie,
  cardsList,
  handleMovieSave,
  handleMovieDelete,
  isSavedMovies,
}) => {
  const {
    country,
    id,
    image,
    nameEN,
    nameRU,
    trailerLink,
    year,
    duration,
    director,
    description,
  } = movie;
  const isSaved = movie.id && cardsList.some((m) => m.movieId === movie.id);

  const handleMoviesSaved = () => {
    if (isSaved) {
      handleMovieDelete(cardsList.filter((m) => m.movieId === movie.id)[0]);
    } else {
      handleMovieSave({
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: id,
        nameRU,
        nameEN,
      });
    }
  };

  const handleDelete = () => {
    handleMovieDelete(movie);
  };

  const getTimeFromMins = (mins) => {
    const hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours ? hours + "ч" : ""} ${minutes}м`;
  };

  const toTrailer = () => {
    document.location.href = trailerLink;
  };

  return (
    <div className="card_wrapper">
      <div className="card_image" onClick={toTrailer}>
        {isSavedMovies ? (
          <img src={image} alt="logo" />
        ) : (
          <img src={`https://api.nomoreparties.co${image.url}`} alt="logo" />
        )}
      </div>
      <div className="card_info">
        <div className="card_name">{nameRU}</div>

        <button>
          {isSavedMovies ? (
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleDelete}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.06077 3.8822L7.30003 1.64294L6.23937 0.582275L4.00011 2.82154L1.76097 0.582391L0.700309 1.64305L2.93945 3.8822L0.58252 6.23913L1.64318 7.29979L4.00011 4.94286L6.35716 7.29991L7.41782 6.23925L5.06077 3.8822Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              className="card_like"
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill={isSaved ? "red" : "white"}
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleMoviesSaved}
            >
              <path
                d="M6.65242 1.89789L7.01419 2.24773L7.36168 1.8837C8.08219 1.12888 8.97817 0.5 10.1818 0.5C12.1019 0.5 13.5 2.02862 13.5 4C13.5 4.9368 13.0747 5.73587 12.3847 6.40496L7 11.3228L1.60992 6.40004L1.59988 6.39087L1.58936 6.38227C0.885614 5.80642 0.5 4.96765 0.5 4C0.5 2.02862 1.89813 0.5 3.81818 0.5C5.01333 0.5 5.90847 1.17846 6.65242 1.89789Z"
                stroke="#E8E8E8"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="card_time">{getTimeFromMins(duration)} </div>
    </div>
  );
};

export default Card;
