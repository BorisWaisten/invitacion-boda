import React from 'react';
import Image from 'next/image';
import w1 from '@/public/w1.jpeg';
import w3 from '@/public/w3.jpeg';
import w4 from '@/public/w4.jpeg';
import w5 from '@/public/W5.jpeg';

const Gallery = () => {
  const images = [w1, w5, w3, w4];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Estas son nuestras fotos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
              <Image
                src={src}
                alt={`Wedding ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
