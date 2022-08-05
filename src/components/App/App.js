import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Navigation from "../Navigation/Navigation";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { getAllCards } from "../../utils/MoviesApi";
import {
  tokenValidate,
  login,
  register,
  getUser,
  patchUser,
  addMovies,
  deleteMovies,
  getMovies,
} from "../../utils/MainApi";

import { useCurrentWidth } from "../../hooks/useCurrentWidth";
import { getInitialCount, getLoadStep } from "../../utils/getstep";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [savedMoviesUser, setSavedMoviesUser] = useState([]);

  const [allMoviesFromApi, setAllMoviesFromApi] = useState([]);

  const [isLoginSending, setLoginSending] = React.useState(true);
  const [isLoginStatus, setLoginStatus] = React.useState({});

  const [isRegisterSending, setRegisterSending] = React.useState(true);
  const [isRegisterStatus, setRegisterStatus] = React.useState({});
  const [message, setMessage] = React.useState("");

  const [isProfileStatus, setProfileStatus] = React.useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;

  const width = useCurrentWidth();

  const [visibleMoviesCount, setVisibleMoviesCount] = useState(
    getInitialCount(width)
  );

  useEffect(() => {
    handleTokenCheck("/");
  }, []);

  useEffect(() => {
    if (loggedIn) {
      const localMovies = localStorage.getItem("movies");

      if (localMovies) {
        try {
          setAllMoviesFromApi(JSON.parse(localMovies));
        } catch (error) {
          localMovies.removeItem("movies");
          fetchMovies();
        }
      } else {
        fetchMovies();
      }
    }
  }, []);

  const fetchMovies = () => {
    getAllCards()
      .then((res) => {
        setAllMoviesFromApi(res);
        localStorage.setItem("movies", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (loggedIn) {
      getUser(localStorage.getItem("jwt"))
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          console.log("Ошибка авторизации");

          // setMessage("Ошибка авторизации");
        });

      getMovies()
        .then((cards) => {
          setSavedMoviesUser(cards);
        })
        .catch((err) => {
          console.log("Ошибка");
        });

      fetchMovies();
    }
  }, [loggedIn]);

  const handleLoader = () => {
    setVisibleMoviesCount((prevCount) => prevCount + getLoadStep(width));
  };

  const handleTokenCheck = (path) => {
    if (localStorage.getItem("jwt")) {
      const token = localStorage.getItem("jwt");
      // проверяем токен пользователя
      tokenValidate(token)
        .then((res) => {
          console.log("res", res);

          if (res) {
            setLoggedIn(true);
            navigate(pathname);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleLogin = ({ password, email }) => {
    setLoginSending(false);

    login({
      password,
      email,
    })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        if (err === 401) {
          setLoginStatus({
            message: "Вы ввели неправильный логин или пароль",
          });
        } else if (err === 400) {
          setLoginStatus({
            message:
              "При авторизации произошла ошибка. Переданный токен некорректен",
          });
        } else {
          setLoginStatus({
            message: "При авторизации произошла ошибка",
          });
        }
        setLoginSending(true);
      });
  };

  const handleRegister = ({ password, email, name }) => {
    setRegisterSending(false);

    register({
      password,
      email,
      name,
    })
      .then(() => {
        handleLogin({ password, email });
      })
      .catch((err) => {
        if (err === 409) {
          setRegisterStatus({
            message: "Пользователь с таким email уже существует",
          });
        } else {
          setRegisterStatus({
            message: "При регистрации пользователя произошла ошибка",
          });
        }
        setRegisterSending(true);
      });
  };

  const handleLogout = (evt) => {
    evt.preventDefault();

    localStorage.removeItem("jwt");
    localStorage.removeItem("initialMovies");
    localStorage.removeItem("query");
    localStorage.removeItem("checkboxStatus");
    localStorage.removeItem("searchResults");
    localStorage.removeItem("movies");

    setLoginStatus({});
    setRegisterStatus({});
    setProfileStatus({});

    setLoggedIn(false);
  };

  const handleProfileEdit = ({ name, email }) => {
    setProfileStatus({});

    patchUser({ name, email })
      .then((dataUser) => {
        console.log("dataUser ", dataUser);
        setCurrentUser(dataUser);
        setProfileStatus({
          message: "Профиль обновлён",
        });
      })
      .catch((err) => {
        console.log("err", err);
        if (err === 409) {
          setProfileStatus({
            message: "Пользователь с таким email уже существует",
          });
        } else {
          setProfileStatus({
            message: "Ошибка при обновлении профиля",
          });
        }
      });
  };

  const handleCardSave = (movie) => {
    addMovies(movie)
      .then((newMovie) => {
        setSavedMoviesUser((movies) => [newMovie, ...movies]);
      })
      .catch(() => {
        setMessage("При сохранении фильма произошла ошибка");
      });
  };

  const handleCardDelete = (movie) => {
    deleteMovies(movie)
      .then(() => {
        setSavedMoviesUser((movies) =>
          movies.filter((m) => m._id !== movie._id)
        );
      })
      .catch(() => {
        setMessage("При удалении фильма произошла ошибка");
      });
  };

  const handleEditProfileClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const useClosePopupByEscape = (isOpen) => {
    const closeByEsc = (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };
    React.useEffect(() => {
      if (isOpen) {
        document.addEventListener("keydown", closeByEsc);
        return () => document.removeEventListener("keydown", closeByEsc);
      }
    }, [isOpen]);
  };

  const useClosePopup = (
    overlayClassName,
    closeButtonClassName,
    onClose,
    isOpen
  ) => {
    const handleClose = (e) => {
      if (
        e.target.classList.contains(overlayClassName /*"popup_opened"*/) ||
        e.target.classList.contains(closeButtonClassName /*"popup__exit"*/)
      ) {
        onClose();
      }
    };
    React.useEffect(() => {
      if (isOpen) {
        document.addEventListener("click", handleClose);
        return (e) => {
          document.removeEventListener("click", handleClose);
        };
      }
    }, [isOpen]);
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="page">
        <div className="wrapper">
          <Header
            loggedIn={loggedIn}
            location={location}
            onLogout={handleLogout}
            openMenu={handleEditProfileClick}
          />

          <Routes>
            <Route exact path="/" element={<Main />} />

            <Route
              path="/signup"
              element={
                loggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <Register
                    reqStatus={isRegisterStatus}
                    isSending={isRegisterSending}
                    register={handleRegister}
                  />
                )
              }
            />
            <Route
              path="/signin"
              element={
                loggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <Login
                    reqStatus={isLoginStatus}
                    isSending={isLoginSending}
                    login={handleLogin}
                  />
                )
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies
                    allMoviesFromApi={allMoviesFromApi}
                    handleLoader={handleLoader}
                    visibleMoviesCount={visibleMoviesCount}
                    currentUser={currentUser}
                    cardsList={savedMoviesUser}
                    handleMovieSave={handleCardSave}
                    handleMovieDelete={handleCardDelete}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute loggedIn={loggedIn} currentUser={currentUser}>
                  <SavedMovies
                    cardsList={savedMoviesUser}
                    handleMovieDelete={handleCardDelete}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  // currentUser={currentUser}
                >
                  <Profile
                    reqStatus={isProfileStatus}
                    onProfileEdit={handleProfileEdit}
                    logoutProfile={handleLogout}
                  />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer location={location} />
        </div>
        <Navigation
          isOpen={isMenuOpen}
          onClose={closeMenu}
          useClosePopup={useClosePopup}
          useClosePopupByEscape={useClosePopupByEscape}
          location={location}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
