'use client';
import { useRouter } from "next/navigation";

export default function Regalos() {
    const router = useRouter();
    return (
      <div className="bg-primary text-white text-center py-10">
        <img className="h-[10vh] md:h-[15vh] lg:h-[20vh] mx-auto " src="/regalos.svg" alt="" />
        <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold mb-4">REGALOS</h2>
        <p className="mb-6 italic text-xs sm:text-sm md:text-base lg:text-lg">
          Tu presencia es lo más importante para nosotros.<br />
          Si además deseas hacernos un regalo, puedes ayudarnos con nuestra luna de miel.
        </p>
        <button
            onClick={() => router.push('/gifts')}
            className="bg-secondary font-bold py-2 px-4 rounded-3xl">
            MÁS INFORMACIÓN
        </button>
      </div>
    );
  }
