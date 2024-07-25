import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Invitation from '@/components/Invitation';
import Asistency from '@/components/Asistency';
import Footer from '@/components/Footer';

// bg-amber-200 bg-opacity-55
// bg-amber-300 bg-opacity-10

const Home = () => {
  return (
    <div className="min-h-screen bg-secondary  flex flex-col items-center justify-center">
      <main className="w-full max-w-4xl px-4 py-8 bg-white shadow-lg shadow-zinc-500 rounded-lg mt-8 mb-8">
        <Header />
        <Gallery />
        <Invitation />
        <Asistency />
        <div className="h-[50vh] items-center justify-center flex mt-5 rounded-lg  bg-terciary ">
          <h1 className="text-center">¡Gracias por acompañarnos en este momento tan importante!</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
