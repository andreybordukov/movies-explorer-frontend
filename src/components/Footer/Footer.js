import React from "react";
import "./Footer.css";

function Footer({ location }) {
  return (
    <>
      {location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile" ? (
        <>
          <div className="footer_wrapper">
            <div className="footer_title">
              Учебный проект Яндекс.Практикум х BeatFilm.
            </div>
            <div className="footer_info">
              <div className="footer_date">©2022 </div>
              <div className="footer_links">
                <a className="footer_link" href="https://practicum.yandex.ru">
                  Яндекс.Практикум
                </a>
                <a className="footer_link" href="https://github.com">
                  Github
                </a>
                <a className="footer_link" href="https://facebook.com">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Footer;
