import './Profil.css';
import photoProfil from '../../Assets/photoProfil.jpg';
import React from 'react';
import { GiConsoleController, GiBiceps, GiLargePaintBrush } from "react-icons/gi";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Profil() {
    const ajd = new Date();
    const anniv = new Date('2000-09-04');

    let age = ajd.getFullYear() - anniv.getFullYear();
    const mois = ajd.getMonth() - anniv.getMonth();
    const jour = ajd.getDate() - anniv.getDate();

    if (mois < 0 || (mois === 0 && jour < 0)){
        age--;
    }

    return (
        <div className="Profil">
            <img src={photoProfil} alt="Profil" />
            <h1>Kerdanet Yvan</h1>
            <h2>{age} ans</h2>
            <div className="Separation"></div>
            <p>Je suis développeur web en bachelor 2ème année chez Digital Campus, je recherche une alternance pour l'année scolaire à venir (Septembre 2024).</p>
            <div className="Separation"></div>
            <h3>Mes loisirs</h3>
            <ul className="Loisirs">
                <li className="Jeux-videos"><GiConsoleController className='list-icons' id='manette' /><p> Les Jeux-vidéos : MMORPG, FPS, Gestion, Simulation</p></li>
                <li className="Sport"><GiBiceps className='list-icons' /><p> Le Sport : Escalade, Gouren (lutte bretonne)</p></li>
                <li className="Art"><GiLargePaintBrush className='list-icons' /><p> L'Art : Point de croix, dessin, graphisme</p></li>
            </ul>
            <div className="Separation"></div>
            <ul className="liste-res-soc">
                <li className="res-soc">
                    <a href="https://facebook.com/profile.php?id=100009325860351" target="_blank" rel="noopener noreferrer">
                        <AiFillFacebook className='res-icons' />
                    </a>
                </li>
                <li className="res-soc">
                    <a href="https://www.linkedin.com/in/yvankerdanet" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin className='res-icons' />
                    </a>
                </li>
                <li className="res-soc">
                    <a href="https://github.com/KerdanetYvan" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub className='res-icons' />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Profil;