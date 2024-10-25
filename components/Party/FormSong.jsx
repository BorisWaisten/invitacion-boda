'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../components.css';

export default function SongComponentPage() {
  const router = useRouter();
  const [message, setMessage] = useState({
    contenido: '',
    fallido: false,
  });  // Estado para mostrar mensajes de éxito o error

  // Función para redirigir al formulario de Google
  const handleRedirect = () => {
    // Reemplaza con el enlace de tu formulario de Google
    window.open('https://forms.gle/1uRCatBgjJqeHPen7', '_blank');
  };

  return (
    <main className="min-h-screen m-0 bg-secondary flex flex-col items-center justify-center">
      <section className="m-10 w-full sm:w-auto bg-terciary rounded-xl shadow-2xl p-10">
        <div className="grid grid-cols-2 gap-4 flex justify-center">
          <button
            type="button"
            className="p-2 font-sans font-bold rounded-lg shadow-md"
            onClick={handleRedirect}
          >
            Sugerir Canción
          </button>
          <button
            type="button"
            className="font-bold font-sans rounded-lg shadow-md"
            onClick={() => router.push('/#party')}
          >
            Volver
          </button>
        </div>

        {!message.fallido && (
          <div className="m-4 text-center text-green-600 font-bold">
            {message.contenido}
          </div>
        )}
        {message.fallido && (
          <div className="m-4 text-center text-red-600 font-bold">
            {message.contenido}
          </div>
        )}
      </section>
    </main>
  );
}
