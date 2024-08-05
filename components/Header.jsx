import React from 'react';
import './components.css';

const Header = () => {
  return (
    <header className="flex justify-center items-center min-h-screen relative">
      <div className="w-full h-full relative">
        <div
          style={{ backgroundImage: `url('/w6.jpg')` }}
          className="backgroundHeader m-1 rounded-lg"
        ></div>
        <div className="container text-center relative mt-10 mb-10  px-4">
          <p className={`text-base sm:text-lg md:text-2xl font-bold  mb-6`}>22.03.25</p>
          <h1
            className="titleHeader font-extrabold mt-10"
            style={{ fontFamily: 'Asmelina Harley' }}
          >
            Martu y Gino
          </h1>
          <div className={`text-base sm:text-lg md:text-2xl lg:text-2xl mt-10 `}>
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
