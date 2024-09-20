const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
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
      <MusicPlayer /> {/* Lo puedes dejar fuera del <main> también */}
    </div>
  );
};
