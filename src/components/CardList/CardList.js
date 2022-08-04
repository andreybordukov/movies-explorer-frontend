import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

const CardList = ({
  filteredMovies,
  handleMovieDelete,
  visibleMoviesCount,
  handleMovieSave,
  savedMoviesUser,
  cardsList,
  isSavedMovies,
}) => {
  console.log("?", filteredMovies);
  return (
    <section className="movies_wrapper">
      <div className="movies_component">
        {!filteredMovies.length && (
          <>
            <div>Ничего не найдено</div>
          </>
        )}
        {filteredMovies &&
          filteredMovies.slice(0, visibleMoviesCount).map((item, i) => {
            return (
              <Card
                key={item.id || item.movieId}
                handleMovieSave={handleMovieSave}
                handleMovieDelete={handleMovieDelete}
                savedMoviesUser={savedMoviesUser}
                cardsList={cardsList}
                movie={item}
                isSavedMovies={isSavedMovies}
              />
            );
          })}
      </div>
    </section>
  );
};

export default CardList;
