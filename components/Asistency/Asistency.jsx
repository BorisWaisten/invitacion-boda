'use client'
import React, { useState } from 'react';
import './components.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Asistency = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    parejaNombre: '',
    parejaApellido: '',
    condiciones: '', // Nuevo atributo para almacenar condiciones
    otraInfo: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Combina los valores de los checkboxes en un solo string
    const condiciones = [
      formData.celiaco && 'Celiaco',
      formData.diabetes && 'Diabetes',
      formData.hipertension && 'Hipertensión',
      formData.hipotension && 'Hipotensión',
      formData.vegano && 'Vegano',
      formData.vegetariano && 'Vegetariano',
    ].filter(Boolean).join(', ');

    const dataToSend = {
      ...formData,
      condiciones, // Agrega el string de condiciones al objeto
    };

    try {

      const nameExists = await axios.get(`https://sheet.best/api/sheets/ff06f600-9163-4e3c-b414-87a2a72a7ef5/nombre/${formData.nombre}`);
      const lastNameExists = await axios.get(`https://sheet.best/api/sheets/ff06f600-9163-4e3c-b414-87a2a72a7ef5/apellido/${formData.apellido}`);
    
      console.log(nameExists.data, lastNameExists.data);
      
      if (nameExists.data.length > 0 && lastNameExists.data.length > 0) {
        console.log(nameExists.data, lastNameExists.data);
        alert('El nombre ya existe en la base de datos');
        return;
      }

      await axios.post('https://sheet.best/api/sheets/ff06f600-9163-4e3c-b414-87a2a72a7ef5', dataToSend);
      alert('¡Información enviada con éxito!');
      setFormData({
        nombre: '',
        apellido: '',
        parejaNombre: '',
        parejaApellido: '',
        condiciones: '', // Reinicia el campo de condiciones
        otraInfo: '',
      });
      router.push('/#asistency');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="asistency" className="bg-terciary min-h-screen flex items-center justify-center">
      <div className={`container bg-white rounded-xl shadow-2xl p-8 m-10 mx-4 w-full sm:w-auto`}>
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center`}>Confirmar Asistencia</h2>
        <form onSubmit={handleSubmit} className={`grid grid-cols-1 gap-4`}>
          <div className="mb-4">
            <input
              type="text"
              id='nombre'
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg shadow-sm"
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
              className="w-full px-4 py-2 rounded-lg shadow-sm"
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
              className="w-full px-4 py-2 rounded-lg shadow-sm"
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
              className="w-full px-4 py-2 rounded-lg shadow-sm"
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
              className="w-full px-4 py-2 rounded-lg shadow-sm"
              rows="4"
            />
          </div>
          <div className='grid grid-cols-2 gap-4 flex justify-center'>
            <button
              type="submit"
              className={`p-2 font-sans bg-primary hover:bg-secondary hover:text-secondary font-bold rounded-lg transform duration-300 ease-in-out`}
            >
              Confirmar
            </button>
            <button
              type="button"
              className="font-bold font-sans bg-primary hover:bg-secondary hover:text-secondary rounded-lg shadow-md hover:bg-blue-600 transition-colors"
              onClick={() => router.push('/#asistency')}
            >
              Volver
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Asistency;
