import React, { useEffect, useState } from "react";

import "./Movies.css";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import ShowMore from "../ShowMore/ShowMore";
import { getAllCards } from "../../utils/MoviesApi";

function Movies({
  movies,
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

  // useEffect(() => {
  //   if (localStorage.getItem("searchResults")) {
  //     const init = JSON.parse(localStorage.getItem("searchResults"));
  //     const searchResult = moviesFilter(init, query, checkboxStatus);
  //     setFilteredMovies(searchResult);
  //     setIsSearchDone(true);
  //   }
  // }, []);

  const handleSearch = (query, checkboxStatus) => {
    setMoviesToRender([]);
    setQuery(query);
    setCheckboxStatus(checkboxStatus);

    let initialMoviesInLocalStorage = JSON.parse(
      localStorage.getItem("initialMovies")
    );

    if (!initialMoviesInLocalStorage) {
      setSearchMovies(true);
      getAllCards()
        .then((data) => {
          localStorage.setItem("initialMovies", JSON.stringify(data));
          initialMoviesInLocalStorage = data;
        })
        .catch(() => {
          // setSearchStatus(
          //   "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
          // );
        })
        .finally(() => {
          setSearchMovies(false);
        });
    }

    const searchResults = moviesFilter(
      initialMoviesInLocalStorage,
      query,
      checkboxStatus
    );
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
        <SearchForm onSearchMovies={handleSearch} />
        <MoviesCardList
          movies={filteredMovies}
          visibleMoviesCount={visibleMoviesCount}
          handleMovieSave={handleMovieSave}
          handleMovieDelete={handleMovieDelete}
          savedMoviesUser={savedMoviesUser}
          cardsList={cardsList}
        />
        <ShowMore
          // isMoreButtonVisible={isMoreButtonVisible}
          handleLoader={handleLoader}
        />
      </div>
    </main>
  );
}

export default Movies;
