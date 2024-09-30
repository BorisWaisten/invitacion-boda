'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../components.css';
import axios from 'axios';

export default function SongComponentPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    songName: '',
    songAuthor: '',
    songLink: '',
  });
  const [message, setMessage] = useState({
    contenido: '',
    fallido: false,   
  });  // Estado para mostrar mensajes de éxito o error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      nombre: formData.songName,
      autor: formData.songAuthor,
      link: formData.songLink,
    };

    console.log(dataToSend);

    try {
      await axios.post('https://sheet.best/api/sheets/b9112d98-87eb-45a6-bb41-8b42839f2dc9', dataToSend);
      setMessage({
        contenido: 'Canción guardada correctamente',
        fallido: false,});
      setFormData({
        songName: '',
        songAuthor: '',
        songLink: '',
      });

      // Añade un pequeño retraso antes de redirigir
      setTimeout(() => {
        setMessage({
          contenido: '',
        })  // Limpia el mensaje después de un tiempo
        router.push('/#party');
      }, 2000);
    } catch (error) {
      console.error('Error al enviar la sugerencia:', error);
      setMessage({
        contenido: 'Error al enviar la sugerencia',
        fallido: true,
      });
      setTimeout(() => {
        setMessage({
          contenido: '',
        })
        setFormData({
          songName: '',
          songAuthor: '',
          songLink: '',
        })
      }, 2000);
    }
  };

  return (
    <main className="min-h-screen m-0 bg-secondary flex flex-col items-center justify-center">
      <section className="m-10 w-full sm:w-auto bg-terciary rounded-xl shadow-2xl p-10">
        <h2 className="text-4xl font-bold text-center mb-8">
          Sugerir Canción
        </h2>


        <form onSubmit={handleSubmit} className="w-full mx-auto">
          <div className="mb-4">
            <input
              id="songName"
              type="text"
              name="songName"
              value={formData.songName}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              placeholder="Escribe el nombre de la canción"
              required
            />
          </div>
          <div className="mb-4">
            <input
              id="songAuthor"
              name="songAuthor"
              value={formData.songAuthor}
              onChange={handleChange}
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="Escribe el nombre del autor"
              required
            />
          </div>
          <div className="mb-4">
            <input
              id="songLink"
              name="songLink"
              value={formData.songLink}
              onChange={handleChange}
              type="url"
              className="w-full p-2 border rounded-lg"
              placeholder="Link de la canción"
              />
          </div>
          <div className="grid grid-cols-2 gap-4 flex justify-center">
            <button
              type="submit"
              className="p-2 font-sans font-bold rounded-lg shadow-md"
              >
              Enviar Sugerencia
            </button>
            <button
              type="button"
              className="font-bold font-sans rounded-lg shadow-md"
              onClick={() => router.push('/#party')}
              >
              Volver
            </button>
          </div>
        </form>
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
