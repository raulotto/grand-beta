'use client';
import React from 'react';
import Image from 'next/image';
import HeaderTrad from '@/components/HeaderTrad';
import HeroSlider from '@/components/HeroSlider';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import eventosData from '@/data/eventos.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaRulerCombined, FaArrowsAltV, FaUsers } from 'react-icons/fa';

export default function ElLoroSala() {
  const eventos = Array.isArray(eventosData) ? eventosData : eventosData.default;
  const sala = eventos.find((s) => s.id === 'el-colibri');

  const disposiciones = sala?.disposiciones || [];

  return (
    <>
<HeaderTrad modoClaro />

      <section className="SectionDiv">
        <div className="ContainerFlex flex-col lg:flex-row gap-12 items-start">
          {/* Galería */}
          <div className="w-full lg:w-1/2">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop
              className="w-full h-[350px] rounded overflow-hidden"
            >
              {sala.imagenes.map((src, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={src}
                    alt={`${sala.titulo} imagen ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Info principal */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold">{sala.titulo}</h2>
              <p className="text-gray-600 text-sm mt-1">Costa del Sol Wyndham Lima City</p>

              <div className="mt-4 space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <FaRulerCombined className="text-primary-oceanic" />
                  <strong>Tamaño:</strong> 140 m²
                </div>
                <div className="flex items-center gap-2">
                  <FaArrowsAltV className="text-primary-oceanic" />
                  <strong>Altura:</strong> 3.1 mts
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-primary-oceanic" />
                  <strong>Capacidad Max:</strong> 120 personas
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-700 leading-relaxed">{sala.descripcion}</p>
            </div>
          </div>

          {/* Disposiciones */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-lg font-semibold mb-4">Disposiciones disponibles:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {disposiciones.map((item, index) => (
                <div key={index} className="border rounded p-3 text-center shadow-sm">
                  <Image
                    src={item.icono}
                    alt={item.nombre}
                    width={100}
                    height={100}
                    className="justify-center mx-auto"
                  />
                  <p className="text-sm font-medium">{item.nombre}</p>
                  <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
                    <FaUsers className="text-xs" /> {item.capacidad}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
