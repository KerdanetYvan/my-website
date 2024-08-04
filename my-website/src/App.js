
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-h1">
          <h1>Kerdanet Yvan</h1>
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
          <div className="Profil">
            {/* Ajouter image profil */}
            <h1>Kerdanet Yvan</h1>
            <h2>23 ans | 4 septembre 2000</h2>
            <div className="Separation"></div>
            <p>Je suis développeur web en bachelor 2ème année chez Digital Campus, je recherche une alternance pour l'année scolaire à venir (Septembre 2024).</p>
            <div className="Separation"></div>
            <h3>Mes loisirs</h3>
            <ul>
              <li>Les Jeux-vidéos : MMORPG, FPS, Gestion, Simulation</li>
              <li>Le Sport : Escalade, Gouren (lutte bretonne)</li>
              <li>L'Art : Point de croix, dessin, graphisme</li>
            </ul>
            <div className="Separation"></div>
            <ul className="liste-res-soc">
              <li className="res-soc">facebook</li>
              <li className="res-soc">linkedin</li>
              <li className="res-soc">github</li>
            </ul>
          </div>
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
          <li><a href="#mention-legales">Mentions légales</a></li>
          <li><a href="#pol-conf">Politique de confidentialité</a></li>
          <li><a href="#cond-util">Condition générales d'utilisation</a></li>
          <li><a href="mailto:kerdanety@gmail.com">Contact</a></li>
        </ul>
        <p>&copy; 2024 Yvan Kerdanet. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
