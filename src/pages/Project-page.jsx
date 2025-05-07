import DATA from '../api/data.json';
import FairyTale from "../components/Fairytales";
import React, { useState } from "react";
import "../../src/App.css";

function ProjectPage() {
    const [searchTerm] = useState("");
    const filteredFairyTale = DATA.filter((fairytale) => 
        fairytale.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
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