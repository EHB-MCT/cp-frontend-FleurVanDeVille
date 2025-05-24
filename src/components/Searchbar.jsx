import "./Searchbar.css";
function Searchbar() {
	return (
		<>
			<input
				type="text"
				placeholder="Search for a topic..."
				//onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</>
	);
}

export default Searchbar;
