import React from "react";
import logo from "../../images/logo__header.svg";

import { useFormWithValidation } from "../../hooks/useForm";

import "./Register.css";

function Register({ register, isSending, reqStatus: { message } }) {
  const { values, handleChange, resetFrom, errors, isValid } =
    useFormWithValidation();

  const isDisabled = !isValid || !isSending;

  const handleSubmit = (e) => {
    e.preventDefault();

    register(values);
  };

  React.useEffect(() => {
    resetFrom({}, {}, false);
  }, [resetFrom]);

  return (
    <main className="register">
      <div className="register__wrapper">
        <form
          className="register__form"
          name="register__form"
          noValidate
          onSubmit={handleSubmit}
        >
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <h2 className="auth__title"> Добро пожаловать</h2>
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
            value={values.name || ""}
            onChange={handleChange}
          />
          <span className="auth__text-error" id="email-error">
            {errors.name || ""}
          </span>

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
            value={values.email || ""}
            onChange={handleChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <span className="auth__text-error" id="email-error">
            {errors.email || ""}
          </span>

          <label className="auth__input-label"> Пароль</label>
          <input
            type="password"
            className="auth__input "
            name="password"
            required
            minLength="4"
            maxLength="40"
            autoComplete="off"
            id="password"
            value={values.password || ""}
            onChange={handleChange}
          />
          <span className="auth__text-error" id="password-error">
            {errors.password || ""}
          </span>

          <span className="auth__input_feedback">{message}</span>

          <button
            className={
              isDisabled ? "register__button-disabled" : "register__button"
            }
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
