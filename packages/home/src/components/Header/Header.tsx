import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo"></div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/sunglasses">SUNGLASSES</Link>
          </li>
          <li>
            <Link to="/eyeglasses">EYEGLASSES</Link>
          </li>
          <li>
            <Link to="/lenses">LENSES</Link>
          </li>
        </ul>
      </nav>
      <div className="search-container">
        <input type="text" placeholder="search" />
        <button className="reset-button">RESET</button>
      </div>
    </header>
  );
};

export default Header;
