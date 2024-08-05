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
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    } else {
      // Si el tiempo ha llegado, muestra ceros en todas las unidades
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
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

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="m-2 p-4 bg-gray-800 rounded-[1.5rem] sm:rounded-[2rem] shadow-lg">
        <span className={`block text-sm sm:text-3xl md:text-4xl text-white`}>{timeLeft[interval]}</span>
        <span className={`block text-sm sm:text-3xl md:text-4xl text-white`}>{interval}</span>
      </div>
    );
  });

  return (
    <section className="bg-secondary py-8">
      <div className="container mx-auto text-center">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-800`}>Falta</h2>
        <div className="flex flex-wrap justify-center items-center space-x-4">
          {timerComponents.length ? timerComponents : <span className={`text-2xl text-gray-700`}>¡Es el día de la boda!</span>}
        </div>
      </div>
    </section>
  );
}
