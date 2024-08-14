import './Contact.css';
import Header from '../../Components/Header/Header';
import Profil from '../../Components/Profil/Profil';
import Footer from '../../Components/Footer/Footer';
import { AiFillLinkedin, AiFillMail, AiFillPhone } from "react-icons/ai";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_i3tnh4h', 'template_2dzfn8o', form.current, {
                publicKey: 'nLXt-1yj1A6wqdlFt',
            })
            .then(
                () => {
                    console.log('success');
                    toast.success('Message envoyé avec succès !', {
                        position: "bottom-right"
                    })
                },
                (error) => {
                    console.log('failed...', error.text);
                    toast.error('Erreur lors de l\'envoi !', {
                        position: "bottom-right"
                    })
                },
            );
    };

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
                    <div className='Bloc-donnees'>
                        <div className='bloc-donnee'>
                            <a href="mailto:kerdanety@gmail.com">
                                <AiFillMail className='donnee-icon' />
                                <p>kerdanety@gmail.com</p>
                            </a>
                        </div>
                        <div className='bloc-donnee'>
                            <a href="tel:0634636918">
                                <AiFillPhone className='donnee-icon' />
                                <p>06 34 63 69 18</p>
                            </a>
                        </div>
                        <div className='bloc-donnee'>
                            <a href="https://www.linkedin.com/in/yvankerdanet" target="_blank" rel="noopener noreferrer">
                                <AiFillLinkedin className='donnee-icon' />
                                <p>/in/yvankerdanet</p>
                            </a>
                        </div>
                    </div>
                    <div className='Titre-form'>
                        <h1>Formulaire de contact</h1>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div id='ExpForm'>
                            <h3>Envoi simplifié ?</h3>
                            <p>N'hésitez pas à m'envoyer un message via ce formulaire de contact, comme ça, pas la peine de devoir aller jusque dans vos mails. La simplicité facilite la vie 😉.</p>
                            <p>Il me suffit juste d'avoir votre nom, votre adresse mail ainsi que le message que vous souhaitez m'envoyer.</p>
                            <p>Je vous recontacterais dans les plus brefs délais.</p>
                        </div>
                        <div className='form1prt'>
                            <div id='label1'>
                                <label>Votre Nom :</label>
                                <input type='text' name='from_name' required />
                            </div>
                            <div id='label2'>
                                <label>Votre Email :</label>
                                <input type='email' name='from_email' required />
                            </div>
                        </div>
                        <div className='form2prt'>
                            <label>Votre message :</label>
                            <textarea name='message' />
                        </div>
                        <input type='submit' value="Envoyer" id='button'/>
                    </form>
                </div>
            </div>

            <Footer />
            <ToastContainer 
                autoClose={5000}  // 5 secondes avant que la notification ne se ferme automatiquement
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
} export default Contact;