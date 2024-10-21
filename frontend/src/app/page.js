"use client"

import { FaBars, FaHeart, FaChevronDown, FaHtml5, FaCss3, FaJava, FaPython, FaPaintBrush, FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiAngular, SiReact, SiFigma, SiCanva, SiC, SiTailwindcss } from "react-icons/si";
import { DiRasberryPi, DiGit, DiLinux } from "react-icons/di";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import CoffeeCup from "../assets/tasse-de-cafe.png";
import Pdp from "../assets/Yvan-PORTRAIT-JoanKPhotographie-4.jpg";
import SSL from "../assets/SimpleSchedulerLogo.png";
import SS from "../assets/SimpleScheduler.png";
import DnD from "../assets/Encyclopednd.png";
import EduCapt from "../assets/Educapture.png";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [showModalML, setShowModalML] = useState(false);
  const openModalML = () => setShowModalML(true);
  const closeModalML = () => setShowModalML(false);

  const [showModalPC, setShowModalPC] = useState(false);
  const openModalPC = () => setShowModalPC(true);
  const closeModalPC = () => setShowModalPC(false);
  
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
    <div id="home">
      <header id="header" className="w-full h-fit p-4 bg-[url(../assets/bg.jpg)] bg-cover">
        <div className="flex flex-col items-center">
          <a href="https://www.linkedin.com/in/yvankerdanet/" target="_blank" className="avatar"><Image src={Pdp} alt="photo de profil" className="h-32 w-auto rounded-full"/></a>
          <h1 className="w-4/5 text-center text-slate-100"><strong>Je suis Yvan</strong><br />Étudiant à Digital Campus<br />Alternant en développement web</h1>
        </div> 
      </header>
      <main className="p-4 pt-4">
        <section>
          <h1 className="text-2xl font-bold text-slate-700">Mes compétences</h1>
          <p className="italic text-xs text-slate-400">Voici mes différentes compétences techniques et autres.</p>
          <div className="mt-2">
            <ul className="flex justify-around">
              <li className="border-2 border-black p-2"><SiTailwindcss  className="w-8 h-auto"/></li>
              <li className="border-2 border-black p-2"><FaCss3  className="w-8 h-auto" /></li>
              <li className="border-2 border-black p-2"><FaHtml5  className="w-8 h-auto" /></li>
              <li className="border-2 border-black p-2"><SiJavascript  className="w-8 h-auto" /></li>
              <li className="border-2 border-black p-2"><FaGithub  className="w-8 h-auto" /></li>
            </ul>
            <p className="absolute right-1 text-sm italic hover:underline"><a href="./competences">Voir plus...</a></p>
          </div>
        </section>

        <section className="mt-4">
          <h1 className="text-2xl font-bold text-slate-700">Mes projets</h1>
          <p className="italic text-xs text-slate-400">Voici mes différents projets à travers lesquels j'ai pu appliquer mes compétences.</p>
          <div className="w-11/12 m-auto">
            <ul>
              <li className="border-2 border-slate-900 mt-2">
                <div className="flex">
                  <Image src={SSL} alt="SimpleScheduler Logo" className="w-1/3 h-auto m-2 rounded"></Image>
                  <div className="flex flex-col justify-center items-start">
                    <h2 className="font-bold">SimpleScheduler</h2>
                    <p className="text-sm italic text-slate-600">courte description...</p>
                  </div>
                </div>
                <p className="text-xs ml-4 mb-2 font-bold text-slate-400">//Design UI/UX</p>
              </li>
              <li className="border-2 border-slate-900 mt-0">
                <div className="flex">
                  <Image src={DnD} alt="Encyclopé'DnD Logo" className="w-1/3 h-auto m-2 rounded-3xl"></Image>
                  <div className="flex flex-col justify-center items-start">
                    <h2 className="font-bold">Encyclopé'DnD</h2>
                    <p className="text-sm italic text-slate-600">courte description...</p>
                  </div>
                </div>
                <p className="text-xs ml-4 mb-2 font-bold text-slate-400">//Front-end //Back-end //Design UI/UX</p>
              </li>
              <li className="border-2 border-slate-900 mt-0">
                <div className="flex">
                  <Image src={EduCapt} alt="Educapture Logo" className="w-1/3 h-auto m-2 rounded"></Image>
                  <div className="flex flex-col justify-center items-start">
                    <h2 className="font-bold">Éducapture</h2>
                    <p className="text-sm italic text-slate-600">courte description...</p>
                  </div>
                </div>
                <p className="text-xs ml-4 mb-2 font-bold text-slate-400">//Design UI/UX</p>
              </li>
            </ul>
          </div>
        </section>
          
        <section className="mt-2">
          <h1 className="text-2xl font-bold text-slate-700">Contact</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <div>
                <label className="font-bold text-slate-500">Votre Nom :</label>
                <input type='text' name='from_name' required className="h-8 w-full bg-slate-200 rounded p-2"/>
              </div>
              <div id='label2'>
                <label className="font-bold text-slate-500">Votre Email :</label>
                <input type='email' name='from_email' required className="h-8 w-full bg-slate-200 rounded p-2"/>
              </div>
            </div>
            <div>
              <label className="font-bold text-slate-500">Votre message :</label>
              <textarea name='message' className="h-32 w-full bg-slate-200 rounded p-2"/>
            </div>
            <div className="flex justify-end">
              <input type='submit' value="Envoyer" id="button" className="bg-slate-700 text-white font-bold px-2 py-0.5 rounded"/>
            </div>
          </form>
        </section>
      </main>

      <footer>
        <section>

        </section>
        <section>
          <ul>
            <li><a href="#mention-legales" onClick={openModalML}>Mentions légales</a></li>
            <li><a href="#pol-conf" onClick={openModalPC}>Politique de confidentialité</a></li>
            <li><a href="#contacts">Contact</a></li>
          </ul>

          
        </section>
      </footer>

      <Modal show={showModalML} onClose={closeModalML} className="">
        <h2>Mentions légales</h2>
        <div className="Text">
          <p>Yvan Kerdanet - Étudiant</p>
          <p>Mail: kerdanety@gmail.com - N° téléphone : 06 34 63 69 18</p>
          <p>IONOS SARL</p>
          <p>7 Place de la Gare, 57200 Sarreguemines</p>
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
      
      {/* <footer className="App-footer">
        <ul>
          <li><a href="#mention-legales" /*onClick={openModalML}>Mentions légales</a></li>
          <li><a href="#pol-conf" /*onClick={openModalPC}>Politique de confidentialité</a></li>
          <li><a href="mailto:kerdanety@gmail.com">Contact</a></li>
        </ul>
        <p>&copy; 2024 Yvan Kerdanet. Tous droits réservés.</p>
      </footer> */}
    </div>
  );
}

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}><AiFillCloseCircle /></span>
        {children}
      </div>
    </div>
  );
};



/* function Logo({ type }) {
  switch(type){
    case 'design':
      return <FaPaintBrush className="logoProj" />
    case 'angular':
      return <SiAngular className="logoProj" />
    case 'react':
      return <SiReact className="logoProj" />
    case 'html/CSS':
      return <div className="logoProj" >
        <FaHtml5 />
        <FaCss3 />
      </div>
  }
} */

/* function Projet({ type, titre, desc }) {
  return (
    <div className="proj">
      <div className="logotitre">
        <Logo type={type} />
        <h1>{ titre }</h1>
      </div>
      <p className="desc">{ desc }</p>
    </div>
  )
} */