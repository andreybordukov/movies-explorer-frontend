import React, { useState, useEffect } from "react";

import "./SavedMovies.css";

import SearchForm from "../SearchForm/SearchForm";
import CardList from "../CardList/CardList";

function SavedMovies({ cardsList, handleMovieDelete }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isSearchDone, setIsSearchDone] = useState(false);

  const [query, setQuery] = useState("");
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  useEffect(() => {
    setFilteredMovies(cardsList);
  }, [cardsList]);

  const moviesFilter = (movies, query, checkboxStatus) => {
    let moviesFilter = movies;
    let result;

    if (checkboxStatus) {
      moviesFilter = moviesFilter.filter((movie) => movie.duration <= 40);
    }

    result = moviesFilter.filter((movie) => {
      return movie.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    return result;
  };

  const handleSearch = (query, checkboxStatus) => {
    setQuery(query);
    setCheckboxStatus(checkboxStatus);
    const searchResult = moviesFilter(cardsList, query, checkboxStatus);
    setFilteredMovies(searchResult);
    setIsSearchDone(true);

    console.log(">>>>");
  };

  // useEffect(() => {
  //   if (filteredMovies.length > 0) {
  //     const searchResult = moviesFilter(cardsList, query, checkboxStatus);
  //     setFilteredMovies(searchResult);
  //   }
  // }, [cardsList]);

  return (
    <main className="page">
      <div className="wrapper">
        <SearchForm onSearchMovies={handleSearch} />
        <CardList
          filteredMovies={filteredMovies}
          // cardsList={cardsList}
          handleMovieDelete={handleMovieDelete}
          isSavedMovies
        />
      </div>
    </main>
  );
}

export default SavedMovies;
