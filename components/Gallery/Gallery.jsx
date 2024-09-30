'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import w1 from '../../app/public/martu1.jpg';
import w2 from '../../app/public/martu2.jpg';
import w3 from '../../app/public/martu3.jpg';
import w4 from '../../app/public/martu4.jpg';
import w5 from '../../app/public/martu5.jpg';
import w6 from '../../app/public/martu6.jpg';
import w7 from '../../app/public/martu7.jpg';
import w8 from '../../app/public/martu8.png';

import '../components.css';
import iconSvg from '../../public/iconCamara.svg';
import { cinzelDecorative } from '@/public/fonts';

const images = [w1, w2, w3, w4, w5, w6, w7, w8];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);

    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - itemsPerPage : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - itemsPerPage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
    handleTouchMove();
  };

  const handleTouchMove = () => {
    if (touchStartX > touchEndX + 50) {
      // Swipe left
      nextSlide();
    } else if (touchStartX < touchEndX - 50) {
      // Swipe right
      prevSlide();
    }
  };

  return (
    <section className="bg-secondary py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center justify-center text-center">
          <Image src={iconSvg} alt="Wedding" className="w-20 h-20 mx-auto" />
          <h2 className={`${cinzelDecorative.className} text-3xl md:text-4xl text-white mb-8`}>
            NOSOTROS
          </h2>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative">
            <div
              className="whitespace-nowrap transition-transform duration-500"
              style={{ transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`inline-block p-4 ${itemsPerPage === 3 ? 'w-1/3' : 'w-full'}`}
                >
                  <Image
                    src={src}
                    alt={`Wedding ${index + 1}`}
                    className="rounded-lg object-cover w-full"
                    layout="responsive"
                    width={800}
                    height={600}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-secondary text-white rounded-full focus:outline-none shadow-lg hover:bg-primary transition duration-200 ease-in-out flex items-center justify-center w-8 h-8 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 4.5L8.25 12l7.5 7.5"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-secondary text-white rounded-full focus:outline-none shadow-lg hover:bg-primary transition duration-200 ease-in-out flex items-center justify-center w-8 h-8 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          {Array(Math.ceil(images.length / itemsPerPage)).fill().map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
              className={`w-3 h-3 rounded-full ${Math.floor(currentIndex / itemsPerPage) === index ? 'bg-white' : 'bg-primary'}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
