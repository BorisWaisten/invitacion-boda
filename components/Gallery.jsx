import React from 'react';
import Image from 'next/image';
import w1 from '../app/public/martu2.jpg';
import w3 from '../app/public/martu3.jpg';
import w4 from '../app/public/martu4.jpg';
import w5 from '../app/public/martu5.jpg';
import './components.css';

const Gallery = () => {
  const images = [w1, w5, w3, w4];

  return (
    <section className="bg-secondary py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Estas son nuestras fotos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center overflow-hidden rounded-lg transition-transform transform hover:scale-105 max-w-full"
            >
              <Image
                src={src}
                alt={`Wedding ${index + 1}`}
                style={{ objectFit: 'cover' }}
                className="rounded-lg object-cover w-full h-full"
                layout="responsive"
                width={400}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
