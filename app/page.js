import Header from '@/components/Header';
import Gallery from '@/components/Gallery/Gallery';
import Invitation from '@/components/Invitation/Invitation';
import Footer from '@/components/Footer';
import '../components/components.css';
import Party from '../components/Party/Party';
import Date from '@/components/Date/Date';
import Regalos from '@/components/Gifts/Gifts';
import ConfirmarAsistencia from '@/components/Asistency/ConfirmAsistency';
import { layourMetadata } from './layout';
import MusicPlayer from '@/components/MusicPlayer'; // Importa el nuevo componente

export const metadata = {
  ...layourMetadata,
  openGraph: {
    images: [
      {
        url: 'https://martuygino.vercel.app/imagenPortada.jpg', 
        width: 1200,
        height: 630,
        alt: 'Imagen representativa de la boda de M&G',
      },
    ],
    }
  }

const Home = () => {
  return (
    <div className=" flex flex-col items-center justify-center overflow-x-hidden">
      <main className='w-full m-0 p-0'>
        <Header />
        <section id="date">
          <Date />
        </section>
        <section id="invitation">
          <Invitation />
        </section>
        <section id="gallery" className='custom-shadow mt-10'>
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
      <MusicPlayer />
    </div>
  );
};

export default Home;
