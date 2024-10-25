'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const Asistency = () => {
  const router = useRouter();

  const handleRedirect = () => {
    // Aquí puedes reemplazar la URL con el enlace de tu formulario de Google
    window.open('https://forms.gle/gV35AzsdTWtSrrZMA', '_blank');
  };

  return (
    <section id="asistency" className="bg-secondary min-h-screen flex items-center justify-center">
      <div className="container bg-terciary rounded-xl shadow-2xl p-8 m-10 mx-4 w-full sm:w-auto">
        <div className='grid grid-cols-2 gap-4 flex justify-center'>
          <button
            type="button"
            className={`p-2 font-sans font-bold rounded-lg shadow-md`}
            onClick={handleRedirect}
          >
            Confirmar Asistencia
          </button>
          <button
            type="button"
            className="font-bold font-sans rounded-lg shadow-md"
            onClick={() => router.push('/#asistency')}
          >
            Volver
          </button>
        </div>
      </div>
    </section>
  );
};

export default Asistency;
