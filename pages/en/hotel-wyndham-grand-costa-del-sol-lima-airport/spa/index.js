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
    <h2 className="TitleSection">It&apos;s time to reconnect with yourself</h2>
    <p className="max-w-3xl text-base text-gray-600 leading-relaxed mt-4">
      Discover a space where wellness is lived in every detail. Relax with exclusive treatments at our Wellness & Spa, stay active in our fully equipped gym, or enjoy a refreshing break in our indoor pool with controlled temperature. Here, sophistication and tranquility combine to offer you an unparalleled experience of comfort and renewal.
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
<h2 className="TitleSection">Our Services</h2>
                        <TermsToggle data={termsData} />


             </div>
           </section>
   

<section className="pt-0 SectionDiv">
<div className="ContainerFlex flex-col w-full">
<h2 className="TitleSection">Our Suggestions</h2>
        <GridCardsSection cards={spaCardsDos} />
        </div>
      </section>
      <section className="SectionDiv bg-[#f4ebdf] py-12 px-6">
      <div className="ContainerFlex flex-col w-full">
        <div className="mb-8 md:flex md:items-end md:justify-between gap-8">
<h2 className="TitleSection">
  Exercising<br />is always a good idea
</h2>
          <p className="mt-4 md:mt-0 md:max-w-md text-gray-700">
  Walk along the beach, ride a bike through Quinta do Lago, or visit the gym. Find your best way to stay active.
</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative w-full h-auto">
            <Image
              src="https://picsum.photos/id/1035/800/600"
              alt="Gimnasio moderno"
              width={300}
              height={300}
              className="object-cover rounded"
            />
          </div>

          <div className="relative w-full h-64">
            <Image
              src="https://picsum.photos/id/1011/800/600"
              alt="Mujer entrenando en la playa"
              width={300}
              height={300}
              className="object-cover rounded"
            />
          </div>

          <div className="relative w-full h-64">
            <Image
              src="https://picsum.photos/id/1012/800/600"
              alt="Sesión de spa"
              width={300}
              height={300}
              className="object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>

<Footer />
    </main>
    </>
  );
}
