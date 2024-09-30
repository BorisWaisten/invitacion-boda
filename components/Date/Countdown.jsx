'use client'
import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const calculateTimeLeft = () => {
    const weddingDate = new Date('2025-03-22T00:00:00'); // Ajusta la fecha y hora de la boda
    const now = new Date();
    const difference = weddingDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        DIAS: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(3, '0'),
        HS: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        MIN: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
      };
    } else {
      // Si el tiempo ha llegado, muestra ceros en todas las unidades
      timeLeft = {
        DIAS: '000',
        HS: '00',
        MIN: '00',
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null; // O puedes retornar un loader o un texto estático
  }

  const isWeddingDay = timeLeft.DIAS === '000' && timeLeft.HS === '00' && timeLeft.MIN === '00';

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="m-2 w-16 lg:w-[10vw] md:w-[12vw] p-4 font-bold bg-gray-600 rounded-[0.5rem] md:rounded-[1rem] shadow-lg">
        <span className={`block text-sm sm:text-3xl md:text-4xl text-white`}>{timeLeft[interval]}</span>
        <span className={`block text-xs sm:text-xl md:text-2xl text-white`}>{interval}</span>
      </div>
    );
  });

  return (
        <div className="flex flex-wrap justify-center items-center">
          {isWeddingDay ? (
            <span className={`text-2xl text-gray-700`}>¡Es el día de la boda!</span>
          ) : (
            timerComponents
          )}
        </div>
  );
}
