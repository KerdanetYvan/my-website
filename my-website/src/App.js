
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
            {/* <img src="">Image de profil</img> */}
            <h1>Kerdanet Yvan</h1>
            <h2>23 ans | 4 septembre 2000</h2>
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
