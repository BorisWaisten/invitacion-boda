'use client';

import { useState, useRef } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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

      {/* Botón para pausar/reanudar con el video animado */}
      <button
        onClick={togglePlay}
        className="relative p-2 rounded-full transition-all duration-300"
      >
        <video 
          ref={videoRef} 
          src="/reproduccion.mp4" 
          className='w-10 h-10 rounded-full' 
          loop 
          muted 
          onEnded={() => setIsPlaying(false)} 
        />
      </button>
    </div>
  );
};

export default MusicPlayer;
