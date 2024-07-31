import React from 'react';
import './components.css';
import { dancingScript, playfairDisplay } from '../app/fonts'; // Ajusta la ruta según tu estructura de proyecto

const Header = () => {
  return (
    <header className="flex justify-center items-center min-h-screen relative">
      <div className="w-full h-full relative">
        <div style={{ backgroundImage: `url('/w6.jpg')` }} className="backgroundHeader">
        </div>
        <div className="container mx-auto text-center relative z-10 py-8">
          <p className='text-2xl '>21/21/2023</p>
          <h1 className={`text-8xl font-extrabold   text-white mb-2 ${playfairDisplay.className}`}>M&G</h1>
          <p className={`text-2xl  ${playfairDisplay.className}`}>Martu & Gino</p>
          <div className={`text-2xl text-gray-50  mt-4 ${dancingScript.className}`}>
            <p>Ante Dios y nuestros seres queridos, nos uniremos en matrimonio. Acompáñanos en esta bendita celebración</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
