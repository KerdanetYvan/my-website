
import React from 'react';
import './Home.css';
import Profil from '../Profil/Profil.js';
import Footer from '../Footer/Footer.js';

function Home() {
  const ajd = new Date();
  const moisNoms = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  const jourNoms = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

  return (
    <div className="App">
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

      <div className="App-container">
        <div className="App-sidebar">
          <Profil/>
        </div>

        <div className="App-articles">
          <div className="Titre">
            <h1>Mes projets</h1>
          </div>
          <div className="Articles">
            <div id="Article">
              article 1
            </div>
            <div id="Article">
              article 2
            </div>
            <div id="Article">
              article 3
            </div>
            <div id="Article">
              article 4
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
