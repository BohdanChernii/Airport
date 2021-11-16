import React from "react";
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="https://iev.aero/_nuxt/img/logo@2x.2d2c20b.png"
          alt="Airport Logo"
        />
      </div>
      <ul className="nav header__nav">
        <li className="header__nav-item">
          <span>Пасажирам</span>
        </li>
        <li className="header__nav-item">
          <span style={{ whiteSpace: "nowrap" }}>Послуги IEV</span>
        </li>
        <li className="header__nav-item">
          <span>VIP</span>
        </li>
        <li className="header__nav-item">Партнерам</li>
        <li className="header__nav-item">Пресцентр</li>
        <li className="header__nav-item">UA</li>
      </ul>
    </div>
  );
};
export default Header;
