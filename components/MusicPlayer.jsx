'use client';

import { useState, useRef } from 'react';
import './components.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const iframeRef = useRef(null);

  const togglePlay = () => {
    const iframeWindow = iframeRef.current.contentWindow;
    if (isPlaying) {
      // Pausar la música de YouTube
      iframeWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    } else {
      // Reanudar la música de YouTube
      iframeWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-5 right-4 z-50 flex items-center space-x-2">
      {/* Iframe de YouTube completamente oculto */}
      <iframe
        ref={iframeRef}
        width="0"
        height="0"
        src="https://www.youtube.com/embed/j09cI6t18NA?enablejsapi=1&autoplay=1&loop=1&playlist=j09cI6t18NA"
        style={{ position: 'absolute', width: '0px', height: '0px', border: 'none', overflow: 'hidden' }}
        allow="autoplay; encrypted-media"
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
          src="/reproduccion.svg" // Asegúrate de que el SVG esté en la carpeta public
          alt="Botón de música"
          className={` w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 ${isPlaying ? 'animate-jump' : ''}`} // Animación de "saltitos"
        />
      </button>
    </div>
  );
};

export default MusicPlayer;
