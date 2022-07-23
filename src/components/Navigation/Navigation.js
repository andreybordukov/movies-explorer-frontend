import React from "react";
import "./Navigation.css";

function Navigation({
  //   card,
  onClose,
  useClosePopup,
  isOpen,
  useClosePopupByEscape,
}) {
  useClosePopup("popup_opened", "popup__exit", onClose, isOpen);
  useClosePopupByEscape(isOpen);
  console.log("NAB", isOpen);
  return (
    <>
      <div
        className={`popup popup_type_image ${isOpen ? "popup_opened" : ""} `}
      >
        <div className="popup__container ">
          <div className="menu">
            <a>Главная</a>

            <a>Фильмы</a>
            <a>Сохранённые фильмы</a>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
