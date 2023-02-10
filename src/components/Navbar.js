import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Nav.css";
import logo from "../img/logo.svg";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			 <div className="logo">
        <img src={logo} alt="logo" />
      </div>

			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">News</a>
				<a href="/#">Popular</a>
				<a href="/#">Trending</a>
                <a href="/#">Categories</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;