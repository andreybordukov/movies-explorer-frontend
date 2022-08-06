import React, { useState, useEffect } from "react";

import "./SavedMovies.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import SearchForm from "../SearchForm/SearchForm";
import CardList from "../CardList/CardList";

function SavedMovies({ cardsList, handleMovieDelete }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const {
    currentUser: { _id },
  } = React.useContext(CurrentUserContext);

  const [isSearchMovies, setSearchMovies] = useState(false);

  const [userMovies, setUserMovies] = useState([]);
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  useEffect(() => {
    setFilteredMovies(cardsList.filter((i) => i.owner === _id));
  }, [cardsList]);

  const moviesFilter = (movies, query, checkboxStatus) => {
    let moviesFilter = movies.filter((i) => i.owner === _id);
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
    setCheckboxStatus(checkboxStatus);
    const searchResult = moviesFilter(cardsList, query, checkboxStatus);
    setFilteredMovies(searchResult);

    setSearchMovies(true);
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
          isSearchMovies={isSearchMovies}
        />
      </div>
    </main>
  );
}

export default SavedMovies;
