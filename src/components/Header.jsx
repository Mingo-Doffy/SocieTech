import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('accueil');

  const handleScroll = () => {
    const sections = ['accueil', 'services', 'portfolio', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Vérifie si la section est visible dans la fenêtre
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav>
        <div className="logo">SocieTech - Agence Digitale</div>
        <ul>
          {['accueil', 'services', 'portfolio', 'contact'].map((section) => (
            <li key={section}>
              <NavLink
                to={`/#${section}`}
                className={activeSection === section ? 'active' : ''}
                onClick={() => handleClick(section)}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;