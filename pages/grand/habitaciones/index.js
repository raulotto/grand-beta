import React from 'react';
import Link from 'next/link';
import HeaderTrad from '@/components/HeaderTrad';
import BookingForm from '@/components/BookingForm';
import HeroSliderCompact from '@/components/ImageHeaderHab';
import IntroHab from '@/components/IntroHab';
import Gallery from '@/components/Gallery';
import MatriSup from '@/components/MatriSup';
import Footer from '@/components/Footer';
import DobleSup from '@/components/DobleSup';
import data from '@/data/habitaciones.json';
import BotonHabitacion from '@/components/BotonHabitacion';

const Habitaciones = () => {
  return (
    <main className="mx-auto">
      <HeaderTrad />
      <HeroSliderCompact />
      <IntroHab />
      <MatriSup />
      <DobleSup />

      {/* ✅ Aquí va tu sección con el botón "Ver más" */}
      <section className="SectionDiv">
        <div className="ContainerFlex flex-col">
          {data.map((habitacion) => (
            <div key={habitacion.id} className="mb-10">
              <h3 className="text-xl font-semibold mb-2">{habitacion.nombre}</h3>
              <BotonHabitacion habitacion={habitacion} isDetalle={false} />
            </div>
          ))}
        </div>
      </section>

      <Gallery />
      <Footer />
    </main>
  );
};

export default Habitaciones;
