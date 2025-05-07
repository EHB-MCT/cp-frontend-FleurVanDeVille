import DATA from "../api/data.json";
import React, { useState } from "react";
import FairyTale from "../components/Fairytales";
import "../../src/App.css";

function HomePage() {
	const [searchTerm] = useState("");
	const filteredFairyTale = DATA.filter((fairytale) =>
		fairytale.title.toLowerCase().includes(searchTerm.toLowerCase())
	);
	return (
		<div>
			<h1>IN THE SPOTLIGHT</h1>
			<div className="container">
				{filteredFairyTale.map((fairytale) => (
					<FairyTale
						key={fairytale.id}
						title={fairytale.title}
						image={fairytale.image}
						student={fairytale.student}
					/>
				))}
			</div>
			<button>ALL PROJECTS</button>
		</div>
	);
}

export default HomePage;
