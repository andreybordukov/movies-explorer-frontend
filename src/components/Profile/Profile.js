import React from "react";

import "./Profile.css";

function Profile() {
  return (
    <div className="page">
      <div className="wrapper">
        <div className="profile_title">Привет, Виталий!</div>
        <div className="profile_input-block">
          <div className="profile_input profile_input-name">
            <label>Имя</label>
            <input />
          </div>
          <div className="profile_input profile_input-email">
            <label>E-mail</label>
            <input placeholder="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
