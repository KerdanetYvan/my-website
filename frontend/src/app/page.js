"use client"

import { FaBars, FaHeart, FaChevronDown, FaHtml5, FaCss3, FaJava, FaPython, FaPaintBrush, FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiAngular, SiReact, SiFigma, SiCanva, SiC, SiTailwindcss } from "react-icons/si";
import { DiRasberryPi, DiGit, DiLinux } from "react-icons/di";
import Image from "next/image";
import CoffeeCup from "../assets/tasse-de-cafe.png";
import Pdp from "../assets/Yvan-PORTRAIT-JoanKPhotographie-4.jpg";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() { 
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
          <div>
            <ul>
              <li></li>
            </ul>
          </div>
        </section>
      </main>
      {/* <Landing />
      <div id="Article">
        <div id="intro">
          <h1>Qui suis-je ?</h1>
          <p>Étudiant à Digital Campus depuis le 23 septempbre 2024, je suis en Bachelor 2ème année de développement web.</p>
          <p>Je recherche activement une alternance dans ce domaine pour une période de 2 ans sous un rythme de 2 jours en formation, 3 jours en entreprise</p>
          <h2>Une phrase qui me défini ?</h2>
          <blockquote>"A tout problème sa solution, et s'il n'y en a pas, on en trouvera une !"</blockquote>
        </div>
        <Bloc Titre="Mes compétences" Position="gauche">
          <div id="icons">
            <FaHtml5 className="icon" />
            <FaCss3 className="icon" />
            <FaJava className="icon" />
            <FaPython className="icon" />
            <SiTypescript className="icon" />
            <SiJavascript className="icon" />
            <SiAngular className="icon" />
            <SiReact className="icon" />
            <SiFigma className="icon" />
            <SiCanva className="icon" />
            <SiC className="icon"/>
            <DiRasberryPi className="icon" />
            <DiGit className="icon" />
            <DiLinux className="icon" />
          </div>
        </Bloc>
        <Bloc Titre="Mes Projets" Position="droite">
          <div id="projets">
            <Projet type='angular' titre="Encyclopé'DnD" desc="Projet scolaire se basant sur le framework Angular, utilisant le service Firebase ayant pour but d'exploiter une API." />
            <Projet type='design' titre="Educapture" desc="Projet ayant pour but de créer une entreprise en passant par toutes les étapes nécéssaire. Rôle occupé : Designer UX/UI." />
          </div>
        </Bloc>
        <Bloc Titre="Mes Réseaux" Position="gauche">
          <div id="reseaux">
            <a href="https://github.com/KerdanetYvan"><FaGithub className="res"/></a>
            <a href="https://www.linkedin.com/in/yvankerdanet/"><FaLinkedin className="res"/></a>
            <a href="tel:+33634636918"><FaPhone className="res"/></a>
            <a href="mailto:kerdanety@gmail.com"><FaEnvelope className="res"/></a>
          </div>
          <div id="Formulaire_de_contact">
            <h1>Me Contacter ?</h1>
            <Formulaire />
          </div>
        </Bloc>
      </div> */}
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

function Formulaire() {
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
    <div>
      <form ref={form} onSubmit={sendEmail}>
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
        <div id='buttonDiv'>
          <input type='submit' value="Envoyer" id="button"/>
        </div>
      </form>
    </div>
  );
}

function Logo({ type }) {
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
}

function Projet({ type, titre, desc }) {
  return (
    <div className="proj">
      <div className="logotitre">
        <Logo type={type} />
        <h1>{ titre }</h1>
      </div>
      <p className="desc">{ desc }</p>
    </div>
  )
}