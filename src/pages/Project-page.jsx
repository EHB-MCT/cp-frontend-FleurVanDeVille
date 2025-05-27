import { useEffect, useState } from "react";
import "../../src/App.css";
import "./Project-page.css";
import { useLocation, useNavigate } from "react-router";

function ProjectPage() {
	const [fairyTales, setFairyTales] = useState([]);
	const location = useLocation();
	const navigate = useNavigate();

	const searchParams = new URLSearchParams(location.search);
	const searchTerm = searchParams.get("search") || "";

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/main/course-project/public/api/fairytaleList.json"
		)
			.then((response) => response.json())
			.then((data) => {
				console.log("Fetched data:", data);
				setFairyTales(data);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	const filteredFairyTales = fairyTales;

	const handleClick = (parallaxLink) => {
		navigate(parallaxLink);
	};

	return (
		<div className="project-page">
			<h1>ALL PROJECTS</h1>
			<div className="container">
				{filteredFairyTales.map((fairytale) => (
					<div key={fairytale.id} style={{ cursor: "default" }}>
						<img
							src={
								fairytale.imgThumbnail || "https://via.placeholder.com/200x300"
							}
							alt={fairytale.fairytale}
							style={{ width: "200px", height: "auto" }}
							onClick={() => {
								if (fairytale.fairytaleLink) {
									window.location.href = fairytale.fairytaleLink;
								} else {
									alert("Geen link beschikbaar voor dit sprookje!");
								}
							}}
						/>
						<h3>{fairytale.fairytale}</h3>
						<p>{fairytale.nameStudent}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default ProjectPage;
