import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Notre Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <h3>Site web pour Restaurant</h3>
          <p>Un site web moderne pour un restaurant local.</p>
        </div>
        <div className="portfolio-item">
          <h3>Application de gestion</h3>
          <p>Une application web pour la gestion des stocks.</p>
        </div>
        <div className="portfolio-item">
          <h3>Campagne SEO</h3>
          <p>Optimisation SEO pour un site e-commerce.</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;