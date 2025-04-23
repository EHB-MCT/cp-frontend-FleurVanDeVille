import { useState } from "react";
import DATA from '../../api/data.json';
import FairyTale from "../components/Fairytales";

function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredFairyTale = DATA.filter((fairytale) => 
        fairytale.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <h1>IN THE SPOTLIGHT</h1>
            {filteredFairyTale.map((fairytale) => (
                    <FairyTale
                        key={fairytale.id}
                        title={fairytale.title}
                        image={fairytale.image}
                        student={fairytale.student}
                    />
                ))}
        </div>
    );
}

export default HomePage;