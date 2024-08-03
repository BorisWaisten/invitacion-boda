import React from 'react';
import { dancingScript, playfairDisplay } from '../public/fonts'; // Ajusta la ruta según tu estructura de proyecto
import './components.css';
import ScheduleEvent from './ScheduleEvent';

const Invitation = () => {
  return (
    <section className="bg-terciary mt-5 py-8">
      <div className="container text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='wedding-border relative'>
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-8 ${playfairDisplay.className}`}>Ceremonia</h2>
            <p className={`text-2xl font-bold text-gray-600 mb-4 ${dancingScript.className}`}>Día</p>
            <p className={`text-xl text-gray-600 mb-4 ${playfairDisplay.className}`}>Fecha: [Fecha de la Boda]</p>
            <ScheduleEvent />
            <p className={`text-2xl font-bold text-gray-600 mb-4 mt-8 ${dancingScript.className}`}>Lugar</p>
            <p className={`text-xl text-gray-600 mb-4 ${playfairDisplay.className}`}>Lugar: [Nombre del Lugar]</p>
            <button className={`py-2 px-4 w-1/3 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg ${playfairDisplay.className}`}>
              <a href="/asistency" target="_blank" rel="noopener noreferrer">Confirmar Asistencia</a>
            </button>
            <p className={`text-2xl font-bold text-gray-600 mb-4 mt-8 ${dancingScript.className}`}>Dirección</p>
            <p className={`text-xl text-gray-600 mb-4 ${playfairDisplay.className}`}>Dirección: [Dirección del Lugar]</p>
            <button className={`py-2 px-4 w-1/3 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg ${playfairDisplay.className}`}>
              <a href="[Link de Google Maps]" target="_blank" rel="noopener noreferrer">Cómo Llegar?</a>
            </button>
          </div>
          <div className='wedding-border relative'>
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-8 ${playfairDisplay.className}`}>Fiesta</h2>
            <p className={`text-2xl font-bold text-gray-600 mb-4 ${dancingScript.className}`}>Día</p>
            <p className={`text-xl text-gray-600 mb-4 ${playfairDisplay.className}`}>Fecha: [Fecha de la Boda]</p>
            <ScheduleEvent />
            <p className={`text-2xl font-bold text-gray-600 mb-4 mt-8 ${dancingScript.className}`}>Lugar</p>
            <p className={`text-xl text-gray-600 mb-4 ${playfairDisplay.className}`}>Lugar: [Nombre del Lugar]</p>
            <button className={`py-2 px-4 w-1/3 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg ${playfairDisplay.className}`}>
              <a href="/asistency" target="_blank" rel="noopener noreferrer">Confirmar Asistencia</a>
            </button>
            <p className={`text-2xl font-bold text-gray-600 mb-4 mt-8 ${dancingScript.className}`}>Dirección</p>
            <p className={`text-xl text-gray-600 mb-4 ${playfairDisplay.className}`}>Dirección: [Dirección del Lugar]</p>
            <button className={`py-2 px-4 w-1/3 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg ${playfairDisplay.className}`}>
              <a href="[Link de Google Maps]" target="_blank" rel="noopener noreferrer">Cómo Llegar?</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
