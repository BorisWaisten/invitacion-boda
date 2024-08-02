'use client';
import React from 'react';
import { dancingScript, playfairDisplay } from '../fonts'; // Ajusta la ruta según tu estructura de proyecto
import { useRouter } from 'next/navigation';

const SongSuggestionPage = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío de la sugerencia de canción
    // Puedes guardar los datos en un estado o enviarlos a un backend si es necesario
    alert('Sugerencia de canción enviada');
    router.push('/',{timeout: 3000});
  };

  return (
    
    <main className="min-h-screen bg-white flex flex-col items-center justify-center ">
    <section className="bg-terciary w-[60vh] rounded-lg shadow-lg text-center p-10">
        <h2 className={`text-4xl font-bold text-gray-800 mb-8 ${playfairDisplay.className}`}>
          Sugerir Canción
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className={`block text-xl font-bold text-gray-600 mb-2 ${dancingScript.className}`} htmlFor="songName">
              Nombre de la Canción
            </label>
            <input
              id="songName"
              type="text"
              className={`w-full p-2 border rounded-lg text-gray-600 ${playfairDisplay.className}`}
              placeholder="Escribe el nombre de la canción"
              required
            />
          </div>
          <div className="mb-4">
            <label className={`block text-xl font-bold text-gray-600 mb-2 ${dancingScript.className}`} htmlFor="songAuthor">
              Autor de la Canción
            </label>
            <input
              id="songAuthor"
              type="text"
              className={`w-full p-2 border rounded-lg text-gray-600 ${playfairDisplay.className}`}
              placeholder="Escribe el nombre del autor"
              required
            />
          </div>
          <div className="mb-4">
            <label className={`block text-xl font-bold text-gray-600 mb-2 ${dancingScript.className}`} htmlFor="songLink">
              Link de la Canción
            </label>
            <input
              id="songLink"
              type="url"
              className={`w-full p-2 border rounded-lg text-gray-600 ${playfairDisplay.className}`}
              placeholder="Pega el link de la canción (YouTube, Spotify, etc.)"
              
            />
          </div>
          <button
            type="submit"
            className={`mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg ${playfairDisplay.className}`}
          >
            Enviar Sugerencia
          </button>
        </form>
    </section>
    </main>
  );
};

export default SongSuggestionPage;
