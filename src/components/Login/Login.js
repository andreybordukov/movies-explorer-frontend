import React from "react";
import logo from "../../images/logo__header.svg";
import { useFormWithValidation } from "../../hooks/useForm";
import "./Login.css";

function Login({ login, isSending, reqStatus: { message } }) {
  const { values, handleChange, resetFrom, errors, isValid } =
    useFormWithValidation();
  const isDisabled = !isValid || !isSending;

  const handleSubmit = (e) => {
    e.preventDefault();

    login(values);
  };

  React.useEffect(() => {
    resetFrom({}, {}, false);
  }, [resetFrom]);

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
            minLength="2"
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
            className={isDisabled ? "auth__button-disabled" : "auth__button"}
            type="submit"
            aria-label="кнопка регистрации"
            disabled={isDisabled}
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
