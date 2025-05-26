import { Link } from "react-router";
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
					parallax magic, <br />
					we bring front-end stories to life — one layer at a time. ✨
				</p>
			</div>
			<div className="links">
				<h1>LINKS</h1>
				<div className="nav-links">
				<Link to="/">HOME</Link>
				<Link to="/projects">PROJECTS</Link>
				<Link to="/making-of">MAKING-OF</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
