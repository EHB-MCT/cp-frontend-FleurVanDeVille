import DATA from "../api/data.json";
import React, { useState } from "react";
import FairyTale from "../components/Fairytales";
import "../../src/App.css";
import "./Home-page.css";
import { useNavigate } from "react-router";

function HomePage() {
	const [searchTerm] = useState("");
	const navigate = useNavigate();
	const filteredFairyTale = DATA.filter((fairytale) =>
		fairytale.title.toLowerCase().includes(searchTerm.toLowerCase())
	);
	return (
		<div className="home-page">
			<h1>IN THE SPOTLIGHT</h1>
			<div className="container">
				{filteredFairyTale.slice(0, 4).map((fairytale) => (
					<FairyTale
						key={fairytale.id}
						title={fairytale.title}
						image={fairytale.image}
						student={fairytale.student}
					/>
				))}
			</div>
			<button onClick={() => navigate("/projects")}>ALL PROJECTS</button>
		</div>
	);
}

export default HomePage;
