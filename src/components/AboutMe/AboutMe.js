import React from "react";

import "./AboutMe.css";

import foto from "../../images/foto.png";

function AboutMe() {
  return (
    <div className="aboutme_wrapper">
      <div className="aboutme_header">Студент</div>
      <div className="aboutme_content">
        <div className="aboutme_info">
          <h2 className="aboutme_name">Виталий</h2>
          <div className="aboutme_prof">Фронтенд-разработчик, 30 лет</div>
          <div className="aboutme_text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </div>
          <div className="aboutme_links">
            <a className="aboutme_link" href="">
              Facebook
            </a>
            <a className="aboutme_link" href="">
              Github
            </a>
          </div>
        </div>

        <div className="aboutme_foto">
          <img about="foto" src={foto} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
