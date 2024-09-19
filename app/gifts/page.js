
import { layourMetadata } from "../layout.js";

export const metadata = {
    ...layourMetadata,
    icons: {
      icon: '/logo.ico',
    },
  }

export default function InformationPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-cover bg-center h-64 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Información</h1>
      </section>

      <div className="container mx-auto py-10">
        <p className="text-center mb-8">
          Aquí encontrarás toda la información necesaria para nuestro evento especial.
        </p>

      </div>
    </main>
  );
}