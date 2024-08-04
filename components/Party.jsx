'use client';
import React from 'react';
import { dancingScript, montserrat } from '../public/fonts'; // Ajusta la ruta según tu estructura de proyecto
import './components.css';
import { useRouter } from 'next/navigation';
import Button from '../ui/buttons'; // Importa el nuevo componente de botón

const Party = () => {
  const router = useRouter();

  const handleSongSuggestionClick = () => {
    // Redirige a la página de sugerencia de canciones
    router.push('/song');
  };

  return (
    <section className="mt-5 py-8">
      <div className="container text-center">
        <h2 className={`text-4xl font-bold text-gray-800 mb-8 ${montserrat.className}`}>
          Fiesta
        </h2>
        <p className={`text-2xl font-bold text-gray-600 mb-4 ${dancingScript.className}`}>
          ¡Celebremos juntos en esta noche especial!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sugerir Canción */}
          <div className='wedding-border bg-secondary relative p-4'>
            <h3 className={`text-3xl font-bold text-gray-800 mb-4 ${montserrat.className}`}>
              Sugerir Canción
            </h3>
            <p className={`text-xl text-gray-600  mb-4 ${montserrat.className}`}>
              ¿Qué canción no debería faltar en el playlist? Haz clic en el botón para sugerir.
            </p>
            <Button onClick={handleSongSuggestionClick} className={montserrat.className}>
              Sugerir Canciones
            </Button>
          </div>

          {/* Dress Code */}
          <div className='wedding-border bg-secondary relative p-4'>
            <h3 className={`text-3xl font-bold text-gray-800 mb-4 ${montserrat.className}`}>
              Dress Code
            </h3>
            <p className={`text-xl text-gray-600 ${montserrat.className}`}>
              El código de vestimenta es formal. ¡Vístete para impresionar!
            </p>
          </div>

          {/* Horario de la Fiesta */}
          <div className='wedding-border bg-secondary relative p-4'>
            <h3 className={`text-3xl font-bold text-gray-800 mb-4 ${montserrat.className}`}>
              Horario
            </h3>
            <p className={`text-xl text-gray-600 ${montserrat.className}`}>
              La fiesta comienza a las 7:00 PM y termina a las 2:00 AM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Party;
