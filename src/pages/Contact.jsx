import React from 'react';
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Icônes FontAwesome
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contactez-nous</h2>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>Email : <a href="mailto:contact@agencedigitale.com">societechad@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>Téléphone mobile : <a href="tel:+2250123456789">+225 01 23 45 67 89</a></p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>Téléphone fixe : <a href="tel:+2250123456789">+225 01 23 45 67 89</a></p>
          </div>
        </div>
        <div className="social-media">
          <h3>Suivez-nous sur les réseaux sociaux</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
            </div>
        </div>
    </section>
  );
};

export default Contact;