import React from "react";

import "./Techs.css";

function Techs() {
  return (
    <section className="tech_wrapper">
      <div className="tech_header">Технологии</div>
      <div className="tech_content">
        <h2 className="tech_title">7 технологий</h2>
        <div className="tech_text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </div>
      </div>
      <div className="tech_blocks">
        <div className="tech_block-item">HTML</div>
        <div className="tech_block-item">CSS</div>
        <div className="tech_block-item">JS</div>
        <div className="tech_block-item">React</div>
        <div className="tech_block-item">Git</div>
        <div className="tech_block-item">Express.js</div>
        <div className="tech_block-item">MongoDB</div>
      </div>
    </section>
  );
}

export default Techs;
