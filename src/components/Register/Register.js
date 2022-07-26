import React from "react";
import logo from "../../images/logo__header.svg";

import "./Register.css";

function Register({ register }) {
  const [email, setEmail] = React.useState("");
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = React.useState("");
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    register({
      password,
      email,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <main className="register">
      <div className="register__wrapper">
        <form
          className="register__form"
          name="register__form"
          noValidate
          // onSubmit={handleSubmit}
        >
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <h2 className="auth__title"> Добро пожаловать!!</h2>
          <label className="auth__input-label"> Имя</label>
          <input
            type="text"
            className="auth__input"
            name="name"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
            id="name"
            // value={email || ""}
            // onChange={handleInputEmail}
          />
          <span className="auth__text-error" id="email-error"></span>
          <label className="auth__input-label"> Email</label>
          <input
            type="email"
            className="auth__input"
            name="email"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
            id="email"
            // value={email || ""}
            // onChange={handleInputEmail}
          />
          <span className="auth__text-error" id="email-error"></span>
          <label className="auth__input-label"> Пароль</label>

          <input
            type="password"
            className="auth__input "
            name="password"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
            id="password"
            // value={password || ""}
            // onChange={handleInputPassword}
          />
          <span className="auth__text-error" id="password-error"></span>
          <button
            className="register__button"
            type="submit"
            aria-label="кнопка регистрации"
          >
            Зарегистрироваться
          </button>
          <p>
            Уже зарегистрированы?
            <a
              className="auth__button-registry"
              type="submit"
              aria-label="кнопка перехода"
              href="/signin"
            >
              Войти
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Register;
