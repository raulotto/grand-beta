// components/EventosCard.jsx
'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Navigation  } from "swiper/modules";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FaRulerCombined, FaArrowsAltV, FaUsers } from 'react-icons/fa'

export default function EventosCard({ evento }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white flex flex-col">
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
          <h3 className="text-sm font-semibold">{evento.titulo}</h3>
          <p className="text-xs  mb-2">{evento.nombreHotel}</p>

        </div>

        {/* 3 Características principales */}
        <div className="text-sm text-[#3A6C74] space-y-1 mb-4">
          <div className="flex items-center gap-2">
            <FaRulerCombined className="text-base" />
            <strong>Tamaño:</strong> {evento.tamaño}
          </div>
          <div className="flex items-center gap-2">
            <FaArrowsAltV className="text-base" />
            <strong>Altura:</strong> {evento.altura}
          </div>
          <div className="flex items-center gap-2">
            <FaUsers className="text-base" />
            <strong>Capacidad Max:</strong> {evento.capacidadMax}
          </div>
        </div>

        <Link
          href={evento.urlInterna}
          className="inline-block mt-2 bg-[#3A6C74] text-white py-2 px-4 rounded hover:bg-[#2c5057] transition"
        >
          Ver Sala
        </Link>
      </div>
    </div>
  )
}
