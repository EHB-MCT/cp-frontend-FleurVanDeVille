import React from 'react';
import logo from '../assets/logo_erwaseens.png';

function Header() {
    return (
        <header>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <p>HOME</p>
        <p>PROJECTS</p>
        <p>MAKING-OF</p>
        <input
            type="text"
            placeholder="Search for a topic..."
            //onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
        </header>
    );
}

export default Header;