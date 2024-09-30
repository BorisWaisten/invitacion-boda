'use client'

import { useRouter } from "next/navigation"

export default function InfoGifts() {
    const router = useRouter();

    return (
      <main className="min-h-screen m-0 overflow-x-hidden bg-secondary">
        <div className="container text-center mx-auto py-10">
          <div className=" bg-terciary p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Datos Bancarios</h2>
            <ul className="list-none space-y-2">
              <li><strong>Nombre del titular:</strong> Martina Waisten</li>
              <li><strong>Cuil:</strong> 27346799175</li>
              <li><strong>N° de cuenta:</strong> CA $ 36205341238468</li>
              <li><strong>Alias:</strong> martiwaisten</li>
              <li><strong>CBU:</strong> 0110534630053412384683</li>
            </ul>
          </div>
          <div>
            <button
             className=" bg-terciary font-bold py-2  w-1/6  rounded-lg shadow-lg mt-4"
              onClick={() => router.push("/#gifts")}
            > 
              Volver
            </button>
          </div>
        </div>
      </main>
    );
}