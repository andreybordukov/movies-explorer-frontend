import React from "react";
import "./SearchForm.css";

import Switch from "../../components/Swith/Switch";

function SearchForm() {
  return (
    <section className="search_wrapper">
      <div className="search_component">
        <form className="search_input-block">
          <div className="search_input-search">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="search_input-svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.79268 8.2638C6.36075 9.69572 4.03915 9.69572 2.60723 8.2638C1.1753 6.83188 1.1753 4.51027 2.60723 3.07835C4.03915 1.64643 6.36075 1.64643 7.79268 3.07835C9.2246 4.51027 9.2246 6.83188 7.79268 8.2638ZM8.23306 9.64676C6.27283 11.1462 3.45724 10.9994 1.66442 9.20661C-0.288204 7.25399 -0.288204 4.08816 1.66442 2.13554C3.61704 0.182918 6.78286 0.182918 8.73549 2.13554C10.5282 3.92829 10.675 6.74371 9.17584 8.70392L12.7425 12.2706L11.7997 13.2134L8.23306 9.64676Z"
                fill="#959595"
              />
            </svg>
            <input
              className="search_input"
              placeholder="Фильм"
              required
            ></input>
          </div>

          <button className="search_button" type="submit">
            Найти
          </button>
        </form>
        <div className="search_checkbox">
          <Switch />
          <label>Короткометражки</label>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
