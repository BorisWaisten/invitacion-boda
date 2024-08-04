import React from 'react';
import './components.css';
import { dancingScript, greatVibes, montserrat, parisienne, SacramentoFont } from '../public/fonts'; // Ajusta la ruta según tu estructura de proyecto

const Header = () => {
  return (
    <header className="flex justify-center items-center min-h-screen relative">
      <div className="w-full h-full relative">
        <div
          style={{ backgroundImage: `url('/w6.jpg')` }}
          className="backgroundHeader m-1 rounded-lg"
        ></div>
        <div className="container text-center relative bg-secondary mt-10 mb-10 border-header px-4">
          <p className={`text-xl sm:text-2xl ${montserrat.className} mb-6`}>22.03.25</p>
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-2"
            style={{ fontFamily: 'Asmelina Harley' }}
          >
            Martu y Gino
          </h1>
          <div className={`text-lg sm:text-sm md:text-2xl  mt-4 ${montserrat.className}`}>
            <p>
              Ante Dios y nuestros seres queridos, nos uniremos en matrimonio.
              Acompáñanos en esta bendita celebración.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
