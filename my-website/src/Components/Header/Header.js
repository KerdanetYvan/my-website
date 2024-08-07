import React from "react";
import './Header.css';
import { AiFillCalendar } from "react-icons/ai";

function Header({page}) {
    const ajd = new Date();
    const moisNoms = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const jourNoms = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    return (
        <header className="App-header">
            <div className="Header-h1">
                <h1>{page}</h1>
            </div>
            <div className="Date">
                <AiFillCalendar className="Calendar"/>
                <h2>{jourNoms[ajd.getDay()]} {ajd.getDate()} {moisNoms[ajd.getMonth()]} {ajd.getFullYear()}</h2>
            </div>
            <div className="navbar">
                <ul>
                    <li><a href="/home">Accueil</a></li>
                    <li><a href="/about">A propos</a></li>
                    <li><a href="/contact">Me contacter</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header