'use client';

import { useState, useRef, useEffect } from 'react';
import './components.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [cont,setCont] = useState(0);
  const iframeRef = useRef(null);

   // Asegúrate de que el video esté en pausa al montar el componente
   useEffect(() => {
    const iframeWindow = iframeRef.current?.contentWindow;
    if (iframeWindow) {
      setCont(0); // Reiniciar el contador al montar el componente
      iframeWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  }, []);

  const togglePlay = () => {
    const iframeWindow = iframeRef.current?.contentWindow;

    // Si es el primer clic (cont === 0), reproducir el video
    if (cont === 0) {
      iframeWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      setIsPlaying(true); // Establecer como "reproduciendo"
    } else {
      // Si el contador es mayor que 0, alternar entre reproducir y pausar
      if (isPlaying) {
        iframeWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      } else {
        iframeWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
      setIsPlaying(!isPlaying); // Alternar el estado de isPlaying
    }

    // Incrementar el contador en cada clic
    setCont(prev => prev + 1);
  };

  return (
    <div className="fixed top-5 right-4 z-50 flex items-center space-x-2">
      {/* Iframe de YouTube completamente oculto */}
      <iframe
        ref={iframeRef}
        width="0"
        height="0"
        src="https://www.youtube.com/embed/j09cI6t18NA?enablejsapi=1&autoplay=0&loop=1&playlist=j09cI6t18NA"
        style={{ position: 'absolute', width: '0px', height: '0px', border: 'none', overflow: 'hidden' }}
        allow="autoplay; encrypted-media; fullscreen" // Ajuste importante para móviles
        allowFullScreen
        tabIndex="-1"
        aria-hidden="true"
      ></iframe>

      {/* Botón con SVG animado */}
      <button
        onClick={togglePlay}
        className={`relative p-1 bg-primary rounded-full transition-all duration-300 ${isPlaying ? 'animate-shadow-expand' : ''}`}
      >
        <img
          src="/reproduccion.svg"
          alt="Botón de música"
          className={`w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 ${isPlaying ? 'animate-jump' : ''}`} // Animación de "saltitos"
        />
      </button>
    </div>
  );
};

export default MusicPlayer;
