"use client"

import { FaBars, FaHeart, FaChevronDown, FaHtml5, FaCss3, FaJava, FaPython, FaPaintBrush, FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiAngular, SiReact, SiFigma, SiCanva, SiC, SiTailwindcss } from "react-icons/si";
import { DiRasberryPi, DiGit, DiLinux } from "react-icons/di";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import Pdp from "../assets/Yvan-PORTRAIT-JoanKPhotographie-4.jpg";
import SSL from "../assets/SimpleSchedulerLogo.png";
import DnD from "../assets/Encyclopednd.png";
import EduCapt from "../assets/Educapture.png";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [showModalML, setShowModalML] = useState(false);
  const openModalML = () => setShowModalML(true);
  const closeModalML = () => setShowModalML(false);

  const [showModalPC, setShowModalPC] = useState(false);
  const openModalPC = () => setShowModalPC(true);
  const closeModalPC = () => setShowModalPC(false);

  const [showModalC, setShowModalC] = useState(false);
  const openModalC = () => setShowModalC(true);
  const closeModalC = () => setShowModalC(false);
  
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
    <div id="home" className="md:flex md:flex-col md:items-end">
      <header id="header" className="w-full h-fit p-4 bg-[url(../assets/bg.jpg)] bg-cover md:fixed md:top-0 md:left-0 md:w-1/3 md:h-full md:flex md:items-center md:justify-end lg:w-1/4">
        <div className="flex flex-col items-center md:items-end md:w-full">
          <a href="https://www.linkedin.com/in/yvankerdanet/" target="_blank" className="avatar"><Image src={Pdp} alt="photo de profil" className="h-32 w-auto rounded-full"/></a>
          <h1 className="w-4/5 text-center text-slate-100 md:text-end md:mr-4"><strong>Je suis Yvan</strong><br />Étudiant à Digital Campus<br />Alternant en développement web</h1>
          <ul className="hidden md:flex md:justify-around w-1/2 mt-2 mr-4">
            <li className="p-1 rounded bg-gray-50"><a href=""><FaGithub className="h-auto w-4 text-slate-700"/></a></li>
            <li className="p-1 rounded bg-gray-50"><a href=""><FaLinkedin className="h-auto w-4 text-slate-700"/></a></li>
            <li className="p-1 rounded bg-gray-50"><a href="tel:0634636918"><FaPhone className="h-auto w-4 text-slate-700"/></a></li>
            <li className="p-1 rounded bg-gray-50"><a href="mailto:kerdanety@gmail.com"><FaEnvelope className="h-auto w-4 text-slate-700"/></a></li>
          </ul>
        </div> 
      </header>
      <main className="p-4 pt-4 md:w-2/3 lg:w-3/4">
        <section className="hidden md:flex md:justify-end w-full">
          <ul className="w-3/4 flex justify-around text-2xl font-bold text-slate-700">
            <li>Acceuil</li>
            <li>Compétences</li>
            <li>Projets</li>
            <li>A propos</li>
            <li>Contact</li>
          </ul>
        </section>
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
              <input type='submit' value="Envoyer" id="button" className="bg-slate-700 text-gray-50 font-bold px-2 py-0.5 rounded"/>
            </div>
          </form>
        </section>
      </main>

      <footer className="bg-slate-700 text-gray-50 md:w-2/3 lg:w-3/4">
        <section className="w-3/4 m-auto md:w-56 mb-0.5">
          <h1 className="font-bold text-xl mb-1">Mes réseaux</h1>
          <ul className="flex justify-around">
            <li><a href=""><FaGithub className="h-auto w-8"/></a></li>
            <li><a href=""><FaLinkedin className="h-auto w-8"/></a></li>
            <li><a href="tel:0634636918"><FaPhone className="h-auto w-8"/></a></li>
            <li><a href="mailto:kerdanety@gmail.com"><FaEnvelope className="h-auto w-8"/></a></li>
          </ul>
        </section>
        <section className="flex flex-col items-center justify-around w-full h-16">
          <ul className=" text-sm flex justify-around w-full md:w-3/4">
            <li><a href="#mention-legales" onClick={openModalML} className="hover:underline">Mentions légales</a></li>
            <li><a href="#pol-conf" onClick={openModalPC} className="hover:underline">Politique de confidentialité</a></li>
            <li><a href="#contacts" onClick={openModalC} className="hover:underline">Contact</a></li>
          </ul>

          <p className="text-sm text-gray-500 md:text-base">&copy; Yvan Kerdanet - Tout droit réservés</p>
        </section>
      </footer>

      <Modal show={showModalML} onClose={closeModalML}>
        <h2 className="text-center font-bold text-xl">Mentions légales</h2>
        <div className="Text">
          <p className="font-bold">Yvan Kerdanet - Étudiant</p>
          <p className="ml-2">Mail: <a href="mailto:kerdanety@gmail.com" className="hover:underline">kerdanety@gmail.com</a><br />N° téléphone : <a href="tel:0634636918" className="hover:underline">06 34 63 69 18</a></p>
          <p className="font-bold">IONOS SARL</p>
          <p className="ml-2 italic">7 Place de la Gare, 57200 Sarreguemines</p>
        </div>
      </Modal>

      <Modal show={showModalPC} onClose={closeModalPC}>
        <h2 className="text-center font-bold text-xl">Politique de confidentialité</h2>
        <div className='Text'>
          <p className="italic text-gray-500 text-xs text-center mt-2 mb-2">Le but de cette politique de confidentialité est d'informer l'utilisateur du traitement de ses données.</p>
          <p>Aucune donnée personnel de l'utilisateur n'est recueilli hors informations données par l'utilisateur dans les champs prévu à cet effet.</p>
          <p>L'utilisateur à le droits de naviguer à travers le site sans soucis d'illégalité.</p>
          <h3 className="font-semibold">Consentement :</h3>
          <p className="ml-2">L'utilisateur accepte que toute donnée qu'il communique via zone de texte soit enregistrée à des fins professionnel et de communication.</p>
          <h3 className="font-semibold">Raison d'existence du site :</h3>
          <p className="ml-2">Domaine : kerdanetyvan.dev<br />Propriétaire : Kerdanet Yvan<br />Site ayant pour but de faire office de portfolio ainsi que blog d'actualité personnel.</p>
        </div>
      </Modal>

      <Modal show={showModalC} onClose={closeModalC}>
        <h2 className="text-center font-bold text-xl">Me contacter</h2>
        <a href="mailto:kerdanety@gmail.com" className="flex items-center"><FaEnvelope className="h-4 w-auto mr-2"/><p>kerdanety@gmail.com</p></a>
        <a href="tel:0634636918" className="flex items-center"><FaPhone className="h-4 w-auto mr-2"/><p>06 34 63 69 18</p></a>
      </Modal>
    </div>
  );
}

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal fixed w-full h-full bg-black/25 top-0 left-0 flex justify-center items-center" onClick={onClose}>
      <div className="modal-content max-w-[80%] h-fit max-h-[80%] bg-white rounded-2xl relative p-2" onClick={(e) => e.stopPropagation()}>
        <span className="close absolute right-2 top-2" onClick={onClose}><AiFillCloseCircle className="w-auto h-6"/></span>
        {children}
      </div>
    </div>
  );
};