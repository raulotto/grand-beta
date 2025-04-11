"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Image from "next/image";
import sliderData from "@/data/heroSlider.json";

export default function HeroSlider({ page = "home" }) {
  const slideSet = sliderData.find((entry) => entry.page === page);
  const slides = slideSet?.slides || [];

  return (
    <div className="w-full h-[60vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[60vh]">
              <Image
                src={slide.src}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover"
                priority
              />

              {(slide.titulo || slide.subtitulo || slide.ctaTexto) && (
                <div className="HeroSliderData">
                  <div className="ContainerFlexSlider LeftData LightSlider text-shadow">
                  {slide.titulo && (
                    <h3 className="text-2xl md:text-4xl font-bold">{slide.titulo}</h3>
                  )}
                  {slide.subtitulo && (
                    <p className="mt-2 text-lg md:text-xl">{slide.subtitulo}</p>
                  )}
                  {slide.ctaTexto && slide.ctaLink && (
                    <a
                      href={slide.ctaLink}
                      className="mt-4 px-6 py-2 bg-[#3A6C74] rounded text-white hover:bg-[#2c5057]"
                    >
                      {slide.ctaTexto}
                    </a>
                  )}
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
