import React from "react";
import logo from "../../images/logo__header.svg";
import "./Header.css";

function Header({ loggedIn, location, onLogout }) {
  let text = "";
  let href = "";
  let style = "";

  if (location.pathname === "/sign-up" || location.pathname === "/sign-in") {
    style = "header_wrapper-none";
  } else if (location.pathname === "/") {
    style = "header_wrapper-main";
  } else {
    style = "header_wrapper";
  }
  console.log("locat", location);

  return (
    <div className={style}>
      <div>
        <a href="/">
          <img src={logo} />
        </a>
      </div>

      <div className="button_block">
        {!loggedIn ? (
          <>
            <a className="auth__button-reg" href="/sign-up">
              Регистрация
            </a>
            <a className="auth__button-enter" href="/sign-in">
              Войти
            </a>{" "}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Header;
