import "../../src/App.css";
import Scene1 from "../components/Scene1.jsx";
import Scene2 from "../components/Scene2.jsx";
import Scene3 from "../components/Scene3.1.jsx";
import Scene4 from "../components/Scene4.jsx";
import Scene5 from "../components/Scene5.jsx";
import Scene6 from "../components/Scene6.jsx";
import Scene7 from "../components/Scene7.jsx";
import Scene8 from "../components/Scene8.jsx";
import Scene9 from "../components/Scene9.jsx";

function Sprookje() {
	return (
		<>
			<div className="sprookje-page">
				<Scene1 />
				<Scene2 />
				<Scene3 />
				<Scene4 />
				<Scene5 />
				<Scene6 />
				<Scene7 />
				<Scene8 />
				<Scene9 />

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
