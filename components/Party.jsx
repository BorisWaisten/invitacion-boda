'use client';
import React from 'react';
import { dancingScript, playfairDisplay } from '../public/fonts'; // Ajusta la ruta según tu estructura de proyecto
import './components.css';
import { useRouter } from 'next/navigation';

const Party = () => {
  const router = useRouter();

  const handleSongSuggestionClick = () => {
    // Redirige a la página de sugerencia de canciones
    router.push('/song');
  };

  return (
    <section className="bg-terciary mt-5 py-8">
      <div className="container text-center">
        <h2 className={`text-4xl font-bold text-gray-800 mb-8 ${playfairDisplay.className}`}>
          Fiesta
        </h2>
        <p className={`text-2xl font-bold text-gray-600 mb-4 ${dancingScript.className}`}>
          ¡Celebremos juntos en esta noche especial!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sugerir Canción */}
          <div className='wedding-border relative p-4'>
            <h3 className={`text-3xl font-bold text-gray-800 mb-4 ${playfairDisplay.className}`}>
              Sugerir Canción
            </h3>
            <p className={`text-xl text-gray-600 mb-4 ${playfairDisplay.className}`}>
              ¿Qué canción no debería faltar en el playlist? Haz clic en el botón para sugerir.
            </p>
            <button
              className={`mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg ${playfairDisplay.className}`}
              onClick={handleSongSuggestionClick}
            >
              Sugerir Canciones
            </button>
          </div>

          {/* Dress Code */}
          <div className='wedding-border relative p-4'>
            <h3 className={`text-3xl font-bold text-gray-800 mb-4 ${playfairDisplay.className}`}>
              Dress Code
            </h3>
            <p className={`text-xl text-gray-600 mb-4 ${playfairDisplay.className}`}>
              ¡Vamos a brillar juntos! La vestimenta es de etiqueta formal. Vístete para impresionar en nuestra noche de gala.
            </p>
          </div>

          {/* Información Adicional */}
          <div className='wedding-border relative p-4'>
            <h3 className={`text-3xl font-bold text-gray-800 mb-4 ${playfairDisplay.className}`}>
              Información Adicional
            </h3>
            <p className={`text-xl text-gray-600 mb-4 ${playfairDisplay.className}`}>
              Si tienes alguna pregunta o necesitas información adicional, por favor háznoslo saber.
            </p>
            <textarea
              className={`w-full p-2 border rounded-lg text-gray-600 ${playfairDisplay.className}`}
              placeholder="Escribe aquí tus comentarios..."
              rows="4"
            />
            <button className={`mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg ${playfairDisplay.className}`}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Party;
