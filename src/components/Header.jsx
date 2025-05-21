import { Link } from "react-router";
import logo from "../assets/logo_erwaseens.png";
import Searchbar from "./Searchbar";
import "./Header.css";

function Header() {
	return (
		<header>
			<img src={logo} className="App-logo" alt="logo" />
			<div>
				<Link to="/">HOME</Link>
				<Link to="/projects">PROJECTS</Link>
				<Link to="/">MAKING-OF</Link>
			</div>
			<Searchbar />
		</header>
	);
}

export default Header;
