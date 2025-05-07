import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo_erwaseens.png";

function Header() {
	return (
		<header>
			<img src={logo} className="App-logo" alt="logo" />
			<div>
				<Link to="/">HOME</Link>
				<Link to="/projects">PROJECTS</Link>
				<Link to="/">MAKING-OF</Link>
				<input
					type="text"
					placeholder="Search for a topic..."
					//onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
		</header>
	);
}

export default Header;
