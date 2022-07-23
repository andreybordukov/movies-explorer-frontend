import React from "react";
import logo__header from "../../images/logo__promo.svg";
import "./Promo.css";

function Promo() {
  return (
    <div className="promo_wrapper">
      <div className="promo_content">
        <div className="promo_title">
          Учебный проект студента факультета Веб-разработки.
        </div>
        <div className="promo_info">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </div>

        <div className="promo_button">
          <a href="/movies">Узнать больше</a>
        </div>
      </div>
      <img className="promo_logo" alt="Аватар" src={logo__header} />
    </div>
  );
}

export default Promo;
