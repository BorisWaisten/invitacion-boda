'use client'

import { useRouter } from "next/navigation";

export default function ConfirmarAsistencia() {
    const router = useRouter();
    return (
      <div className=" text-center py-10">
        <div className="flex justify-center ">
          <img className="w-1/6 mb-5" src="/confirmacion.gif" alt="" />
        </div>
        <h2 className= {` text-secondary  text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 `}>
          CONFIRMACIÓN DE ASISTENCIA
        </h2>
        <p className=" text-xs sm:text-sm md:text-base lg:text-lg mb-1 italic font-semibold">
          Esperamos contar con tu presencia, no olvides confirmar.
        </p>
        <p className=" text-xs sm:text-sm md:text-base lg:text-lg mb-6  font-semibold">
          Fecha límite 22/02/2025
        </p>
        <div className="flex justify-center ">
          <button 
            onClick={() => router.push('/asistency')} 
            className="bg-secondary text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold py-2 px-4 rounded-2xl flex items-center justify-center">
            
            <span className="bg-white text-primary rounded-full p-1 mr-2 flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-3 h-3">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </span>
            
            CONFIRMAR ASISTENCIA
          </button>
        </div>

      </div>
    );
  }