import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ cardList }) {
  return (
    <section className="movies_wrapper">
      <div className="movies_component">
        {cardList &&
          cardList.map((item, i) => {
            return <MoviesCard card={item} key={i} />;
          })}
        {/* <MoviesCard card={cardList.cardList[0]} />; */}
      </div>
    </section>
  );
}

export default MoviesCardList;
