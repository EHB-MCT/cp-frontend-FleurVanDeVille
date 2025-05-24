import HomePage from "./pages/Home-page.jsx";
import ProjectPage from "./pages/Project-page.jsx";
import MakingOfPage from "./pages/MakingOf-page.jsx";
import Layout from "./components/Layout.jsx";
import Sprookje from "./pages/Sprookje.jsx";
import { Routes, Route } from "react-router";
import { HashRouter } from "react-router";
import "./App.css";

function App() {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="/projects" element={<ProjectPage />} />
						<Route path="/making-of" element={<MakingOfPage />} />
						<Route path="/sprookje" element={<Sprookje />} />
					</Route>
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
