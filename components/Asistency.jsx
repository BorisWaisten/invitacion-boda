'use client'
import React, { useState } from 'react';

const Asistency = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    parejaNombre: '',
    parejaApellido: '',
    celiaco: false,
    diabetes: false,
    otraInfo: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes enviar los datos del formulario al backend
  };

  const handleGoogleCalendar = () => {
    const event = {
      summary: 'Boda de [Nombre de la Pareja]',
      description: 'Te esperamos para celebrar nuestra boda!',
      start: {
        dateTime: '2024-12-31T17:00:00',
        timeZone: 'America/Argentina/Buenos_Aires',
      },
      end: {
        dateTime: '2024-12-31T23:00:00',
        timeZone: 'America/Argentina/Buenos_Aires',
      },
      location: 'Ubicación del evento',
    };

    const url = `https://calendar.google.com/calendar/r/eventedit?text=${event.summary}&details=${event.description}&dates=${event.start.dateTime.replace(
      /-|:|\.\d+/g,
      ''
    )}/${event.end.dateTime.replace(/-|:|\.\d+/g, '')}&location=${event.location}&ctz=${event.start.timeZone}`;

    window.open(url, '_blank');
  };

  return (
    <section className="bg-gray-100 mt-10  py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Confirmar Asistencia</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="parejaNombre"
              placeholder="Nombre de tu Pareja (Opcional)"
              value={formData.parejaNombre}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="parejaApellido"
              placeholder="Apellido de tu Pareja (Opcional)"
              value={formData.parejaApellido}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 col-span-1 md:col-span-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="celiaco"
                checked={formData.celiaco}
                onChange={handleChange}
                className="mr-2"
              />
              Celiaco
            </label>
          </div>
          <div className="mb-4 col-span-1 md:col-span-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="diabetes"
                checked={formData.diabetes}
                onChange={handleChange}
                className="mr-2"
              />
              Diabetes
            </label>
          </div>
          <div className="mb-4 col-span-1 md:col-span-2">
            <textarea
              name="otraInfo"
              placeholder="Otra información relevante"
              value={formData.otraInfo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full col-span-1 md:col-span-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
          >
            Confirmar Asistencia
          </button>
        </form>
        <div className="mt-10">
          <button
            onClick={handleGoogleCalendar}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors"
          >
            Agendar Evento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Asistency;
