import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { CiRuler } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

import { IoBedOutline, IoPeopleOutline } from "react-icons/io5";
import lang from "@/data/lang";

import "swiper/css";
import "swiper/css/pagination";
import useIdioma from "@/hooks/useIdioma";

const HabitacionCard = ({ habitacion }) => {
  const idioma = useIdioma("habitaciones");
  if (!idioma) return null;


  const pathname = usePathname();
const currentLang = pathname.startsWith("/en") ? "en" : "es";
const t = lang[currentLang];
  return (
    <div className="overflow-hidden shadow-md bg-white flex flex-col">
      <div className="relative w-full h-56">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
          <h3 className="text-sm font-semibold">{habitacion.titulo}</h3>
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

        {habitacion?.servicios?.length > 0 && (
          <>
            <h3 className="text-xs font-semibold mt-5! mb-2!">
              {t.roomServicesTitle}
            </h3>
            <div className="CardExtraServices">
              {habitacion.servicios.map((servicio, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <IoCheckmark   className="w-4 h-4 text-primary-oceanic" />
                  {servicio}
                </div>
              ))}
            </div>
          </>
        )}

        <div className="CardButtons">
          {habitacion.urlInterna && (
            <Link
              href={habitacion.urlInterna}
              className="mt-2 flex justify-center items-center text-center text-oceanic-primary underline text-sm"
            >
              {t.roomSeeMore} <IoChevronForward  />

            </Link>
          )}
          {habitacion.urlReserva && (
            <Link
              href={habitacion.urlReserva}
              target="_blank"
              rel="noopener noreferrer"
              className="ButtonOutline text-[10px] font-semibold"
            >
              {t.roomBook}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HabitacionCard;
