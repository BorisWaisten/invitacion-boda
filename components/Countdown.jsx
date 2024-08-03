'use client'
import React, { useState, useEffect } from 'react';
import { dancingScript, playfairDisplay, montserrat } from '../public/fonts'; // Ajusta la ruta según tu estructura de proyecto

export default function Countdown() {
  const calculateTimeLeft = () => {
    const weddingDate = new Date('2025-12-21T17:00:00'); // Ajusta la fecha y hora de la boda
    const now = new Date();
    const difference = weddingDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});
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
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="m-2 p-4 bg-white bg-opacity-80 rounded shadow-lg">
        <span className={`block text-4xl ${playfairDisplay.className} text-gray-800`}>{timeLeft[interval]}</span>
        <span className={`block text-xl ${montserrat.className} text-gray-600`}>{interval}</span>
      </div>
    );
  });

  return (
    <section className="bg-terciary py-12">
      <div className="container mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${playfairDisplay.className} text-gray-800`}>Falta</h2>
        <div className="flex flex-wrap justify-center items-center space-x-4">
          {timerComponents.length ? timerComponents : <span className={`text-2xl ${montserrat.className} text-gray-700`}>¡Es el día de la boda!</span>}
        </div>
      </div>
    </section>
  );
}
