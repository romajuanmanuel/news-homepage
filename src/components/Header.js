import React, { useRef } from "react";
import logo from "../img/logo.svg";
import "../styles/Header.css";
import btnOpen from "../img/icon-menu.svg";

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <nav ref={navRef}>
        <ul className="nav-bar">
          <li>Home</li>
          <li>News</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
        <button className="nav-btn nav-close-btn"
					onClick={showNavbar}>
          <img src={btnOpen} alt=""></img>
        </button>
      </nav>

        <button className="nav-btn" onClick={showNavbar}>
				<img src={btnOpen} alt=""></img>
			</button>
    </header>
  );
}

export default Header;
