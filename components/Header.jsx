import React from 'react';
import '../app/globals.css';

const Header = () => {
  return (
    <header className="backgroundHeader " style={{ backgroundImage: "url('/w6.jpg')",}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center relative z-10 py-8">
        <h1 className="text-4xl font-extrabold text-white mb-2">¡Nos Casamos!</h1>
        <p className="text-2xl text-gray-200">[Nombre de la Pareja]</p>
        <p className="text-lg text-gray-300 mt-4">Quiero que vengas a celebrarlo con nosotros</p>
      </div>
    </header>
  );
};

export default Header;
