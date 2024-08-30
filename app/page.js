import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Invitation from '@/components/Invitation';
import Footer from '@/components/Footer';
import Countdown from '@/components/Countdown';
import '../components/components.css';
import Party from '@/components/Party';
import Date from '@/components/Date';
import Regalos from '@/components/Gifts';
import Asistency from '@/components/Asistency';
import ConfirmarAsistencia from '@/components/ConfirmAsistency';

export const metadata = {
  title:'M&G - 21/21/2025',
  icons: {
    icon: '/logo.png',
  }
}

const Home = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center">
      <main className="w-full max-w-7xl rounded-lg ">
        <Header />
        <section id="date" >
          <Date />
        </section>
        <section id="invitation">
          <Invitation />
        </section>
        <section id="gallery" className='custom-shadow   mt-10'>
          <Gallery />
        </section>
        <section id='party'> 
          <Party />
        </section>
        <section id="gifts">
          <Regalos />
        </section>
        <section id="asistency">
          <ConfirmarAsistencia />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
