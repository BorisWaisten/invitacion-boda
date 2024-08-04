import React from 'react';
import './styles.css';

// Componente de botón reutilizable
const Button = ({ children, href, onClick }) => {
  // Si se proporciona un enlace (href), el botón se convierte en un enlace
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="py-2 px-4 text-text font-semibold button shadow-md bg-gray-700 hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        {children}
      </a>
    );
  }

  // De lo contrario, es un botón regular que puede tener un manejador de clics
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 text-text font-semibold button shadow-md bg-gray-700 hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      {children}
    </button>
  );
};

export default Button;
