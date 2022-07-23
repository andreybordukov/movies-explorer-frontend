import React from "react";

import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__wrapper">
        <form
          className="profile__form"
          name="profile__form"
          noValidate
          // onSubmit={handleSubmit}
        >
          <h2 className="profile__title"> Привет, Виталий!</h2>
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
            value={"Виталий" || ""}
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
            value={"pochta@yandex.ru" || ""}
            // onChange={handleInputEmail}
          />
          <span className="auth__text-error" id="email-error"></span>

          <buttaon
            className="profile__button"
            type="submit"
            aria-label="кнопка редактирования"
          >
            Редактировать
          </buttaon>

          <a
            className="profile__button-exit"
            type="submit"
            aria-label="кнопка перехода"
            href="/"
          >
            Выйти из аккаунта
          </a>
        </form>
      </div>
    </div>
  );
}

export default Profile;
