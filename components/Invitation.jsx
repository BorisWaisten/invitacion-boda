'use client';

import React from 'react';
import './components.css';
import ScheduleEvent from './ScheduleEvent';
import { montserratLight } from '@/public/fonts';

const Invitation = () => {
  const informacion = [
    {
      title: 'Ceremonia',
      day: '22/03/2025',
      time: '12:00',
      place: 'Sagrado Corazón de Jesús',
      location: 'Sagrado Corazón de Jesús, Urdinarrain, Argentina',
      address: 'https://www.google.com/maps/place/Parroquia+Sagrado+Coraz%C3%B3n+de+Jes%C3%BAs+Urdinarrain/@-32.6904213,-58.8906376,213m/data=!3m1!1e3!4m6!3m5!1s0x95b04491a8195c25:0x5555e6cb362bf12d!8m2!3d-32.6904925!4d-58.8891578!16s%2Fg%2F11fxdnf9pq?entry=ttu',
      description: '¡Ven a celebrar con nosotros!',
      startDate: new Date('2025-03-22T12:00:00'), // Fecha y hora de inicio del evento
      endDate: new Date('2025-03-22T13:00:00'), // Fecha y hora de finalización del evento
    },
    {
      title: 'Fiesta',
      day: '22/03/2025',
      time: '15:00',
      place: 'Salón La Lidia',
      location: 'Salón La Lidia, Urdinarrain, Argentina',
      address: 'https://www.google.com/maps/place/Salon+La+Lidia/@-32.6804494,-58.8802181,601m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95b0448ad599265b:0xc504e79d26eda2aa!8m2!3d-32.6804539!4d-58.8776432!16s%2Fg%2F11c5sm_lgc?entry=ttu',
      description: '¡Únete a nuestra fiesta de celebración!',
      startDate: new Date('2025-03-22T15:00:00'), // Fecha y hora de inicio del evento
      endDate: new Date('2025-03-22T21:00:00'), // Fecha y hora de finalización del evento
    },
  ];

  return (
    <section className="mt-5 py-8">
      <div className="container text-center">
        <div className="grid grid-cols-1 sm:m-4 m-2 md:grid-cols-2 gap-8">
          {informacion.map((evento, index) => (
            <div key={index} className="card relative">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                {evento.title}
              </h2>
              <p className="text-3xl mb-4 font-serif">Día y Hora</p>
              <p className="text-3xl mb-4 font-serif">
                {evento.day} - {evento.time}
              </p>
              <ScheduleEvent evento={evento} />
              <p className="text-3xl font-serif mb-4 mt-8">Lugar</p>
              <p className="text-3xl font-serif mb-4">{evento.place}</p>
              <button
                className="py-2 px-4 rounded-ss-2xl rounded-ee-2xl bg-primary text-text font-semibold shadow-md"
                onClick={() => window.open(evento.address)}
              >
                Cómo Llegar?
              </button>
            </div>
          ))}
        </div>
        <button
          className="py-2 px-4 mt-8 rounded-ss-2xl rounded-ee-2xl bg-primary text-text font-semibold shadow-md"
          onClick={() => window.open('/asistency')}
        >
          Confirmar Asistencia
        </button>
      </div>
    </section>
  );
};

export default Invitation;
