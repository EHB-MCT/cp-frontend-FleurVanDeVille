import { useState, useEffect } from "react";
import FairyTale from "../components/Fairytales";
import "../../src/App.css";
import "./Home-page.css";
import { useNavigate } from "react-router";

function HomePage() {
    const [fairyTales, setFairyTales] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/main/course-project/public/api/fairytaleList.json")
            .then((response) => response.json())
            .then((data) => setFairyTales(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const filteredFairyTale = fairyTales.filter((fairytale) =>
        fairytale.fairytale.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="home-page">
            <h1>IN THE SPOTLIGHT</h1>
            <input
                type="text"
                placeholder="Search for a story..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: "24px", padding: "8px", fontSize: "16px" }}
            />
            <div className="container">
                {filteredFairyTale.slice(0, 4).map((fairytale) => (
                    <FairyTale
                        key={fairytale.id}
                        title={fairytale.fairytale}
                        image={fairytale.imgThumbnail}
                        student={fairytale.nameStudent}
                    />
                ))}
            </div>
            <button onClick={() => navigate("/projects")}>ALL PROJECTS</button>
        </div>
    );
}

export default HomePage;