import React from "react";
import logo from "../../images/logo__header.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_wrapper">
      <div className="footer_title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className="footer_info">
        <div className="footer_date">©2022 </div>
        <div className="footer_links">
          <a className="footer_link">Яндекс.Практикум</a>
          <a className="footer_link">Github</a>
          <a className="footer_link">Facebook</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;