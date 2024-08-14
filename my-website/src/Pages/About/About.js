import './About.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import PhotoProfil from '../../Assets/photoProfil.jpg';
import { AiFillHourglass } from "react-icons/ai";

function About() {

    return (
        <div className="About">
            <Header page="A propos" />

            <div className='About-container'>
                <div className='IntroPerso'>
                    <div id='PhotoNom'>
                        <img src={PhotoProfil} alt='Avatar de moi-même' />
                        <h1>Kerdanet Yvan</h1>
                    </div>
                    <div id='Pres'>
                        <p>Bien le bonjour, visiteur !</p>
                        <p>Je me nomme Yvan Kerdanet, je suis développeur Web passionné par le FrontEnd.</p>
                        <p>Je suis étudiant à Digital Campus en Bachelor 2ème année de Développement Web et je recherche une alternance.</p>
                        <p>Si mon profil vous intéresse, n'hésitez pas à <a href='/contact'>Me Contacter</a> via mes réseaux ou autre.</p>
                        <blockquote id='citation'>🔥 Si on s'amuse, on ne travail jamais ! 🔥</blockquote>
                    </div>
                </div>

                <div className='ParcScoPro'>

                </div>

                <div className='ww'>
                    <div className='WorkingOnIt'>
                        <AiFillHourglass className='chargement'/>
                        <h1>La suite arrive bientôt</h1>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
} export default About;