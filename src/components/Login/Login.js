import React from "react";
import logo from "../../images/logo__header.svg";

import "./Login.css";

function Login({ login }) {
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

    if (!email || !password) {
      return;
    }
    login({
      password,
      email,
    });

    setEmail("");
    setPassword("");
  };

  return (
    <main className="auth">
      <div className="auth__wrapper">
        <form
          className="auth__form"
          name="auth__form"
          noValidate
          onSubmit={handleSubmit}
        >
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <h2 className="auth__title"> Рады видеть</h2>
          <label className="auth__input-label"> Email</label>
          <input
            type="email"
            className="auth__input"
            name="email"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
            id="name"
            value={email || ""}
            onChange={handleInputEmail}
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
            value={password || ""}
            onChange={handleInputPassword}
          />
          <span className="auth__text-error" id="password-error"></span>
          <button
            className="auth__button"
            type="submit"
            aria-label="кнопка регистрации"
          >
            Войти
          </button>
          <p>
            Еще не зарегистрированы?
            <a
              className="auth__button-registry"
              type="submit"
              aria-label="кнопка перехода"
              href="/signup"
            >
              Регистрация
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Login;
