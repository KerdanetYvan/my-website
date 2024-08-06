
import React from 'react';
import './Home.css';
import Header from '../Header/Header.js';
import Profil from '../Profil/Profil.js';
import Footer from '../Footer/Footer.js';

function Home() {
  
  return (
    <div className="App">
      <Header />

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
