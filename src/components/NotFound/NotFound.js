import React from "react";
import logo from "../../images/logo__header.svg";

import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__wrapper">
        <h2>404</h2>
        <p>Страница не найдена</p>
        <p className="notfound__button">
          <a aria-label="кнопка назад" href="/">
            Назад
          </a>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
