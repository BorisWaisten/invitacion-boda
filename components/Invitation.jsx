import React from 'react';

const Invitation = () => {
  return (
    <section className="bg-terciary rounded-lg  mt-5  py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Detalles de la Boda</h2>
        <p className="text-xl text-gray-600 mb-4">Fecha: [Fecha de la Boda]</p>
        <p className="text-xl text-gray-600 mb-4">Lugar: <a href="[Link de Google Maps]" className="text-blue-500 hover:underline">[Nombre del Lugar]</a></p>
        <p className="text-xl text-gray-600 mb-4">Hora: [Hora de la Boda]</p>
        <button className='py-2 px-4 w-1/3 mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg'>
          <a href="[Link de Google Maps]" >Como Llegar</a>
        </button>
      </div>
    </section>
  );
};

export default Invitation;
