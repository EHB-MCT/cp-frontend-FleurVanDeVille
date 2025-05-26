import "../../src/App.css";
import Scene1 from "../components/Scene1.jsx";
import Scene2 from "../components/Scene2.jsx";

function Sprookje() {
	return (
		<>
			<div className="sprookje-page">
				<Scene1 />
                <Scene2 />
				<div style={{ height: "100vh", background: "lightblue" }}>
					<h2>Volgende sectie</h2>
				</div>
				<div
					style={{
						height: "200vh",
						background: "linear-gradient(to bottom, black, purple)",
					}}
				/>
			</div>
		</>
	);
}

export default Sprookje;
