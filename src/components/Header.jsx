import { Link } from "react-router";
import logo from "../assets/logo_erwaseens.png";
import Searchbar from "./Searchbar";
import "./Header.css";

function Header() {
	return (
		<header>
			<img src={logo} className="App-logo" alt="logo" />
			<div className="nav-search">
				<div className="nav">
					<Link to="/">HOME</Link>
					<Link to="/projects">PROJECTS</Link>
					<Link to="/making-of">MAKING-OF</Link>
				</div>
				<Searchbar />
			</div>
		</header>
	);
}

export default Header;
