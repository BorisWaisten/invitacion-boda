'use client';
import React from 'react';
import './components.css';
import { useRouter } from 'next/navigation';
// import Button from '../ui/buttons'; // Importa el nuevo componente de botón

const Party = () => {
  const router = useRouter();

  const handleSongSuggestionClick = () => {
    // Redirige a la página de sugerencia de canciones
    router.push('/song');
  };

  return (
    <section className="mt-5 py-8">
      <div className="container text-center">
        <h2 className={`text-3xl font-bold mb-8 `}>
          FIESTA
        </h2>
        <h3 className={`font-bold italic mb-8 `} >
          !Algunos detalles a tener en cuenta¡
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sugerir Canción */}
          <div className='p-4'>
             <div className='flex justify-center'>
              <img className="w-1/3" src="/musica.svg" alt="party" />
            </div>
            <h3 className={`text-2xl font-bold  mb-4 `}>
              MÚSICA
            </h3>
            <p className={`text-sm sm:text-lg   mb-4 `}>
              ¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?
            </p>
            <button
              onClick={handleSongSuggestionClick}
              className="py-2 px-4 bg-primary text-white font-bold rounded-full shadow-md hover:bg-teal-600 transition-colors"
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
            className="mt-6 py-2 px-4 bg-primary text-white font-bold rounded-full shadow-md hover:bg-teal-600 transition-colors"
            >
              INSPIRATE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Party;
