export const AUTH_URL = "https://api.andrey.diplom.nomoredomains.work";

export const register = async ({ password, email, name }) => {
  return await fetch(`${AUTH_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: "*",
    },
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ password, email, name }),
  }).then(async (response) => {
    return await checkResponse(response);
  });
};

export const login = async ({ password, email }) => {
  return await fetch(`${AUTH_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: "*",
    },
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({ password, email }),
  }).then(async (response) => {
    return await checkResponse(response);
  });
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

export const getUser = (token) => {
  return fetch(`${AUTH_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      Authorization: `Bearer ${token}`,

      Origin: "*",
    },
    mode: "cors",
    credentials: "include",
  }).then((response) => {
    return checkResponse(response);
  });
};

export const patchUser = ({ name, email }) => {
  const Authorization = `Bearer ${localStorage.getItem("jwt")}`;

  return fetch(`${AUTH_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization,
      Origin: "*",
    },
    mode: "cors",
    credentials: "include",
    body: JSON.stringify({
      name,
      email,
    }),
  }).then(async (response) => {
    return await checkResponse(response);
  });
};

export const addMovies = (movie) => {
  const Authorization = `Bearer ${localStorage.getItem("jwt")}`;

  return fetch(`${AUTH_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization,
      Origin: "*",
    },
    body: JSON.stringify(movie),
  }).then(async (response) => {
    return await checkResponse(response);
  });
};

export const deleteMovies = (movie) => {
  const Authorization = `Bearer ${localStorage.getItem("jwt")}`;

  return fetch(`${AUTH_URL}/movies/${movie._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization,
      Origin: "*",
    },
  }).then(async (response) => {
    return await checkResponse(response);
  });
};

const checkResponse = async (res) => {
  if (res.ok) {
    return await res.json();
  } else {
    return Promise.reject(res.status);
  }
};
