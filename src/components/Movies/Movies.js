import React from "react";

import "./Movies.css";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <main className="page">
      <div className="wrapper">
        <SearchForm />
        <MoviesCardList />
      </div>
    </main>
  );
}

export default Movies;
