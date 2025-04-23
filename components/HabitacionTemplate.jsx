"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { IoBedOutline, IoPeopleOutline  } from "react-icons/io5";
import {
  FaBed,
  FaWifi,
  FaUsb,
  FaTv,
  FaChevronLeft,
  FaChevronRight,
  FaLock,
  FaCoffee,
  FaWineBottle,
  FaBlender,
  FaFan,
  FaTshirt,
  FaHotTub,
  FaThermometerHalf
} from "react-icons/fa";

import BotonHabitacion from "./BotonHabitacion";

const iconosServicios = {
  "Smart TV LED 65”": <FaTv className="w-4 h-4 text-primary-oceanic" />,
  "Cama King": <FaBed className="w-4 h-4 text-primary-oceanic" />,
  "Caja fuerte": <FaLock className="w-4 h-4 text-primary-oceanic" />,
  "Minibar": <FaWineBottle className="w-4 h-4 text-primary-oceanic" />,
  "Cafetera": <FaCoffee className="w-4 h-4 text-primary-oceanic" />,
  "Plancha y planchador": <FaTshirt className="w-4 h-4 text-primary-oceanic" />,
  "Secadora": <FaHotTub className="w-4 h-4 text-primary-oceanic" />,
  "Bata y pantuflas": <FaBlender className="w-4 h-4 text-primary-oceanic" />,
  "Calefacción y aire acondicionado": <FaThermometerHalf className="w-4 h-4 text-primary-oceanic" />
};

const HabitacionTemplate = ({ habitacion }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [mainSwiper, setMainSwiper] = useState(null);

  useEffect(() => {
    if (habitacion?.imagenes) {
      setImages(habitacion.imagenes);
    }
  }, [habitacion]);

  return (
    <section className="SectionDiv pt-5">
      <div className="ContainerFlex">
        {/* Galería izquierda */}
        <div className="flex-1 w-full max-w-xl  relative">
          <div className="relative z-0 w-full h-[210px] lg:h-[420px] rounded-lg overflow-hidden shadow-md cursor-pointer">
            

            <Swiper
              modules={[Navigation, EffectFade]}
              slidesPerView={1}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              navigation={{
                prevEl: ".thumbs-prev",
                nextEl: ".thumbs-next"
              }}
              onSwiper={setMainSwiper}
              onSlideChange={(swiper) => setSelectedIndex(swiper.realIndex)}
              className="w-full h-full"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="relative w-full h-full"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <Image
                      src={src}
                      alt={`Imagen ${idx + 1}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    {/* Lupa */}
                    <div className="absolute top-2 right-3 bg-white p-1.5 rounded-full shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-primary-oceanic"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                        />
                      </svg>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Miniaturas */}
          <div className="relative mt-5 flex items-center gap-2">
            <button className="thumbs-prev z-1 p-2  text-primary-oceanic">
              <FaChevronLeft size={18} />
            </button>

            <Swiper
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={10}
              navigation={{
                prevEl: ".thumbs-prev",
                nextEl: ".thumbs-next"
              }}
              className="w-full"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className={`relative w-full h-[50px] lg:h-[80px] rounded-md overflow-hidden cursor-pointer border transition ${
                      selectedIndex === idx
                        ? "border-[#3A6C74]"
                        : "border-gray-200 hover:border-[#3A6C74]"
                    }`}
                    onClick={() => {
                      setSelectedIndex(idx);
                      mainSwiper?.slideTo(idx);
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Miniatura ${idx + 1}`}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="thumbs-next z-1 p-2 text-primary-oceanic">
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="basis-full p-6 text-black-grand relative">
          <h4 className="TitleSection">{habitacion?.titulo}</h4>
          <br />
          <p className="text-sm text-justify">{habitacion?.descripcion}</p>
          <br />

          {/* Características principales */}
          {/* Características principales (ocupación, tamaño, cama) */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-primary-oceanic mb-6">
            <div className="flex  gap-2">
                <IoBedOutline className="w-5 h-5" />
                <p className="text-xs">{habitacion?.cama}</p>
            </div>
            <div className="flex  gap-2">
                <IoPeopleOutline className="w-5 h-5" />
                <p className="text-xs">{habitacion?.ocupacion}</p>
            </div>
            <div className="flex  gap-2">
                <TfiRulerAlt2 className="w-5 h-5" />
                <p className="text-xs">{habitacion?.tamano}</p>
            </div>
            
            </div>


          {/* Servicios adicionales */}
          {habitacion?.servicios?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-800 mb-6">
              {habitacion.servicios.map((servicio, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {iconosServicios[servicio] || (
                    <FaBed className="w-4 h-4 text-primary-oceanic" />
                  )}
                  {servicio}
                </div>
              ))}
            </div>
          )}

          <BotonHabitacion habitacion={habitacion} isDetalle />
        </div>
      </div>

      {/* Lightbox */}
      {images.length > 0 && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={selectedIndex}
          plugins={[Zoom, Thumbnails]}
          animation={{ fade: 300, zoom: 300 }}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, 0.75)" }
          }}
          thumbnails={{
            border: 0,
            padding: 4
          }}
        />
      )}
    </section>
  );
};

export default HabitacionTemplate;
