'use client';

import { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Estado de reproducción
  const audioRef = useRef(null); // Referencia al elemento de audio

  const togglePlay = () => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      // Pausar la música
      audioElement.pause();
    } else {
      // Reproducir la música
      audioElement.play();
    }

    setIsPlaying(!isPlaying); // Alternar el estado de isPlaying
  };

  useEffect(() => {
    // Asegurarse de que la música esté pausada al montar el componente
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.pause();
    }
  }, []);

  return (
    <div className="fixed top-5 right-4 z-50 flex items-center space-x-2">
      {/* Audio oculto */}
      <audio ref={audioRef} src="/song.mp3" preload="auto"></audio>

      {/* Botón para reproducir/pausar */}
      <button
        onClick={togglePlay}
        className={`relative p-1 bg-primary rounded-full transition-all duration-300 ${isPlaying ? 'animate-shadow-expand' : ''}`}
      >
        <img
          src="/reproduccion.svg"
          alt="Botón de música"
          className={`w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 ${isPlaying ? 'animate-jump' : ''}`}
        />
      </button>
    </div>
  );
};

export default MusicPlayer;
