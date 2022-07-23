import React from "react";

import logo from "../../images/logo.svg";
import "./Main.css";

import AboutProject from "../AboutProject/AboutProject";
import Promo from "../Promo/Promo";
import Header from "../Header/Header";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Main() {
  return (
    <>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </>
  );
}

export default Main;
