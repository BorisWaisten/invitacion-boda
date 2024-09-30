import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Invitation from '@/components/Invitation';
import Footer from '@/components/Footer';
import '../components/components.css';
import Party from '@/components/Party';
import Date from '@/components/Date';
import Regalos from '@/components/Gifts';
import ConfirmarAsistencia from '@/components/ConfirmAsistency';
import { layourMetadata } from './layout';
import MusicPlayer from '@/components/MusicPlayer'; // Importa el nuevo componente
import MusicPlayer2 from '@/components/MusicPlay2';

export const metadata = {
  ...layourMetadata,
  openGraph: {
    images: [
      {
        url: '/martu1.jpg', // La ruta de la imagen en tu carpeta public
        width: 1200,
        height: 630,
        alt: 'Imagen representativa de la boda de M&G',
      },
    ],
  }
}

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden"> {/* Agrega overflow-x-hidden */}
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
      <MusicPlayer2 />
    </div>
  );
};

export default Home;
