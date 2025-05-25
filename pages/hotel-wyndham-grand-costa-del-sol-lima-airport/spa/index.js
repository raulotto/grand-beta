import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';
import useIdioma from "@/hooks/useIdioma"

import HeroSlider from '@/components/HeroSlider';
import Header from '@/components/Header';
import BookingForm from '@/components/BookingForm';
import Image from 'next/image';

import GridCardsSection from '@/components/GridCardsSection';
import spaCards from '@/data/spaCards.json';
import HeaderTrad from '@/components/HeaderTrad';
import PhotoGallery from '@/components/PhotoGallery';
import galleryData from '@/data/photoGallerySpa.json';
import spaCardsDos from '@/data/spaCardsDos.json';
import SpaAcordeon from "@/components/SpaAcordeon"; 
import Footer from '@/components/Footer';
import TabsContent from "@/components/TabsContent";
import tabsData from "@/data/tabsContentSpa.json";
import TermsToggle from '@/components/TermsToggle';
import termsData from '@/data/termsGrandSpa.json';


export default function HabitacionesPage() {
 const idioma = useIdioma("spa", {
    cards: spaCards,
    tabs: tabsData,

  })
  
  if (!idioma) return null
  
  const { tabs,  cards, seoData } = idioma

  return (
    <>
    <main className="mx-auto">
      <HeaderTrad />

      <HeroSlider page="spa" />
      <BookingForm />
{/* Intro */}
      <section className="SectionDiv pb-0 scroll-mt-24 lg:scroll-mt-52" id="next-section">
        <div className="ContainerFlex flex-col text-center">
          <h2 className="TitleSection">Es hora de reconectarte contigo mismo</h2>
          <p className="max-w-3xl text-base text-gray-600 leading-relaxed mt-4">
            Descubra un espacio donde el bienestar se vive en cada detalle. Relájese con tratamientos exclusivos en nuestro Wellness & Spa, manténgase activo en nuestro gimnasio completamente equipado o disfrute de un refrescante descanso en nuestra piscina bajo techo con temperatura controlada. Aquí, la sofisticación y la tranquilidad se combinan para ofrecerle una experiencia inigualable de confort y renovación.
          </p>
        </div>
      </section>

      {/* Servicios: grid en desktop / carrusel móvil */}
      <section className="SectionDiv py-0">
      <GridCardsSection cards={cards} />
      </section>
       {/* Spa Journeys */}
      <section className="SectionDiv pt-0">
        <div className='ContainerFlex'>
  <div className="GridSide flex flex-col lg:flex-row-reverse bg-primary-dune/60  h-full w-full">
    
    {/* Contenido del spa */}
    <div className="flex flex-col justify-between p-6 lg:w-1/2 h-full">
      <div>
        <h3 className="text-xl font-bold text-[#333] mb-4 uppercase">SPA JOURNEYS</h3>
        <div className="text-parrafos">
          <div className="space-y-8">
            <div>
              <h4 className="font-serif text-base uppercase">CASTLE ESCAPE</h4>
              <p className="mt-2">Exfoliation + Bath Ritual + Signature Warm Candle Massage</p>
              <p className="mt-1 text-sm font-semibold">2 Hour 20 min | Solo $300.00 | For Two $575.00</p>
            </div>
            <div>
              <h4 className="font-serif text-base uppercase">BAMBOO RENEWAL</h4>
              <p className="mt-2">Full Body Massage + Luxury Illuminating Facial</p>
              <p className="mt-1 text-sm font-semibold">2 Hour 20 min | Solo $260.00 | For Two $500.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Imagen del spa */}
    <div className="w-full lg:w-1/2">
      <div className="relative w-full h-[200px] lg:h-full">
        <Image
          src="https://calista.com.tr/media/532bmoz2/spa-nedir.jpg?rmode=max&width=500&height=265"
          alt="Spa Journey"
          fill
          className="object-cover"
        />
      </div>
    </div>
</div>
  </div>
</section>

    
     {/* Galería SPA */}


           <PhotoGallery galleryData={galleryData} />
     <section className="SectionDiv bg-primary-dune/60 TabSpa">
             <div className="ContainerFlex flex-col">

             <TabsContent data={tabs} />

             </div>
           </section>
           <section className="SectionDiv AcordeonSpa">
             <div className="ContainerFlex flex-col">
<h2 className="TitleSection">Nuestros Servicios</h2>
                        <TermsToggle data={termsData} />


             </div>
           </section>
   

<section className="pt-0 SectionDiv">
<div className="ContainerFlex flex-col w-full">
<h2 className="TitleSection">Nuestras Sugerencias</h2>
        <GridCardsSection cards={spaCardsDos} />
        </div>
      </section>
      

<Footer />
    </main>
    </>
  );
}
