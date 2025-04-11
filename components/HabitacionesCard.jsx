import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay  } from "swiper/modules";
import { CiRuler } from "react-icons/ci";
import { IoBedOutline, IoPeopleOutline  } from "react-icons/io5";

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
          <h3 className="text-sm font-semibold mb-2">{habitacion.titulo}</h3>
          <p className="text-xs text-gray-700">{descripcionCorta}</p>
        </div>

        <div className="CardServices">
          <div className="flex items-center gap-2">
            <IoPeopleOutline className="w-4 h-4" />
            {habitacion.ocupacion}
          </div>
          <div className="flex items-center gap-2">
            <CiRuler className="w-4 h-4" />
            {habitacion.tamano}
          </div>
          <div className="flex items-center gap-2">
            <IoBedOutline className="w-4 h-4" />
            {habitacion.cama}
          </div>
        </div>

        {habitacion.urlInterna && (
  <Link
    href={habitacion.urlInterna}
    className="mt-4 inline-block text-center bg-primary-oceanic text-white py-2 px-4 rounded text-sm hover:bg-dark-oceanic"
  >
    Ver más
  </Link>
)}

      </div>
    </div>
  );
};

export default HabitacionCard;
