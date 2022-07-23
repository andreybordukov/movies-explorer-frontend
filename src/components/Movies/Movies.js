import React from "react";

import logo from "../../images/logo.svg";
import "./Movies.css";

import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo";
import Header from "../Header/Header";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <div className="page">
      <div className="wrapper">
        <SearchForm />
        <MoviesCardList />
      </div>
    </div>
  );
}

export default Movies;
