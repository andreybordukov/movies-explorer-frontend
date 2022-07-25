import React from "react";

import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio_wrapper">
      <div className="portfolio_header">Портфолио</div>
      <div className="portfolio_content">
        <a className="portfolio_link" href="/">
          <h3 className="portfolio_title">Статичный сайт</h3>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="portfolio_sign"
          >
            <path
              d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z"
              fill="black"
            />
          </svg>
        </a>

        <a className="portfolio_link" href="/">
          <h3 className="portfolio_title">Адаптивный сайт</h3>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="portfolio_sign"
          >
            <path
              d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z"
              fill="black"
            />
          </svg>
        </a>
        <a className="portfolio_link" href="/">
          <h3 className="portfolio_title">Одностраничное приложение</h3>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="portfolio_sign"
          >
            <path
              d="M2.60653 16.5241L14.9645 4.14489L14.9432 13.6903H17.2656V0.181818H3.77841L3.7571 2.48295H13.3026L0.944603 14.8622L2.60653 16.5241Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
