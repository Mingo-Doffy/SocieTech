import React from 'react';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import '../styles/Accueil.css';

const Accueil = () => {
  return (
    <div>
      <section id="accueil">
        <h1>Bienvenue chez Agence Digitale</h1>
        <p>Nous créons des solutions digitales sur mesure pour votre entreprise.</p>
      </section>
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Accueil;