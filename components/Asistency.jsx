'use client'
import React, { useState } from 'react';
import { dancingScript, playfairDisplay } from '../public/fonts'; // Ajusta la ruta según tu estructura de proyecto
import './components.css';

const Asistency = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    parejaNombre: '',
    parejaApellido: '',
    celiaco: false,
    diabetes: false,
    hipertension: false,
    hipotension: false,
    vegano: false,
    vegetariano: false,
    otraInfo: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyxsn5x1UD6Z5PgHSsKWB3lhLpkmkuVtAWT3caZp51da17YLEV9jVGAmSPtY_hJKkoE/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('¡Información enviada con éxito!');
        setFormData({
          nombre: '',
          apellido: '',
          parejaNombre: '',
          parejaApellido: '',
          celiaco: false,
          diabetes: false,
          hipertension: false,
          hipotension: false,
          vegano: false,
          vegetariano: false,
          otraInfo: '',
        });
        window.location('/');
      } else {
        alert('Hubo un error al enviar la información.');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Error de red.');
    }
  };

  return (
    <section id="asistency" className="bg-terciary min-h-screen flex items-center justify-center">
      <div className= {`container bg-white rounded-xl shadow-2xl p-8 m-10 mx-4 max-w-xl ${dancingScript.className}`} >
        <h2 className= {`text-3xl md:text-4xl font-bold mb-8 text-center `} >Confirmar Asistencia</h2>
        <form onSubmit={handleSubmit} className= {`grid grid-cols-1 gap-4 ${playfairDisplay.className}`} >
          <div className="mb-4">
            <input
              type="text"
              id='nombre'
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2  rounded-lg shadow-sm "
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id='apellido'
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="w-full px-4 py-2  rounded-lg shadow-sm "
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id='parejaNombre'
              name="parejaNombre"
              placeholder="Nombre de tu Pareja (Opcional)"
              value={formData.parejaNombre}
              onChange={handleChange}
              className="w-full px-4 py-2  rounded-lg shadow-sm "
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id='parejaApellido'
              name="parejaApellido"
              placeholder="Apellido de tu Pareja (Opcional)"
              value={formData.parejaApellido}
              onChange={handleChange}
              className="w-full px-4 py-2  rounded-lg shadow-sm "
            />
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className="mb-4">
              <label className="block text-left">
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
            <div className="mb-4">
              <label className="block text-left">
                <input
                  type="checkbox"
                
                  name="hipertension"
                  checked={formData.hipertension}
                  onChange={handleChange}
                  className="mr-2"
                />
                Hipertensión
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-left">
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
            <div className="mb-4">
              <label className="block text-left">
                <input
                  type="checkbox"
                  
                  name="hipotension"
                  checked={formData.hipotension}
                  onChange={handleChange}
                  className="mr-2"
                />
                Hipotensión
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-left">
                <input
                  type="checkbox"
                  
                  name="vegano"
                  checked={formData.vegano}
                  onChange={handleChange}
                  className="mr-2"
                />
                Vegano
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-left">
                <input
                  type="checkbox"
                  
                  name="vegetariano"
                  checked={formData.vegetariano}
                  onChange={handleChange}
                  className="mr-2"
                />
                Vegetariano
              </label>
            </div>
          </div>
          <div className="mb-4">
            <textarea
              name="otraInfo"
              id='otraInfo'
              placeholder="Otra información relevante"
              value={formData.otraInfo}
              onChange={handleChange}
              className="w-full px-4 py-2  rounded-lg shadow-sm "
              rows="4"
            />
          </div>
        </form>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold font-sans bg-primary hover:bg-secondary hover:text-secondary rounded-lg shadow-md hover:bg-blue-600 transition-colors"
            >
              Enviar
            </button>
          </div>
      </div>
    </section>
  );
};

export default Asistency;
