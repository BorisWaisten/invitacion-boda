'use client';

import React from 'react';
import '../components.css';

const Invitation = () => {
  const informacion = [
    {
      title: 'CEREMONIA',
      icon:'/matrimonio.gif',
      day: 'Sábado 22 - 18 hs',
      place: 'Parroquia Sagrado Corazón de Jesús',
      location: 'Presbitero Kaul, Urdinarrain, Entre Ríos',
      address: 'https://www.google.com/maps/place/Parroquia+Sagrado+Coraz%C3%B3n+de+Jes%C3%BAs+Urdinarrain/@-32.6904213,-58.8906376,213m/data=!3m1!1e3!4m6!3m5!1s0x95b04491a8195c25:0x5555e6cb362bf12d!8m2!3d-32.6904925!4d-58.8891578!16s%2Fg%2F11fxdnf9pq?entry=ttu',
    },
    {
      title: 'FIESTA',
      icon: '/fiesta.gif',
      day: 'Sábado 22 - 19 hs',
      place: 'Salón "La Lidia"',
      location: 'Dr. Zeroli y R20, Urdinarrain, Entre Ríos',
      address: 'https://www.google.com/maps/place/Salon+La+Lidia/@-32.6804494,-58.8802181,601m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95b0448ad599265b:0xc504e79d26eda2aa!8m2!3d-32.6804539!4d-58.8776432!16s%2Fg%2F11c5sm_lgc?entry=ttu',
    },
  ];

  return (
    <section className="mt-5 py-8">
  <div className="container text-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:m-4 m-2">
      {informacion.map((evento, index) => (
        <div key={index} className="card p-6">
          <img src={evento.icon} alt={evento.title} className="w-1/4 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {evento.title}
          </h2>
          <p className="text-lg font-semibold italic mb-2 ">{evento.day}</p>
          <div className='flex justify-center  w-3/4 lg:w-1/2  mx-auto'>
            <p className="text-lg  font-semibold italic mb-2 ">
              {evento.place}
            </p>
          </div>
          <div className='w-3/4 lg:w-1/2 mx-auto flex  justify-center'>
            <p className="text-base italic mb-4">{evento.location}</p>
          </div>
          <button
            className="py-2 px-4 bg-primary text-white rounded-full shadow-md hover:bg-primary transition-colors"
            onClick={() => window.open(evento.address)}
          >
            Cómo Llegar
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Invitation;