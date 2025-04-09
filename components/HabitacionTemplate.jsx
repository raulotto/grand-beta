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

import {
  FaBed,
  FaWifi,
  FaUsb,
  FaTv,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import BotonHabitacion from "./BotonHabitacion";

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
        {/* Columna izquierda: Galería */}
        <div className="flex-1 max-w-xl lg:max-w-2xl relative">
          <div className="relative z-0 w-full h-[420px] rounded-lg overflow-hidden shadow-md cursor-pointer">
            {/* Flechas dentro del slider */}
            <button className="thumbs-prev absolute z-20 top-1/2 left-3 transform -translate-y-1/2 bg-white/90 p-2 rounded-full shadow border text-[#3A6C74] hover:bg-white hover:text-[#2d545b] transition">
              <FaChevronLeft size={18} />
            </button>
            <button className="thumbs-next absolute z-20 top-1/2 right-3 transform -translate-y-1/2 bg-white/90 p-2 rounded-full shadow border text-[#3A6C74] hover:bg-white hover:text-[#2d545b] transition">
              <FaChevronRight size={18} />
            </button>

            <Swiper
              modules={[Navigation, EffectFade]}
              slidesPerView={1}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              navigation={{
                prevEl: ".thumbs-prev",
                nextEl: ".thumbs-next",
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
                    {/* Icono de lupa */}
                    <div className="absolute top-2 right-3 bg-white p-1.5 rounded-full shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-[#3A6C74]"
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
            <button className="thumbs-prev z-10 p-2 rounded-full bg-white shadow border text-[#3A6C74] hover:text-[#2d545b]">
              <FaChevronLeft size={18} />
            </button>

            <Swiper
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={10}
              navigation={{
                prevEl: ".thumbs-prev",
                nextEl: ".thumbs-next",
              }}
              className="w-full"
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className={`relative w-full h-[80px] rounded-md overflow-hidden cursor-pointer border transition ${
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

            <button className="thumbs-next z-10 p-2 rounded-full bg-white shadow border text-[#3A6C74] hover:text-[#2d545b]">
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Columna derecha: Contenido */}
        <div className="basis-full md:basis-[40%] lg:basis-[35%] p-6 text-black-grand relative">
          <h4 className="TitleSection">{habitacion?.titulo}</h4>
          <br />
          <p className="text-sm text-justify">{habitacion?.descripcion}</p>
          <br />
          <div className="grid grid-cols-2 gap-4 text-[#3A6C74] mb-8">
            <div className="flex items-center gap-2">
              <FaBed className="w-5 h-5" />
              <p className="text-xs">{habitacion?.cama}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaWifi className="w-5 h-5" />
              <p className="text-xs">Wi-Fi gratis</p>
            </div>
            <div className="flex items-center gap-2">
              <FaUsb className="w-5 h-5" />
              <p className="text-xs">Conexiones USB</p>
            </div>
            <div className="flex items-center gap-2">
              <FaTv className="w-5 h-5" />
              <p className="text-xs">TV pantalla plana</p>
            </div>
          </div>

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
            container: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
          }}
          thumbnails={{
            border: 0,
            padding: 4,
          }}
        />
      )}
    </section>
  );
};

export default HabitacionTemplate;
