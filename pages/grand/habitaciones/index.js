import React from 'react';
import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import HeaderTrad from '@/components/HeaderTrad';
import HeroSlider from '@/components/HeroSlider';
import MatriSup from '@/components/MatriSup';
import HeroSliderCompact from '@/components/ImageHeaderHab';
import IntroHab from '@/components/IntroHab';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import DobleSup from '@/components/DobleSup';
import data from '@/data/habitaciones.json';
import BotonHabitacion from '@/components/BotonHabitacion';

const Habitaciones = () => {
  return (
    <main className="mx-auto">
      <HeaderTrad />
    <HeroSlider />

      <BookingForm />
      <IntroHab />
      <MatriSup />
      <DobleSup />


      <Gallery />
      <Footer />
    </main>
  );
};

export default Habitaciones;
