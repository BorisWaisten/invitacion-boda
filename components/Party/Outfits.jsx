'use client';

import image1 from '../../app/public/vestimenta/1.jpg';
import image2 from '../../app/public/vestimenta/2.jpg';
import image3 from '../../app/public/vestimenta/3.jpg';
import image4 from '../../app/public/vestimenta/4.jpg';
import image5 from '../../app/public/vestimenta/5.jpg';
import image6 from '../../app/public/vestimenta/6.jpg';
import image7 from '../../app/public/vestimenta/7.jpg';
import image8 from '../../app/public/vestimenta/8.jpg';
import image9 from '../../app/public/vestimenta/9.jpg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const images = [image1, image5, image3, image7, image2, image8, image6, image9, image4];

export default function Outfits() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      {/* Título principal con botón de retorno */}
      <div className="relative text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Catálogo de Vestimenta
        </h1>
        <button
          onClick={() => router.push('/#party')}
          className="inline-flex items-center bg-primary text-white py-2 px-4 rounded-full shadow-lg hover:bg-secondary transition-colors mx-auto sm:absolute sm:left-0 sm:top-1/2 sm:transform sm:-translate-y-1/2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 transition-transform duration-300 ease-in-out hover:-translate-x-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <span>Volver</span>
        </button>
      </div>

      {/* Galería de imágenes responsive */}
      <div className="container mx-auto grid grid-cols-3  gap-8">
        {images.map((image, index) => (
          <div key={index} className="relative h-[50vw] md:h-[60vw] overflow-hidden group">
            <Image
              src={image}
              alt={`Vestimenta ${index + 1}`}
              fill
              quality={100}
              className="transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-lg"
              style={{ objectFit: 'cover' }}
            />
            <h3 className="text-center mt-4 font-semibold">Outfit {index + 1}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
