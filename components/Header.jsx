import React from 'react';
import './components.css';
import Image from 'next/image';
import { cinzelDecorative } from '@/public/fonts';

const Header = () => {
  return (
<header className="flex justify-center items-center relative">
  <div className="relative w-full h-full">
    <Image
      src="/martu1.jpg"
      alt="header"
      width={1920}
      height={1080}
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      quality={100}
      priority={true}
      style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
    />
    {/* Capa de superposición con gradiente oscuro */}
    <div className="absolute inset-0 bg-black/35"></div>
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
      <p className="text-lg md:text-2xl lg:text-2xl font-bold m-5 underline">22.03.2025</p>
      <div className="flex flex-col items-center">
        <h1 className={`titleHeader text-center ${cinzelDecorative.className}`}>
          Martu & Gino
        </h1>
        {/* SVG ajustado para ser responsivo */}
        <svg viewBox="0 0 400 50" width="100%" height="10vh" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="5" fill="white" />
          <line x1="30" y1="25" x2="370" y2="25" stroke="white" strokeWidth="3" />
          <circle cx="375" cy="25" r="5" fill="white" />
        </svg>
      </div>
      <p className="text-2xl sm:text-3xl md:text-2xl lg:text-5xl italic font-extrabold mt-4">¡NOS CASAMOS!</p>
      <p className="font-bold text-xs md:text-lg lg:text-xl mt-4 md:mt-20 text-center">
        El amor es paciente, es bondadoso. <br />
        El amor no es envidioso ni jactancioso ni orgulloso. <br />
        No se comporta con rudeza, no es egoísta, <br />
        no se enoja fácilmente, no guarda rencor. <br />
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
