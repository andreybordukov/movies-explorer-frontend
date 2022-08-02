import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies,
  handleMovieDelete,
  visibleMoviesCount,
  handleMovieSave,
  savedMoviesUser,
  cardsList,
}) {
  console.log(">>>", movies);
  return (
    <section className="movies_wrapper">
      <div className="movies_component">
        {movies &&
          movies.slice(0, visibleMoviesCount).map((item, i) => {
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
