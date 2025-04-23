import React from "react";
import "../components/Footer.css";
import logo from "../assets/logo_erwaseens.png";

function Footer() {
	return (
		<footer>
			<img src={logo} className="App-logo" alt="logo" />
			<div>
				<h1>ABOUT US</h1>
				<p>
					Welcome to a world where fairy tales scroll with depth. Through
					parallax magic, we bring front-end stories to life — one layer at a
					time. ✨
				</p>
			</div>
			<div>
				<h1>LINKS</h1>
				<p>HOME</p>
				<p>PROJECTS</p>
				<p>MAKING-OF</p>
			</div>
		</footer>
	);
}

export default Footer;
