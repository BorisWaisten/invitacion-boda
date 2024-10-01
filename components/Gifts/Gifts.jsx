'use client';
import { useRouter } from "next/navigation";

export default function Regalos() {
    const router = useRouter();
    return (
      <div className="bg-primary text-white text-center w-full py-10">
        <img className="h-[12vh] md:h-[20vh] lg:h-[20vh] mx-auto " src="/regalos.svg" alt="" />
        <h2 className=" text-2xl md:text-2xl lg:text-3xl font-bold mb-4">REGALOS</h2>
        <div className="flex justify-center w-full ">
          <p className=" italic text-sm sm:text-xl  lg:text-2xl">
            Tu presencia es lo más importante para nosotros.
          </p>
        </div>
        <div className="flex justify-center w-full">
        <p className="mb-4  italic text-sm sm:text-xl lg:text-2xl">
            Si deseas hacernos un regalo, será muy bienvenido.</p>
        </div>
        <button
            onClick={() => router.push('/gifts')}
            className=" text-sm md:text-lg lg:text-xl bg-secondary font-bold py-2 px-4 rounded-3xl">
              MÁS INFORMACIÓN
        </button>
      </div>
    );
  }
