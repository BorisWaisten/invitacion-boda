import React from 'react';
import { montserrat } from '../public/fonts'; // Ajusta la ruta según tu estructura de proyecto
import './components.css';
import ScheduleEvent from './ScheduleEvent';
import Button from '../ui/buttons'; // Importa el nuevo componente de botón

const Invitation = () => {
  return (
    <section className="mt-5 py-8">
      <div className="container text-center">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          <div className='wedding-border bg-secondary relative'>
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-8 ${montserrat.className}`}>Ceremonia</h2>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Día</p>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Fecha: </p>
            <ScheduleEvent />
            <p className={`text-3xl font-bold text-gray-600 mb-4 mt-8 `} style={{ fontFamily: 'Asmelina Harley' }}>Lugar</p>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Lugar: </p>
            <Button href="/asistency" className={montserrat.className}>
              Confirmar Asistencia
            </Button>
            <p className={`text-3xl font-bold text-gray-600 mb-4 mt-8 `} style={{ fontFamily: 'Asmelina Harley' }}>Dirección</p>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Dirección: </p>
            <Button href="[Link de Google Maps]" className={montserrat.className}>
              Cómo Llegar?
            </Button>
          </div>
          <div className='wedding-border bg-secondary relative'>
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-8 ${montserrat.className}`}>Fiesta</h2>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Día</p>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Fecha:</p>
            <ScheduleEvent />
            <p className={`text-3xl font-bold text-gray-600 mb-4 mt-8 `} style={{ fontFamily: 'Asmelina Harley' }}>Lugar</p>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Lugar:</p>
            <Button href="/asistency" className={montserrat.className}>
              Confirmar Asistencia
            </Button>
            <p className={`text-3xl font-bold text-gray-600 mb-4 mt-8 `} style={{ fontFamily: 'Asmelina Harley' }}>Dirección</p>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Dirección: </p>
            <Button href="[Link de Google Maps]" className={montserrat.className}>
              Cómo Llegar?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
