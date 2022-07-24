import React from "react";
import logo from "../../images/logo__header.svg";
import "./Header.css";

function Header({ loggedIn, location, onLogout, openMenu }) {
  let style = "";

  if (location.pathname === "/signup" || location.pathname === "/signin") {
    style = "header_wrapper-none";
  }

  if (location.pathname === "/") {
    style = "header_wrapper-main";
  } else {
    style = "header_wrapper";
  }

  return (
    <div className={style}>
      {location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies" ||
      location.pathname === "/profile" ? (
        <>
          <div>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="button_block">
            {location.pathname === "/" ? (
              <>
                <a className="auth__button-reg" href="/signup">
                  Регистрация
                </a>
                <a className="auth__button-enter" href="/signin">
                  Войти
                </a>
              </>
            ) : (
              <>
                <div className="navigate">
                  <a
                    className={`nav__button  ${
                      location.pathname === "/movies"
                        ? "nav__button-active"
                        : ""
                    } `}
                    href="/movies"
                  >
                    Фильмы
                  </a>
                  <a
                    className={`nav__button ${
                      location.pathname === "/saved-movies"
                        ? "nav__button-active"
                        : ""
                    }`}
                    href="/saved-movies"
                  >
                    Сохранённые фильмы
                  </a>
                  <a className="nav__button-profile" href="/profile">
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 4C8 5.10457 7.10457 6 6 6C4.89543 6 4 5.10457 4 4C4 2.89543 4.89543 2 6 2C7.10457 2 8 2.89543 8 4ZM10 4C10 6.20914 8.20914 8 6 8C3.79086 8 2 6.20914 2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4ZM4 9C1.79086 9 0 10.7909 0 13V14H2V13C2 11.8954 2.89543 11 4 11H8C9.10457 11 10 11.8954 10 13V14H12V13C12 10.7909 10.2091 9 8 9H4Z"
                        fill="black"
                      />
                    </svg>{" "}
                    Аккаунт
                  </a>
                </div>
                <div className="navigate_button" onClick={openMenu}>
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M36 14L8 14V11L36 11V14Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M36 24L8 24V21L36 21V24Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M36 34L8 34V31L36 31V34Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
