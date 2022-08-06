import React from "react";

import "./Switch.css";

function Switch({ handleCheckboxChange, isMain, checkboxStatus }) {
  return (
    <>
      <label className="switch" htmlFor="checkbox">
        {isMain ? (
          <input
            type="checkbox"
            id="checkbox"
            onChange={handleCheckboxChange}
            checked={Boolean(JSON.parse(checkboxStatus))}
          />
        ) : (
          <input
            type="checkbox"
            id="checkbox"
            onChange={handleCheckboxChange}
          />
        )}

        <div className="slider round"></div>
      </label>
    </>
  );
}

export default Switch;
