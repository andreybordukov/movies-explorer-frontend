import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import { getAllCards } from "../../utils/MoviesApi";
import { tokenValidate, login, register } from "../../utils/MainApi";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cardList, setCardList] = useState([]);
  const [email, setEmail] = React.useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // setLoggedIn(true);
    handleTokenCheck("/");
  }, []);

  useEffect(() => {
    if (loggedIn) {
      getAllCards()
        .then((cards) => {
          setCardList(cards);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // setCardList(getAllCards());
  }, [loggedIn]);

  const handleTokenCheck = (path) => {
    if (localStorage.getItem("jwt")) {
      const token = localStorage.getItem("jwt");
      // проверяем токен пользователя
      tokenValidate(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate(path);

            setEmail(res.email);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleLogin = ({ password, email }) => {
    login({
      password,
      email,
    })
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);

          setLoggedIn(true);
          setEmail(email);

          navigate("/movies");
        } else {
          // setIsSuccess(false);
          // setisInfoToolTipOpen(true);
        }
      })
      .catch((err) => {
        // setIsSuccess(false);
        // setisInfoToolTipOpen(true);
        console.log(err);
      });
  };

  const handleRegister = ({ password, email, name }) => {
    register({
      password,
      email,
      name,
    })
      .then((res) => {
        if (res) {
          // setIsSuccess(true);
          // setisInfoToolTipOpen(true);
          navigate("/movies");
        } else {
          // setIsSuccess(false);
          // setisInfoToolTipOpen(true);
        }
      })
      .catch((err) => {
        // setIsSuccess(false);
        // setisInfoToolTipOpen(true);
        console.log(err);
      });
  };

  const handleLogout = (evt) => {
    evt.preventDefault();

    localStorage.removeItem("jwt");
    setLoggedIn(false);
    navigate("/");
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
  // React.useState(() => {}, [isMenuOpen]);

  return (
    <div className="page">
      <div className="wrapper">
        <Header
          loggedIn={loggedIn}
          location={location}
          onLogout={handleLogout}
          openMenu={handleEditProfileClick}
        />

        <Routes>
          <Route
            path="/signup"
            element={<Register register={handleRegister} />}
          />
          <Route path="/signin" element={<Login login={handleLogin} />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies cardList={cardList} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Main />} />
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
  );
}

export default App;
