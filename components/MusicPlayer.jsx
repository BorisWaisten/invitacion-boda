'use client';

import { useState, useRef } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const iframeRef = useRef(null);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const iframeWindow = iframeRef.current.contentWindow;
    if (isPlaying) {
      // Pausar la música de YouTube
      iframeWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');

      // Reiniciar y pausar el video
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    } else {
      // Reanudar la música de YouTube
      iframeWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

      // Reproducir el video
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-5 right-4 z-50 flex items-center space-x-2">
      {/* Iframe de YouTube oculto */}
      <iframe
        ref={iframeRef}
        width="0"
        height="0"
        src="https://www.youtube.com/embed/j09cI6t18NA?enablejsapi=1&autoplay=1&loop=1&playlist=j09cI6t18NA"
        style={{ border: '0', display: 'none' }}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      {/* Botón para pausar/reanudar con el video animado */}
      <button
        onClick={togglePlay}
        className="relative p-2 rounded-full transition-all duration-300"
      >
        <video 
          ref={videoRef} 
          src="/reproduccion.mp4" 
          className='lg:w-10 lg:h-10 md:w-8 md:h-8 w-4 h-4 rounded-full' 
          loop 
          muted 
          onEnded={() => setIsPlaying(false)} 
        />
      </button>
    </div>
  );
};

export default MusicPlayer;
