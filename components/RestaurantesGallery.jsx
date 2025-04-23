'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Lightbox from 'yet-another-react-lightbox'
import 'swiper/css'
import 'yet-another-react-lightbox/styles.css'

const images = [
  {
    src: '/images/wg-terraza_foodcourt.jpg',
    alt: 'Restaurante 1',
  },
  {
    src: '/images/wg-paprika.jpg',  
    alt: 'Restaurante 2',
  },
  
  // agrega más si deseas
]

export default function RestaurantesGallery() {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const openLightbox = (i) => {
    setIndex(i)
    setIsOpen(true)
  }

  return (
    <section className="SectionDiv">
      <div className="ContainerFlex flex-col items-center">
        <div className="relative w-full max-w-6xl mx-auto rounded-lg overflow-hidden pb-4">
          <Swiper
            modules={[Navigation]}
            loop
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            onSlideChange={(swiper) => setIndex(swiper.realIndex)}
            className="rounded-lg"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-[550px] cursor-pointer" onClick={() => openLightbox(i)}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Contador + Flechas */}
          <div className="absolute bottom-[1] left-1/2 transform -translate-x-1/2 bg-[#1f3c2e] z-2 text-white px-4 py-1 rounded-full flex items-center gap-4 text-sm font-semibold">
            <button className="custom-prev px-1 text-lg">{'‹'}</button>
            <span>{index + 1} / {images.length}</span>
            <button className="custom-next px-1 text-lg">{'›'}</button>
          </div>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={index}
          slides={images.map((img) => ({ src: img.src }))}
          animation={{ fade: 250 }}
        />
      </div>
    </section>
  )
}
