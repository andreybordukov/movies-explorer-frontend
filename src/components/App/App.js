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

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = (evt) => {
    evt.preventDefault();

    localStorage.removeItem("jwt");
    // setLoggedIn(false);
    navigate("/saved-movies");
  };

  return (
    <div className="page">
      <div className="wrapper">
        <Header
          loggedIn={loggedIn}
          location={location}
          onLogout={handleLogout}
        />

        <Routes>
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
