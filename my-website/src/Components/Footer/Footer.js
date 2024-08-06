import React, { useState } from 'react';
import './Footer.css';
import Modal from '../Modal/Modal';

function Footer() {
    const [showModalML, setShowModalML] = useState(false);
    const openModalML = () => setShowModalML(true);
    const closeModalML = () => setShowModalML(false);

    const [showModalPC, setShowModalPC] = useState(false);
    const openModalPC = () => setShowModalPC(true);
    const closeModalPC = () => setShowModalPC(false);

    return (
        <div>
            <footer className="App-footer">
            <ul>
            <li><a href="#mention-legales" onClick={openModalML}>Mentions légales</a></li>
            <li><a href="#pol-conf" onClick={openModalPC}>Politique de confidentialité</a></li>
            <li><a href="mailto:kerdanety@gmail.com">Contact</a></li>
            </ul>
            <p>&copy; 2024 Yvan Kerdanet. Tous droits réservés.</p>
            </footer>

            <Modal show={showModalML} onClose={closeModalML}>
                <h2>Mentions légales</h2>
                <div className="Text">
                <p>Yvan Kerdanet - Étudiant</p>
                <p>Mail: kerdanety@gmail.com - N° téléphone : 06 34 63 69 18</p>
                <p>Add hosting...</p>
                </div>
            </Modal>

            <Modal show={showModalPC} onClose={closeModalPC}>
                <h2>Politique de confidentialité</h2>
                <div className='Text'>
                <p>Le but de cette politique de confidentialité est d'informer l'utilisateur du traitement de ses données.</p>
                <p>Aucune donnée personnel de l'utilisateur n'est recueilli hors informations données par l'utilisateur dans les champs prévu à cet effet.</p>
                <p>L'utilisateur à le droits de naviguer à travers le site sans soucis d'illégalité.</p>
                <h3>Consentement :</h3>
                <p>L'utilisateur accepte que toute donnée qu'il communique via zone de texte soit enregistrée à des fins professionnel et de communication.</p>
                <h3>Raison d'existence du site :</h3>
                <p>Domaine : kerdanetyvan.bzh</p>
                <p>Propriétaire : Kerdanet Yvan</p>
                <p>Site ayant pour but de faire office de portfolio ainsi que blog d'actualité personnel.</p>
                </div>
            </Modal>
        </div>
    );
}

export default Footer;