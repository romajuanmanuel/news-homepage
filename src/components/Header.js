import React from "react";
import logo from "../img/logo.svg";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul className="nav-bar">
          <li>Home</li>
          <li>News</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
