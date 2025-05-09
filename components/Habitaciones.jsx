import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import habitacionesData from '@/data/habitacionesHome.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const imagenes = [
  "/images/WG-Habitacion-Doble-1.jpg",
  "/images/WG-Habitacion-Doble-2.jpg",
  "/images/WG-Habitacion-Doble-3.jpg"
];

const Habitaciones = () => {
  const { locale, asPath } = useRouter();
  const lang = asPath.startsWith('/en') ? 'en' : 'es';
  const data = habitacionesData[lang];

  return (
    <section id="habitaciones" className="SectionDiv py-0 BgImageLeft">
      <div className="ContainerFlex flex-col-reverse lg:flex-row">
        {/* Contenedor de texto */}
        <div className="flex-1 max-w-md lg:max-w-lg">
          <div>
            <h6 className="suptitle">{data.suptitle}</h6>
            <h4 className="TitleSection">{data.title}</h4>
            <div className="divider-line"></div>
          </div>
          <div className="mx-auto">
            <p className="text-parrafos">{data.descripcion}</p>
            <div className="ButtonInfoStatic mt-4">
              <Link
                className="ColorButton1 ButtonRounded"
                href={data.link}
                aria-label={data.boton}
              >
                {data.boton}
              </Link>
            </div>
          </div>
        </div>

        {/* Slider de imágenes */}
        <div className="w-full md:max-w-lg">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            effect="fade"
            className="relative w-full h-[200px] md:h-[300px] overflow-hidden"
          >
            {imagenes.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[200px] md:h-[400px]">
                  <Image
                    src={src}
                    alt={`Restaurante slide ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Habitaciones;
