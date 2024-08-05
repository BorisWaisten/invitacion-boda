'use client';

import React from 'react';
import './components.css';
import ScheduleEvent from './ScheduleEvent';

const Invitation = () => {
  return (
    <section className="mt-5 py-8">
      <div className="container text-center">
        <div className="grid grid-cols-1 sm:m-4 m-2 md:grid-cols-2 gap-8">
          <div className='card  relative'>
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-8 `}>Ceremonia</h2>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Día</p>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Fecha: </p>
            <ScheduleEvent />
            <p className={`text-3xl font-bold text-gray-600 mb-4 mt-8 `} style={{ fontFamily: 'Asmelina Harley' }}>Lugar</p>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Lugar: </p>
            <button className='py-2 px-4 rounded-ss-2xl rounded-ee-2xl bg-primary text-text font-semibold shadow-md' onClick={() => window.open( "/asistency" )} >
              Confirmar Asistencia
            </button>
            <p className={`text-3xl font-bold text-gray-600 mb-4 mt-8 `} style={{ fontFamily: 'Asmelina Harley' }}>Dirección</p>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Dirección: </p>
            <button className='py-2 px-4 rounded-ss-2xl rounded-ee-2xl bg-primary text-text font-semibold shadow-md' onClick={() => window.alert( "enlace a google maps" )} >
              Cómo Llegar?
            </button>
          </div>
          <div className=' card relative'>
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-8 `}>Fiesta</h2>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Día</p>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Fecha:</p>
            <ScheduleEvent />
            <p className={`text-3xl font-bold text-gray-600 mb-4 mt-8 `} style={{ fontFamily: 'Asmelina Harley' }}>Lugar</p>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Lugar:</p>
            <button className='py-2 px-4 rounded-ss-2xl rounded-ee-2xl bg-primary text-text font-semibold shadow-md' onClick={() => window.open( "/asistency" )} >
              Confirmar Asistencia
            </button>
            <p className={`text-3xl font-bold text-gray-600 mb-4 mt-8 `} style={{ fontFamily: 'Asmelina Harley' }}>Dirección</p>
            <p className={`text-3xl font-bold text-gray-600 mb-4 `} style={{ fontFamily: 'Asmelina Harley' }} >
              Dirección: </p>
            <button className='py-2 px-4 rounded-ss-2xl rounded-ee-2xl bg-primary text-text font-semibold shadow-md' onClick={() => window.alert( "enlace a google maps" )} >
              Cómo Llegar?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
