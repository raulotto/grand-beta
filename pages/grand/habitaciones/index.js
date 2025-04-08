import React from 'react';
import BookingForm from '@/components/BookingForm';
import HeaderTrad from '@/components/HeaderTrad';
import HeroSlider from '@/components/HeroSlider';
import MatriSup from '@/components/MatriSup';
import IntroHab from '@/components/IntroHab';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import DobleSup from '@/components/DobleSup';

const Habitaciones = () => {
  return (
    <main className="mx-auto">
      <HeaderTrad />
    <HeroSlider />

      <BookingForm />
      <IntroHab />
      <MatriSup isDetalle={false} />
<DobleSup isDetalle={false} />



      <Gallery />
      <Footer />
    </main>
  );
};

export default Habitaciones;
