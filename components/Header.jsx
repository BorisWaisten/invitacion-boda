import React from 'react';
import './components.css';
import Image from 'next/image';
import { cinzelDecorative } from '@/public/fonts';

const Header = () => {
  return (
    <header className="relative">
      <div className="relative w-full h-[100vw] md:h-[80vw] lg:h-[70vw]">
        <Image
          src="/fondo.jpg"
          alt="header"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority={true}
          className="w-full h-full"
        />
        {/* Capa de superposición con gradiente oscuro */}
        <div className="absolute "></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <p className="flex items-center text-lg md:text-2xl lg:text-3xl font-bold mb-4">
          <span className="flex-grow h-px w-[15vw] md:w-[15vw] lg:w-[15vw]   bg-white mr-10 md:mr-20 lg:mr-20"></span> {/* Línea antes del texto */}
          22.03.2025
          <span className="flex-grow h-px w-[15vw] md:w-[15vw] lg:w-[15vw]  bg-white ml-10 md:ml-20 lg:ml-20"></span> {/* Línea después del texto */}
        </p>
          <div className="flex flex-col items-center w-full">
            <h1 className={`titleHeader text-center ${cinzelDecorative.className}`}>
              Martu & Gino
            </h1>
            <svg 
              viewBox="0 0 400 50" 
              className="w-[80%]  sm:w-[80%] md:w-[80%] lg:w-[60%]" 
              preserveAspectRatio="xMidYMid meet" 
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="5" fill="white" />
              <line x1="30" y1="25" x2="370" y2="25" stroke="white" strokeWidth="2" />
              <circle cx="375" cy="25" r="5" fill="white" />
            </svg>
          </div>
          <p className="text-2xl sm:text-3xl md:text-2xl lg:text-5xl italic mb-6 md:mb-0 font-extrabold ">¡NOS CASAMOS!</p>
          <p className="font-bold text-sm md:text-lg lg:text-xl mt-4 md:mt-20 text-center">
            El amor no se deleita en la maldad, <br />
            sino que se regocija con la verdad. <br />
            Todo lo disculpa, todo lo cree, <br />
            todo lo espera, todo lo soporta. <br />
            El amor jamás se extingue. <br />
            <strong>1 Corintios 13:4-8</strong>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
