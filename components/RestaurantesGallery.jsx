'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, EffectFade } from 'swiper/modules'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Counter from 'yet-another-react-lightbox/plugins/counter'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

const images = [
    {
        src: '/images/wg-terraza_foodcourt.jpg',
        alt: 'Restaurante 1',
      },
      {
        src: '/images/wg-paprika.jpg',  
        alt: 'Restaurante 2',
      },
]

export default function RestaurantesGallery() {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const openLightbox = (i) => {
    setIndex(i)
    setIsOpen(true)
  }

  return (
    <section className="SectionDiv py-0">
      <div className="ContainerFlex p-0 flex-col items-center">
        <div className="relative w-full max-w-6xl mx-auto rounded-lg overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
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
                <div
                  className="relative w-full h-[500px] cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
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

          {/* Contador y flechas */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#1f3c2e] text-white px-4 py-1 rounded-full flex items-center gap-4 text-sm font-semibold z-1">
            <button className="custom-prev px-1 text-lg">{'‹'}</button>
            <span>{index + 1} / {images.length}</span>
            <button className="custom-next px-1 text-lg">{'›'}</button>
          </div>
        </div>

        {/* Lightbox con thumbnails y contador */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={index}
          slides={images.map((img) => ({ src: img.src }))}
          plugins={[Thumbnails, Counter]}
          animation={{ fade: 300 }}
          styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' } }}
        />
      </div>
    </section>
  )
}
