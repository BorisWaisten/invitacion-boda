'use client';

import React from 'react';
import { dancingScript, playfairDisplay } from '../public/fonts'; // Ajusta la ruta según tu estructura de proyecto
import { useRouter } from 'next/navigation';
import './components.css';

export default function SongCompontPage (){
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío de la sugerencia de canción
    // Puedes guardar los datos en un estado o enviarlos a un backend si es necesario
    alert('Sugerencia de canción enviada');
    router.push('/',{timeout: 3000});
  };

  return (
 <main className="min-h-screen m-0 bg-terciary flex flex-col items-center justify-center">
    <section className= {` m-10 w-full sm:w-auto  bg-white rounded-xl shadow-2xl  p-10 ${dancingScript.className}`} >
        <h2 className={`text-4xl font-bold text-center mb-8 `}>
          Sugerir Canción
        </h2>
        <form onSubmit={handleSubmit} className= {`w-full mx-auto ${playfairDisplay.className}`} >
          <div className="mb-4">
            <input
              id="songName"
              type="text"
              className={`w-full p-2 border rounded-lg  `}
              placeholder="Escribe el nombre de la canción"
              required
            />
          </div>
          <div className="mb-4">
            <input
              id="songAuthor"
              type="text"
              className={`w-full p-2 border rounded-lg  `}
              placeholder="Escribe el nombre del autor"
              required
            />
          </div>
          <div className="mb-4">
            <input
              id="songLink"
              type="url"
              className={`w-full p-2 border rounded-lg  `}
              placeholder="Link de la canción "
              
            />
          </div>
          <div className='flex justify-center'>

            <button
                type="submit"
                className={`mt-4 py-2 px-4 font-sans bg-primary hover:bg-secondary hover:text-secondary  font-bold rounded-lg  transform duration-300 ease-in-out`}
            >
                Enviar Sugerencia
            </button>
          </div>
        </form>
    </section>
    </main>
  );
};

