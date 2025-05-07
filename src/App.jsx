import HomePage from "./pages/Home-page.jsx";
import ProjectPage from "./pages/Project-page.jsx";
import MakingOfPage from "./pages/MakingOf-page.jsx";
import Layout from "./components/Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="/projects" element={<ProjectPage />} />
						<Route path="/Making-of" element={<MakingOfPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
