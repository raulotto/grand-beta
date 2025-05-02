// components/EventosCard.jsx
'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation  } from "swiper/modules";
import { IoResizeSharp } from "react-icons/io5";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { LuUsersRound } from "react-icons/lu";


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FaRulerCombined, FaArrowsAltV, FaUsers } from 'react-icons/fa'

export default function EventosCard({ evento }) {
  return (
    <div className="overflow-hidden shadow-md bg-white flex flex-col">
      {/* Slider de imágenes */}
      <div className="relative w-full h-[140px]">
      <Swiper
  modules={[Pagination, Autoplay]} // <== AÑADIDO
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }} // <== CONFIGURACIÓN
  spaceBetween={0}
  slidesPerView={1}
  className="w-full h-full"
>
          {evento.imagenes.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Imagen de ${evento.titulo}`}
                fill
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Contenido */}
      <div className="p-4 flex-1 flex flex-col justify-between">
      <div>
          <h3 className="text-[16px] GothamBook">{evento.titulo}</h3>
          <p className="text-xs  mb-2">{evento.nombreHotel}</p>

        </div>

        {/* 3 Características principales */}
        <div className="text-sm space-y-1 mb-4">
          <div className="flex items-center gap-2">
          <IoResizeSharp />

            Tamaño: {evento.tamaño}
          </div>
          <div className="flex items-center gap-2">
          <AiOutlineColumnHeight />

            Altura: {evento.altura}
          </div>
          <div className="flex items-center gap-2">
          <LuUsersRound />

            Capacidad Max: {evento.capacidadMax}
          </div>
        </div>

        
        <div className="ButtonInfoStatic">
        <Link
  className="ButtonOutline text-[12px] font-semibold"
  href={evento.urlInterna}
  aria-label="Descubre nuestras habitaciones"
>
Ver detalles
</Link>

  </div>
      </div>
    </div>
  )
}
