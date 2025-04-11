'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import ContadorEventos from '@/components/ContadorEventos'
import HeaderTrad from '@/components/HeaderTrad'
import Footer from '@/components/Footer'
import HeroSlider from '@/components/HeroSlider'
import Header from '@/components/Header'

export default function Eventos() {
  return (
    <main className="mx-auto">
      <HeroSlider />
      <Header />

      {/* SECCIÓN: UNFORGETTABLE MEETINGS */}
      <section className="SectionDiv">
        <div className="ContainerFlex flex-col text-center">
          <h2 className="TitleSection">UNFORGETTABLE MEETINGS</h2>
          <p className="max-w-3xl text-base text-gray-600 leading-relaxed mt-4">
            The newly renovated Wyndham Grand Algarve with its stunning setting and versatile meeting spaces...
          </p>
        </div>
      </section>

      {/* SECCIÓN: PLANIFICA TUS EVENTOS */}
      <section className="SectionDiv">
        <div className="ContainerFlex flex-col text-center">
          <h2 className="TitleSection">Empieza a planificar tus reuniones o eventos aquí</h2>
          <p className="max-w-4xl text-base text-gray-600 leading-relaxed mt-4 mb-8">
            Bienvenido al Hotel Costa del Sol by Wyndham Lima...
          </p>
        </div>
      </section>

      {/* SECCIÓN: TARJETAS EN GRILLA / CARRUSEL */}
      <section className="SectionDiv">
        <div className="ContainerFlex flex-col w-full">

          {/* VERSIÓN ESCRITORIO: GRILLA DE 4 TARJETAS */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {data.map((card, index) => (
              <GridCard key={index} card={card} />
            ))}
          </div>

          {/* MOBILE: CARRUSEL SLIDE POR SLIDE CON AUTOPLAY */}
          <div className="block lg:hidden w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="w-full"
            >
              {data.map((card, index) => (
                <SwiperSlide key={index}>
                  <GridCard card={card} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

      {/* CONTADOR EVENTOS */}
      <ContadorEventos />

      {/* SECCIÓN: REUNIONES Y EVENTOS */}
      <section className="SectionDiv">
        <div className="ContainerFlex flex-col lg:flex-row items-start gap-10">
          {/* IMAGEN */}
          <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] relative">
            <Image
              src="https://picsum.photos/800/600"
              alt="Salón de eventos"
              fill
              className="object-cover rounded-md shadow-md"
            />
          </div>

          {/* TEXTO */}
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="TitleSection text-primary-oceanic mb-2">Reuniones y eventos</h2>
            <h3 className="text-base font-semibold text-gray-700 mb-4">
              Un lugar inspirado por la vida a grandes líneas.
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Ya sea que estés planificando una reunión corporativa...
            </p>
            <p className="text-sm text-gray-600 mb-3">
              Nuestros 7 eventos contemporáneos pueden albergar una amplia variedad...
            </p>
            <p className="text-sm text-gray-600">
              Nuestro hotel amigable para las empresas también ofrece WiFi gratis...
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN: CATERING */}
      <section className="SectionDiv">
        <div className="ContainerFlex flex-col lg:flex-row items-center gap-10">

          {/* TEXTO */}
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="TitleSection mb-3">CATERING</h2>
            <p className="text-sm text-gray-600 mb-4">
              Looking to impress your guests with delectable food...
            </p>
            <p className="text-sm text-gray-600 mb-6">
              Trust us to take care of all the details...
            </p>
            <p className="text-sm text-gray-600 mb-6">
              For more information, please contact us at{' '}
              <a href="tel:407-390-2460" className="underline text-primary-oceanic">(407) 390-2460</a>.
            </p>
            <button className="ButtonSolid ButtonRounded">BANQUET MENU</button>
          </div>

          {/* IMAGEN */}
          <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] relative">
            <Image
              src="https://picsum.photos/700/500?grayscale&blur=1"
              alt="Catering"
              fill
              className="object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// COMPONENTE DE TARJETA INDIVIDUAL
const GridCard = ({ card }) => {
  return (
    <div className="CardHotel w-full">
      <div className="CardHotelImage relative w-full h-[180px]">
        <Image src={card.image} alt={card.title} layout="fill" objectFit="cover" />
      </div>
      <div className="CardHotelContent text-left">
        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
        <p className="text-sm mb-4">{card.text}</p>
        <Link href={card.link} className="ButtonSolid inline-block">
          {card.buttonText}
        </Link>
      </div>
    </div>
  )
}

// DATOS DE LAS TARJETAS
const data = [
  {
    title: 'Reuniones y conferencias',
    text: 'Encuentra soluciones innovadoras y versátiles que te acompañan.',
    buttonText: 'Más Información',
    link: '/reuniones',
    image: 'https://picsum.photos/id/1018/600/400',
  },
  {
    title: 'Bodas',
    text: 'Haz que el gran día sea tan perfecto como siempre soñaste.',
    buttonText: 'Comenzar a planificar',
    link: '/bodas',
    image: 'https://picsum.photos/id/1025/600/400',
  },
  {
    title: 'Celebraciones',
    text: 'Eventos familiares y de empresa con opciones para grupos pequeños.',
    buttonText: 'Explorar ahora',
    link: '/celebraciones',
    image: 'https://picsum.photos/id/1035/600/400',
  },
  {
    title: 'Viaje en grupo',
    text: 'Para equipos, estudiantes o familias a vivir aventuras memorables.',
    buttonText: 'Comienza',
    link: '/viaje-grupo',
    image: 'https://picsum.photos/id/1042/600/400',
  },
]
