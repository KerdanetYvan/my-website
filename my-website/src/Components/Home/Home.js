
import React from 'react';
import './Home.css';
import Header from '../Header/Header.js';
import Profil from '../Profil/Profil.js';
import Footer from '../Footer/Footer.js';
import Article from '../Article/Article.js';
import EncyclopeDnD from "../../Assets/Encyclopé'DnD.png";

function Home() {
  const title = "Encyclopé'DnD - Un projet Angular, Firebase avec utilisation d'API";
  const cat = "Angular";
  const desc = "Projet d'étude basé sur l'utilisation d'un API, de Firebase et d'Angular. Notre projet est basé sur l'API Dungeons & Dragons 5th edition. Nous utilisons donc le Typescript, l'HTML et le CSS.";
  
  return (
    <div className="App">
      <Header page="Accueil" />

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
              <Article img={EncyclopeDnD} title={title} cat={cat} desc={desc} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
