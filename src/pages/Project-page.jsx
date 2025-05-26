import DATA from '../api/data.json';
import FairyTale from "../components/Fairytales";
import "../../src/App.css";
import "./Project-page.css";
import { useLocation } from "react-router";

function ProjectPage() {
    const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const searchTerm = searchParams.get("search") || "";

    const filteredFairyTale = DATA.filter((fairytale) => 
        fairytale.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className='project-page'>
            <h1>ALL PROJECTS</h1>
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
        </div>
    );
}

export default ProjectPage;