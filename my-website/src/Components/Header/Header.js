import React from "react";
import './Header.css';

function Header() {
    const ajd = new Date();
    const moisNoms = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const jourNoms = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    return (
        <header className="App-header">
            <div className="Header-h1">
                <h1>Kerdanet Yvan</h1>
            </div>
            <div className="Date">
                <h2>{jourNoms[ajd.getDay()]} {ajd.getDate()} {moisNoms[ajd.getMonth()]} {ajd.getFullYear()}</h2>
            </div>
            <div className="navbar">
                <ul>
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#about">A propos</a></li>
                    <li><a href="#contact-me">Me contacter</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header