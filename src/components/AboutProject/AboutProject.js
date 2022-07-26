import React from "react";

import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about_wrapper">
      <div className="about_header">О проекте</div>
      <div className="about_content">
        <div className="left_block">
          <h2 className="about_title">Дипломный проект включал 5 этапов</h2>
          <div className="about_text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </div>
        </div>
        <div className="right_block">
          <h2 className="about_title">На выполнение диплома ушло 5 недель</h2>
          <div className="about_text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </div>
        </div>
      </div>
      <div className="about_line">
        <div className="about_line_green">
          <div className="about_line_block">1 неделя</div>
          <div className="about_line_underblock">Back-end</div>
        </div>
        <div className="about_line_gray">
          <div className="about_line_block">4 недели</div>
          <div className="about_line_underblock">Front-end</div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
