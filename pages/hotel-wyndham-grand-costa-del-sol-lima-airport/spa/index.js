// pages/spa.jsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';

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



export default function Spa() {
  return (
    <main className="mx-auto">
      <HeaderTrad />

      <HeroSlider page="spa" />
      <BookingForm />

      {/* Intro */}
      <section className="SectionDiv">
        <div className="ContainerFlex flex-col text-center">
          <h2 className="TitleSection">Es hora de reconectarte contigo mismo</h2>
          <p className="max-w-3xl text-base text-gray-600 leading-relaxed mt-4">
            Descubra un espacio donde el bienestar se vive en cada detalle. Relájese con tratamientos exclusivos en nuestro Wellness & Spa, manténgase activo en nuestro gimnasio completamente equipado o disfrute de un refrescante descanso en nuestra piscina bajo techo con temperatura controlada. Aquí, la sofisticación y la tranquilidad se combinan para ofrecerle una experiencia inigualable de confort y renovación.
          </p>
        </div>
      </section>

      {/* Servicios: grid en desktop / carrusel móvil */}
      <section className="SectionDiv py-0">
      
            <GridCardsSection cards={spaCards} />
      </section>

      {/* Spa Journeys */}
      <section className="py-0 SectionDiv BgImageLeft">
             
             <div className="ContainerFlex gap-0 ">
               {/* Contenedor de imágenes */}
               <div className="w-full lg:w-[50%]">
         <div className="relative w-full h-[200px] md:h-[296px] overflow-hidden p-5">
           <Image
             src="https://calista.com.tr/media/532bmoz2/spa-nedir.jpg?rmode=max&width=500&height=265"
             alt="Piscina"
             fill
             className="object-cover"
           />
         </div>
       </div>
       
       
               {/* Contenido del hotel */}
               <div className="w-full lg:w-[50%] bg-[#F5EFE3] p-5">
               <h6 className="suptitle">SPA JOURNEYS</h6>
            <div className="w-16 h-[2px] bg-gray-400 my-4"></div>
            <div className="space-y-8">
              <div>
                <h4 className="font-serif text-xl uppercase">CASTLE ESCAPE</h4>
                <p className="mt-2 text-parrafos">Exfoliation + Bath Ritual + Signature Warm Candle Massage</p>
                <p className="mt-1 text-sm font-semibold">2 Hour 20 min | Solo $300.00 | For Two $575.00</p>
              </div>
              <div>
                <h4 className="font-serif text-xl uppercase">BAMBOO RENEWAL</h4>
                <p className="mt-2 text-parrafos">Full Body Massage + Luxury Illuminating Facial</p>
                <p className="mt-1 text-sm font-semibold">2 Hour 20 min | Solo $260.00 | For Two $500.00</p>
              </div>
            </div>
            
               </div>
             </div>
           </section>
    
     {/* Galería SPA */}


           <PhotoGallery galleryData={galleryData} />
     
    <section className="SectionDiv">
      <div className="ContainerFlex flex-col w-full">
      <h2 className="TitleSection">Nuestros Servicios</h2>

           <SpaAcordeon />
           </div>
    </section>

<section className="pt-0 SectionDiv">
<div className="ContainerFlex flex-col w-full">
<h2 className="TitleSection">Nuestras Sugerencias</h2>
        <GridCardsSection cards={spaCardsDos} />
        </div>
      </section>
      <section className="SectionDiv bg-[#f4ebdf] py-12 px-6">
      <div className="ContainerFlex flex-col w-full">
        <div className="mb-8 md:flex md:items-end md:justify-between gap-8">
          <h2 className="TitleSection">
            Hacer ejercicio<br />siempre es una buena idea
          </h2>
          <p className="mt-4 md:mt-0 md:max-w-md text-gray-700">
            Pasea por la playa, pedalea por Quinta do Lago o visita el gimnasio. Encuentra tu mejor forma de mantenerte activo.
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
  );
}
