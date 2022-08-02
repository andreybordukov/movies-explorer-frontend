import React from "react";

import "./SavedMovies.css";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ cardsList, handleMovieDelete }) {
  const [filteredMovies, setFilteredMovies] = React.useState(cardsList);
  const [isSearchDone, setIsSearchDone] = React.useState(false);

  const [query, setQuery] = React.useState("");
  const [checkboxStatus, setCheckboxStatus] = React.useState(false);

  function moviesFilter(movies, query, checkboxStatus) {
    let moviesFilter = movies;
    let result;

    if (checkboxStatus) {
      moviesFilter = moviesFilter.filter((movie) => movie.duration <= 40);
    }

    result = moviesFilter.filter((movie) => {
      return movie.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    return result;
  }

  function handleSearch(query, checkboxStatus) {
    setQuery(query);
    setCheckboxStatus(checkboxStatus);
    const searchResult = moviesFilter(cardsList, query, checkboxStatus);
    setFilteredMovies(searchResult);
    setIsSearchDone(true);
  }

  React.useEffect(() => {
    if (filteredMovies.length > 0) {
      const searchResult = moviesFilter(cardsList, query, checkboxStatus);
      setFilteredMovies(searchResult);
    }
  }, [cardsList]);

  console.log("filteredMovies", filteredMovies);

  return (
    <main className="page">
      <div className="wrapper">
        <SearchForm onSearchMovies={handleSearch} />
        <MoviesCardList
          filteredMovies={filteredMovies}
          // cardsList={cardsList}
          handleMovieDelete={handleMovieDelete}
        />
      </div>
    </main>
  );
}

export default SavedMovies;
