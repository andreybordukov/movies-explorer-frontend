import React, { useState, useEffect } from "react";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useForm";

import "./Profile.css";

function Profile({ logoutProfile, onProfileEdit, reqStatus: { message } }) {
  const { currentUser } = React.useContext(CurrentUserContext);

  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const { values, handleChange, resetFrom, errors, isValid } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfileEdit({
      name: currentUser.name,
      email: currentUser.email,
      ...values,
    });
    setButtonDisabled(true);
  };

  useEffect(() => {
    if (
      values.name !== currentUser.name ||
      values.email !== currentUser.email
    ) {
      setButtonDisabled(false);
    }
  }, [values]);

  React.useEffect(() => {
    resetFrom({}, {}, false);
  }, [resetFrom]);

  return (
    <div className="profile">
      <div className="profile__wrapper">
        <form
          className="profile__form"
          name="profile__form"
          noValidate
          onSubmit={handleSubmit}
        >
          <h2 className="profile__title"> Привет, {currentUser.name}!</h2>
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
            value={values.name || currentUser.name || ""}
            onChange={handleChange}
          />
          <span className="auth__text-error" id="email-error">
            {errors.name}
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
            value={values.email || currentUser.email || ""}
            onChange={handleChange}
          />
          <span className="auth__text-error" id="email-error">
            {errors.email}
          </span>

          <span className="auth__input_feedback">{message}</span>

          <button
            className="profile__button"
            type="submit"
            aria-label="кнопка редактирования"
            disabled={isButtonDisabled}
          >
            Редактировать
          </button>

          <a
            className="profile__button-exit"
            type="submit"
            aria-label="кнопка перехода"
            href="/"
            onClick={logoutProfile}
          >
            Выйти из аккаунта
          </a>
        </form>
      </div>
    </div>
  );
}

export default Profile;
