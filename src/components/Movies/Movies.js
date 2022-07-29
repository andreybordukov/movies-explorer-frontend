import React, { useEffect, useState } from "react";

import "./Movies.css";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ cardList }) {
  return (
    <main className="page">
      <div className="wrapper">
        <SearchForm />
        <MoviesCardList cardList={cardList} />
      </div>
    </main>
  );
}

export default Movies;
