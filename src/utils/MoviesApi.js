class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }
  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
  }

  getCards(token) {
    this._headers.authorization = `Bearer ${token}`;

    return fetch(`${this._url}/cards`, {
      headers: this._headers,
      credentials: "include",
      mode: "cors",
    })
      .then((res) => this._checkResponse(res))
      .then((data) => data);
  }

  getUserInfo(token) {
    this._headers.authorization = `Bearer ${token}`;

    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      credentials: "include",
      mode: "cors",
    }).then((res) => this._checkResponse(res));
  }

  setCardLike(cardId, token) {
    this._headers.authorization = `Bearer ${token}`;

    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,

      credentials: "include",
      mode: "cors",
    }).then((res) => this._checkResponse(res));
  }

  removeCardLike(cardId, token) {
    this._headers.authorization = `Bearer ${token}`;

    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
      credentials: "include",
      mode: "cors",
    }).then((res) => this._checkResponse(res));
  }
  changeUserInfo({ name, about }, token) {
    this._headers.authorization = `Bearer ${token}`;

    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => this._checkResponse(res));
  }
  //Добавление карточки
  insertCard({ name, link }, token) {
    this._headers.authorization = `Bearer ${token}`;

    return fetch(`${this._url}/cards `, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      mode: "cors",

      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => this._checkResponse(res));
  }
  //Удаление карточки
  deleteCard(cardId, token) {
    this._headers.authorization = `Bearer ${token}`;

    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: "include",
      mode: "cors",
    }).then((res) => this._checkResponse(res));
  }
  updateUserAvatar(avatar, token) {
    this._headers.authorization = `Bearer ${token}`;

    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        avatar,
      }),
    }).then((res) => this._checkResponse(res));
  }
  changeLikeCardStatus(cardId, notLiked, token) {
    if (notLiked) {
      return this.setCardLike(cardId, token);
    } else {
      return this.removeCardLike(cardId, token);
    }
  }
}

const api = new Api({
  url: "https://api.andrey.students.nomoredomains.work",
  headers: {
    // authorization: "328ef2cf-f132-4d2f-959f-88c97b356965",
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "application/json",
    Accept: "application/json",
    Origin: "*",
  },
});

export default api;

export const getAllCards = async () => {
  const url = "https://api.nomoreparties.co/beatfilm-movies";
  const response = await fetch(url);

  const data = await response.json(); // читаем ответ в формате JSON
  return data;
};
