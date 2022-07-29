export const AUTH_URL = "https://api.andrey.diplom.nomoredomains.work";

export const register = ({ password, email, name }) => {
  return fetch(`${AUTH_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: "*",
    },
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ password, email, name }),
  })
    .then((response) => {
      try {
        if (response.status === 201) {
          return response.json();
        }
      } catch (e) {
        return { e, message: "некорректно заполнено одно из полей" };
      }
    })
    .catch((err) => console.log(err));
};

export const login = ({ password, email }) => {
  return fetch(`${AUTH_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: "*",
    },
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ password, email }),
  })
    .then((response) => {
      try {
        if (response.status === 200) {
          return response.json();
        }
      } catch (e) {
        return e;
      }
    })

    .catch((err) => console.log(err));
};

export const tokenValidate = (token) => {
  return fetch(`${AUTH_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Origin: "*",
    },
    mode: "cors",
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};
