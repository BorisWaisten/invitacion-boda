'use client';
import React from 'react';
import '../components.css';
import { useRouter } from 'next/navigation';
// import Button from '../ui/buttons'; // Importa el nuevo componente de botón

const Party = () => {
  const router = useRouter();

  const handleSongSuggestionClick = () => {
    // Redirige a la página de sugerencia de canciones
    router.push('/song');
  };

  return (
      <div className="relative container mt-5 py-8 text-center mx-auto">
        <img
          className="absolute  w-[50vw] left-[-30vw] top-[-10vw] lg:top-[-10vw] lg:left-[-21vw] lg:w-[40vw] md:w-[50vw] md:top-[-10vw] md:left-[-23vw] rotate-[-15deg] transform translate-x-[30px] translate-y-[30px]"
          src="/flor.svg"
          alt="Flor inferior"
        />
        <h2 className="titleParty text-lg md:text-3xl lg:text-3xl font-bold mb-8 " >
         SOBRE LA FIESTA
        </h2>
        <h3 className={`font-bold text-xs md:text-lg lg:text-xl italic mb-8 `} >
          ¡Algunos detalles a tener en cuenta!
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Sugerir Canción */}
          <div className='p-4'>
             <div className='flex justify-center'>
              <img className="w-1/3" src="/musica.svg" alt="party" />
            </div>
            <h3 className={`text-2xl font-bold  mb-4 `}>
              MÚSICA
            </h3>
            <div className='w-1/2 mx-auto text-center flex justify-center'>
              <p className={`text-sm sm:text-lg   mb-4 `}>
                ¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?
              </p>
            </div>
            <button
              onClick={handleSongSuggestionClick}
              className="py-2 px-4 bg-primary text-white font-bold rounded-full shadow-md hover:bg-primary transition-colors"
              >
              SUGERIR CANCIÓN
            </button>
          </div>

          {/* Dress Code */}
          <div className=' p-4'>
            <div className='flex justify-center'>
              <img className="w-1/3" src="/vestimenta.svg" alt="party" />
            </div>
            <h3 className={`text-2xl font-bold  mb-4 `}>
              VESTIMENTA
            </h3>
            <p className={`text-sm sm:text-lg   pt-4 `}>
              Formal - Elegante
            </p>
            <button
            className="mt-6 py-2 px-4 bg-primary text-white font-bold rounded-full shadow-md hover:bg-primary transition-colors"
            onClick={() => router.push('/outfits')}
            >
              INSPIRATE
            </button>
          </div>
        </div>
      </div>
  );
};

export default Party;
