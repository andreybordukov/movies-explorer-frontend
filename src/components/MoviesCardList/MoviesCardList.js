import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <div className="movies_wrapper">
      <div className="movies_component">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />

        <MoviesCard />

        <MoviesCard />
      </div>
    </div>
  );
}

export default MoviesCardList;
