
import React, { useState } from 'react';
import './App.css';
import Profil from './Profil/Profil.js';
import Modal from './Modal/Modal.js';

function App() {
  const ajd = new Date();
  const moisNoms = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]

  const [showModalML, setShowModalML] = useState(false);
  const openModalML = () => setShowModalML(true);
  const closeModalML = () => setShowModalML(false);

  const [showModalPC, setShowModalPC] = useState(false);
  const openModalPC = () => setShowModalPC(true);
  const closeModalPC = () => setShowModalPC(false);

  const [showModalCGU, setShowModalCGU] = useState(false);
  const openModalCGU = () => setShowModalCGU(true);
  const closeModalCGU = () => setShowModalCGU(false);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-h1">
          <h1>Kerdanet Yvan</h1>
        </div>
        <div className="Date">
          <h2>{ajd.getDate()} {moisNoms[ajd.getMonth()]} {ajd.getFullYear()}</h2>
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

      <footer className="App-footer">
        <ul>
          <li><a href="#mention-legales" onClick={openModalML}>Mentions légales</a></li>
          <li><a href="#pol-conf" onClick={openModalPC}>Politique de confidentialité</a></li>
          <li><a href="#cond-util" onClick={openModalCGU}>Conditions générales d'utilisation</a></li>
          <li><a href="mailto:kerdanety@gmail.com">Contact</a></li>
        </ul>
        <p>&copy; 2024 Yvan Kerdanet. Tous droits réservés.</p>
      </footer>

      <Modal show={showModalML} onClose={closeModalML}>
        <h2>Mentions légales</h2>
        <p>Lorem Ipsum dolor es...</p>
      </Modal>

      <Modal show={showModalPC} onClose={closeModalPC}>
        <h2>Politique de confidentialité</h2>
        <p>Lorem Ipsum dolor es...</p>
      </Modal>

      <Modal show={showModalCGU} onClose={closeModalCGU}>
        <h2>Conditions générales d'utilisation</h2>
        <p>Lorem Ipsum dolor es...</p>
      </Modal>
    </div>
  );
}

export default App;
