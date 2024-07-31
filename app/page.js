import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Invitation from '@/components/Invitation';
import Footer from '@/components/Footer';
import SideNav from '@/components/SideNav';
import Link from 'next/link';
import Countdown from '@/components/Countdown';
import ScheduleEvent from '@/components/ScheduleEvent';
import '../components/components.css';

export const metadata = {
  title:'M&G - 21/21/2025',
  icons: {
    icon: '/logo.png',
  }
}

const Home = () => {
  return (
    <div className="min-h-screen bg-secondary flex flex-col items-center justify-center">
      <SideNav />
      <main className="w-full max-w-7xl px-1 py-1 bg-terciary rounded-lg mt-8 mb-8">
        <Header />
        <section id="countdown" className="custom-shadow bg-terciary py-12 z-10">
          <Countdown />
        </section>
        <section id="invitation">
          <Invitation />
        </section>
        <section id="gallery" className='mt-10'>
          <Gallery />
        </section>
        <div id='confirmar' className="flex justify-center items-center space-x-20 mb-2  bg-terciary h-[50vh]">
          <div  className="flex flex-col items-center">
            <Link href="/asistency" className="py-2 px-4 mt-10 bg-blue-500 hover:bg-blue-700 text-center text-white font-bold rounded-lg">
              Confirmar Asistencia
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <section id="schedule-event">
              <ScheduleEvent />
            </section>
          </div>
        </div>
        <div className="h-[50vh] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">¡Gracias por acompañarnos en este momento tan importante!</h1>
          <p className="text-gray-600">Tu presencia hace que este día sea aún más especial.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
