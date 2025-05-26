import "./Searchbar.css";
import { useNavigate, useLocation } from "react-router";
import { useState, useEffect } from "react";

function Searchbar() {
	const [input, setSearchTerm] = useState("");
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (input.trim() !== "") {
			if (location.pathname !== "/projects") {
				navigate(`/projects?search=${encodeURIComponent(input)}`);
			} else {
				// navigeert naar /projects met de zoekterm in de URL, zonder een nieuwe entry in de browsergeschiedenis toe te voegen
				navigate(`/projects?search=${encodeURIComponent(input)}`, { replace: true });
			}
		}
	}, [input]);
	return (
		<>
			<input
				type="text"
				placeholder="Search for a topic..."
				value={input}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</>
	);
}

export default Searchbar;
