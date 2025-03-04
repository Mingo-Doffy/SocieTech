import React from 'react';
import '../styles/Button.css'; // Fichier de styles pour le bouton

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      className={`button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;