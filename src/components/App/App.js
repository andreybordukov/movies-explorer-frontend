import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import logo from "../../images/logo.svg";
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

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = (evt) => {
    evt.preventDefault();

    localStorage.removeItem("jwt");
    // setLoggedIn(false);
    navigate("/saved-movies");
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
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />

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
      />
    </div>
  );
}

export default App;
