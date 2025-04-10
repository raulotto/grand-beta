import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay  } from "swiper/modules";
import { FaBed, FaUsers, FaRulerCombined } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const HabitacionCard = ({ habitacion }) => {
  const descripcionCorta =
    habitacion.descripcion.length > 150
      ? habitacion.descripcion.substring(0, 150) + "..."
      : habitacion.descripcion;

  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white flex flex-col">
      {/* Swiper Gallery */}
      <div className="relative w-full h-56">
      <Swiper
  modules={[Pagination, Autoplay]} // <== AÑADIDO
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }} // <== CONFIGURACIÓN
  spaceBetween={0}
  slidesPerView={1}
  className="w-full h-full"
>

          {habitacion.imagenes.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img}
                alt={`${habitacion.titulo} imagen ${idx + 1}`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{habitacion.titulo}</h3>
          <p className="text-sm text-gray-700 text-justify">{descripcionCorta}</p>
        </div>

        <div className="mt-4 text-[#3A6C74] text-xs space-y-1">
          <div className="flex items-center gap-2">
            <FaUsers className="w-4 h-4" />
            {habitacion.ocupacion}
          </div>
          <div className="flex items-center gap-2">
            <FaRulerCombined className="w-4 h-4" />
            {habitacion.tamano}
          </div>
          <div className="flex items-center gap-2">
            <FaBed className="w-4 h-4" />
            {habitacion.cama}
          </div>
        </div>

        {habitacion.urlInterna && (
  <Link
    href={habitacion.urlInterna}
    className="mt-4 inline-block text-center bg-primary-oceanic text-white py-2 px-4 rounded text-sm hover:bg-dark-oceanic"
  >
    Ver habitación
  </Link>
)}

      </div>
    </div>
  );
};

export default HabitacionCard;
