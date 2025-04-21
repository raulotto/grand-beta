// pages/spa.jsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import HeroSlider from '@/components/HeroSlider';
import Header from '@/components/Header';
import BookingForm from '@/components/BookingForm';
import Image from 'next/image';

// 1. spaServices MEJOR arriba del componente:
const spaServices = [
  {
    title: "Spa y salón de belleza",
    description: `Disfruta de un maravilloso masaje o un tratamiento facial rejuvenecedor en el spa. También hay tratamientos como servicios de cabello, manicura y pedicura en el salón de belleza.`,
    image: "https://www.costadelsolperu.com/wp-content/uploads/2022/10/Hotel_Costa_del_Sol_wyndham_Lima_galeria-2022-22-1536x1024.jpg",
  },
  {
    title: "Gimnasio",
    description: `Mantén tu rutina de ejercicios en nuestro gimnasio de vanguardia o practica tus movimientos con raqueta en nuestra cancha de tenis.`,
    image: "https://www.costadelsolperu.com/wp-content/uploads/2022/10/Hotel_Costa_del_Sol_wyndham_Lima_galeria-2022-25-1536x1021.jpg",
  },
  {
    title: "Piscina",
    description: `Ve a nadar en la piscina cristalina o sumérgete en el reconfortante hidromasaje y, luego, relájate con un cóctel en la mano en el solárium.`,
    image: "https://www.costadelsolperu.com/wp-content/uploads/2022/01/Hotel_Costa_del_Sol_wyndham_Lima_galeria_230919_90-1024x1536.jpg",
  },
];

export default function Spa() {
  return (
    <main className="mx-auto">
      <HeroSlider />
      <Header />
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
      <section className="SectionDiv">
        <div className="ContainerFlex flex-col w-full">
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {spaServices.map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <img src={card.image} alt={card.title} className="w-full h-56 object-cover" />
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <h3 className="text-lg font-serif text-gray-800 mb-2 text-center">{card.title}</h3>
                  <div className="w-12 h-[2px] bg-green-900 mb-4 mx-auto"></div>
                  <p className="text-parrafos text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="block sm:hidden w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="w-full"
            >
              {spaServices.map((card, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
                    <img src={card.image} alt={card.title} className="w-full h-56 object-cover" />
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <h3 className="text-lg font-serif text-gray-800 mb-2">{card.title}</h3>
                      <div className="w-12 h-[2px] bg-green-900 mb-4"></div>
                      <div className="bg-cyan-900 text-white text-sm p-4 rounded shadow-inner leading-relaxed">
                        {card.description}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Spa Journeys */}
      <section className="SectionDiv">
        <div className="ContainerFlex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 h-[400px] relative">
            <Image
              src="https://calista.com.tr/media/532bmoz2/spa-nedir.jpg?rmode=max&width=500&height=265"
              alt="Spa Journeys"
              fill
              className="object-cover rounded-md shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2 bg-[#F5EFE3] p-10 rounded-md relative">
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
<section className="SectionDiv">
  <div className="ContainerFlex flex-col w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

      {/* --- Imagen vertical grande (columna 1) --- */}
      <div className="overflow-hidden rounded-lg relative h-96">
        <Image
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
          alt="Vertical Spa"
          fill
          className="object-cover"
        />
      </div>

      {/* --- Imagen horizontal estrecha (columna 2 arriba) --- */}
      <div className="overflow-hidden rounded-lg relative h-96">
        <Image
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
          alt="Horizontal Spa"
          fill
          className="object-cover"
        />
      </div>

      {/* --- Imagen ancha que cruza ambas columnas (fila entera) --- */}
      <div className="col-span-1 md:col-span-2 overflow-hidden rounded-lg relative h-64">
        <Image
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
          alt="Ancha Spa"
          fill
          className="object-cover"
        />
      </div>

      {/* --- Dos imágenes pequeñas lado a lado (última fila) --- */}
      <div className="overflow-hidden rounded-lg relative h-32">
        <Image
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
          alt="Pequeña Spa 1"
          fill
          className="object-cover"
        />
      </div>
      <div className="overflow-hidden rounded-lg relative h-32">
        <Image
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
          alt="Pequeña Spa 2"
          fill
          className="object-cover"
        />
      </div>

    </div>
  </div>
</section>





    </main>
  );
}
