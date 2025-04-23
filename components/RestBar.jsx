'use client'
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

const imagenes = [
  "/images/wg-paprika.jpg",
  "/images/Costa-del-sol-Desayuno-buffet-mobile.jpg",
  "https://www.costadelsolperu.com/wp-content/uploads/2022/10/Hotel_Costa_del_Sol_wyndham_Lima_galeria-2022-10.jpg"
]

const RestBar = () => {
  return (
    <section id="restaurantes" className="SectionDiv py-0 BgImageLeft">
      <div className="ContainerFlex flex-col-reverse lg:flex-row">

        {/* Contenedor de texto */}
        <div className="flex-1 max-w-md lg:max-w-lg">
          <div>
            <h6 className="suptitle">Servicios de primera clase</h6>
            <h4 className="TitleSection">Comer & Beber</h4>
            <div className="divider-line"></div>
          </div>
          <div className="mx-auto">
            <p className="text-parrafos">
              En Wyndham Grand Costa del Sol Lima Airport descubre lo mejor de la reconocida gastronomía peruana en 
              ambientes sofisticados y con un servicio excepcional. Comienza el día con un desayuno buffet que combina 
              clásicos peruanos y favoritos internacionales en nuestro restaurante de cocina global abierto todo el día.
              Disfruta de cócteles cuidadosamente elaborados, una selección de vinos, licores y bebidas sin alcohol en 
              nuestro elegante bar 24/7, o prueba auténticos sabores locales en nuestro snack bar de comida callejera 
              peruana, perfecto para viajeros en movimiento. Y para la máxima comodidad, nuestro room service 24/7 te 
              lleva lo mejor de la gastronomía peruana directamente a tu habitación.
            </p>
            <div className="ButtonInfoStatic mt-4">
              <Link className="ColorButton1 ButtonRounded" href="/grand/restaurantes" aria-label="Descubre nuestras habitaciones">
                Ver restaurantes y bares
              </Link>
            </div>
          </div>
        </div>

        {/* Imagen deslizable con Swiper */}
        <div className="w-full md:max-w-lg">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            effect="fade"
            className="relative w-full h-[200px] md:h-[400px] rounded-lg overflow-hidden"
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
  )
}

export default RestBar
