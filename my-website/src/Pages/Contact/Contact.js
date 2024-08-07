import './Contact.css';
import Header from '../../Components/Header/Header';
import Profil from '../../Components/Profil/Profil';
import Footer from '../../Components/Footer/Footer';

function Contact() {

    return (
        <div className="Contact">
            <Header page="Me contacter" />

            <div className="Contact-container">
                <div className="Contact-sidebar">
                    <Profil/>
                </div>

                <div className="Contact-form">
                    <div className='Titre-form'>
                        <h1>Mes données personnelles</h1>
                    </div>
                    <div className='Bloc-form'>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className='Titre-form'>
                        <h1>Formulaire de contact</h1>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
} export default Contact;