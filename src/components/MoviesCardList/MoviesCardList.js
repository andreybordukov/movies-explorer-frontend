import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  filteredMovies,
  handleMovieDelete,
  visibleMoviesCount,
  handleMovieSave,
  savedMoviesUser,
  cardsList,
}) {
  console.log("visibleMoviesCount", visibleMoviesCount, filteredMovies.length);
  return (
    <section className="movies_wrapper">
      <div className="movies_component">
        {filteredMovies &&
          filteredMovies.slice(0, visibleMoviesCount).map((item, i) => {
            return (
              <MoviesCard
                key={item.id || item.movieId}
                handleMovieSave={handleMovieSave}
                handleMovieDelete={handleMovieDelete}
                savedMoviesUser={savedMoviesUser}
                cardsList={cardsList}
                movie={item}
              />
            );
          })}
      </div>
    </section>
  );
}

export default MoviesCardList;
