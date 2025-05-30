"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaBed,
  FaWifi,
  FaUsb,
  FaTv,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import BotonHabitacion from "./BotonHabitacion";
import data from "@/data/habitaciones.json";

const habitacion = data.find((h) => h.id === "matrisup");

const MatriSup = ({ isDetalle = false }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([
      "/images/WG-Habitacion-King-1.jpg",
      "/images/WG-Habitacion-King-2.jpg",
      "/images/WG-Habitacion-King-3.jpg",
      "/images/WG-Habitacion-King-4.jpg",
      "/images/WG-Habitacion-King-5.jpg",
    ]);
  }, []);

  return (
    <section className="SectionDiv pt-5">
      <div className="ContainerFlex">
        {/* Columna izquierda con imágenes */}
        <div className="flex-1 max-w-xl lg:max-w-2xl relative">
          <div className="relative z-0 w-full h-[420px]">
            <div
              className="relative w-full h-full rounded-lg overflow-hidden shadow-md z-10 cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            >
              <Image
                src={images[selectedIndex] || "/images/default.jpg"}
                alt={`Imagen ${selectedIndex + 1}`}
                fill
                className="object-cover"
                loading="lazy"
              />
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
              onSlideChange={(swiper) => setSelectedIndex(swiper.realIndex)}
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
                    onClick={() => setSelectedIndex(idx)}
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

        {/* Columna derecha */}
        <div className="basis-full md:basis-[40%] lg:basis-[35%] p-6 text-black-grand relative">
          <h4 className="TitleSection">Matrimonial Superior</h4>
          <br />
          <p className="text-sm text-justify">
            Nuestra habitación estándar matrimonial de 32 m² combina confort, estilo y
            funcionalidad. Con tonos tierra y texturas suaves, la cama King garantiza un
            descanso reparador, mientras que el chaise lounge junto a la ventana ofrece un
            rincón para relajarse. Equipada con Smart TV LED de 55 pulgadas y baño privado con
            ducha amplia y amenidades premium, esta habitación es perfecta para quienes
            buscan una estancia cómoda y sofisticada.
          </p>
          <br />
          <div className="grid grid-cols-2 gap-4 text-[#3A6C74] mb-8">
            <div className="flex items-center gap-2">
              <FaBed className="w-5 h-5" />
              <p className="text-xs">1 cama king o 2 dobles</p>
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

          <BotonHabitacion habitacion={habitacion} isDetalle={isDetalle} />
        </div>
      </div>

      {/* Lightbox */}
      {images.length > 0 && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          closeOnBackdropClick={true}
          slides={images.map((src) => ({ src }))}
          index={selectedIndex}
        />
      )}
    </section>
  );
};

export default MatriSup;
