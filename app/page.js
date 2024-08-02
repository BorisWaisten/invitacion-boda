import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Invitation from '@/components/Invitation';
import Footer from '@/components/Footer';
import SideNav from '@/components/SideNav';
import Countdown from '@/components/Countdown';
import '../components/components.css';
import Party from '@/components/Party';

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
      <main className="w-full max-w-7xl  bg-terciary rounded-lg m-8">
        <Header />
        <section id="countdown" className="custom-shadow bg-terciary py-12 z-10">
          <Countdown />
        </section>
        <section id="invitation">
          <Invitation />
        </section>
        <section id="gallery" className='custom-shadow py-12  mt-10'>
          <Gallery />
        </section>
        <section id='party'> 
          <Party />
        </section>
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
