import React from 'react';
import '../styles/Services.css';

const Services = () => {
  // Données des services
  const services = [
    {
      title: 'Conception de sites web',
      description: 'Nous créons des sites web modernes, réactifs et optimisés pour une expérience utilisateur exceptionnelle.',
      icon: '💻', // Icône pour la conception de sites web
    },
    {
      title: 'SEO et Marketing Digital',
      description: 'Optimisez votre visibilité en ligne avec nos stratégies de référencement naturel et campagnes publicitaires ciblées.',
      icon: '📈', // Icône pour le SEO et le marketing digital
    },
    {
      title: 'Développement d\'applications',
      description: 'Des applications mobiles et web sur mesure pour répondre à vos besoins spécifiques.',
      icon: '📱', // Icône pour le développement d'applications
    },
    {
      title: 'Design graphique',
      description: 'Un design percutant pour votre branding, vos supports de communication et vos interfaces utilisateur.',
      icon: '🎨', // Icône pour le design graphique
    },
    {
      title: 'Courtage en solutions digitales',
      description: 'Nous vous aidons à trouver les meilleures solutions digitales adaptées à vos besoins.',
      icon: '🤝', // Icône pour le courtage
    },
    {
      title: 'Stratégie de communication',
      description: 'Des plans de communication sur mesure pour renforcer votre image de marque et toucher votre public cible.',
      icon: '📢', // Icône pour la communication
    },
    {
      title: 'Marketing stratégique',
      description: 'Développez votre entreprise avec des stratégies marketing innovantes et des campagnes percutantes.',
      icon: '🚀', // Icône pour le marketing stratégique
    },
    {
      title: 'Maintenance et support',
      description: 'Un support technique réactif et une maintenance proactive pour garantir la performance de vos solutions.',
      icon: '🔧', // Icône pour la maintenance
    },
  ];

  return (
    <section id="services">
      <h2>Nos Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;