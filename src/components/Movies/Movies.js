import React, { useEffect, useState } from "react";

import "./Movies.css";

import SearchForm from "../SearchForm/SearchForm";
import CardList from "../CardList/CardList";
import ShowMore from "../ShowMore/ShowMore";

import { SHORTFILM_TIME } from "../../utils/constants";

function Movies({
  allMoviesFromApi,
  handleLoader,
  visibleMoviesCount,
  handleMovieSave,
  handleMovieDelete,
  savedMoviesUser,
  cardsList,
}) {
  const [query, setQuery] = useState("");
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  // const [initialMovies, setInitialMovies] = useState([]);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const [isSearchMovies, setSearchMovies] = useState(false);
  // const [searchStatus, setSearchStatus] = useState("");
  // const [isSearchDone, setIsSearchDone] = useState(false);

  // const [firstResultsNumber, setFirstResultsNumber] = useState(0);
  // const [moreResultsNumber, setMoreResultsNumber] = useState(0);

  // const currentViewport = document.documentElement.clientWidth;

  // const [isMoreButtonVisible, setIsMoreButtonVisible] = useState(false);

  const moviesFilter = (movies, query, checkboxStatus) => {
    let filteredArray = movies;
    let result;

    if (checkboxStatus) {
      filteredArray = filteredArray.filter(
        (movie) => movie.duration <= SHORTFILM_TIME
      );
    }

    result = filteredArray.filter((movie) => {
      return movie.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    return result;
  };

  const handleSearch = (query, checkboxStatus) => {
    setMoviesToRender([]);
    setQuery(query);
    setCheckboxStatus(checkboxStatus);

    const searchResults = moviesFilter(allMoviesFromApi, query, checkboxStatus);
    setFilteredMovies(searchResults);
  };

  // useEffect(() => {
  //   if (filteredMovies.length > 0) {
  //     if (filteredMovies.length > firstResultsNumber) {
  //       setMoviesToRender(filteredMovies.slice(0, firstResultsNumber));
  //       setIsMoreButtonVisible(true);
  //       console.log("filteredMovies", firstResultsNumber, moviesToRender);
  //     } else {
  //       setMoviesToRender(filteredMovies);
  //     }
  //   }
  // }, [filteredMovies, firstResultsNumber]);

  // function handleMoreButtonClick() {
  //   setMoviesToRender((state) =>
  //     filteredMovies.slice(0, state.length + moreResultsNumber)
  //   );
  // }

  // useEffect(() => {
  //   if (moviesToRender.length === filteredMovies.length) {
  //     setIsMoreButtonVisible(false);
  //   }
  // }, [moviesToRender, filteredMovies]);

  return (
    <main className="page">
      <div className="wrapper">
        <SearchForm onSearchMovies={handleSearch} isMain={true} />
        <CardList
          filteredMovies={filteredMovies}
          visibleMoviesCount={visibleMoviesCount}
          handleMovieSave={handleMovieSave}
          handleMovieDelete={handleMovieDelete}
          savedMoviesUser={savedMoviesUser}
          cardsList={cardsList}
          isSavedMovies={false}
        />
        {filteredMovies.length &&
          visibleMoviesCount < filteredMovies.length && (
            <ShowMore handleLoader={handleLoader} />
          )}
      </div>
    </main>
  );
}

export default Movies;
