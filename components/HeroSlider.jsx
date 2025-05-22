"use client";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
import sliderData from "@/data/heroSlider.json";
import { LuMouse } from "react-icons/lu";
import Link from 'next/link'

export default function HeroSlider({ page = "home" }) {
  const { pathname } = useRouter();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const slideSet = sliderData[lang].find((entry) => entry.page === page);
  const slides = slideSet?.slides || [];
  const sliderId = slideSet?.id || "";



  return (
    <div className="w-full h-[80vh] relative" id={sliderId}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        navigation
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={false}
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className={`swiper-slide-${i}`}>
            <div className="relative w-full h-[80vh]">
              <Image
                src={slide.src}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover"
                priority
              />

              {(slide.titulo || slide.subtitulo || slide.ctaTexto || slide.arte) && (
                <div className={`HeroSliderData ${slide.claseExtra || ""}`}>
                  <div
                    className={`ContainerFlexSlider LightSlider text-shadow ${
                      slide.alineacion === "izquierda"
                        ? "items-start text-left"
                        : slide.alineacion === "derecha"
                        ? "items-end text-right"
                        : "items-center text-center"
                    }`}
                  >
                    {slide.titulo && (
                      <h3 className="text-2xl md:text-4xl text-white">{slide.titulo}</h3>
                    )}
                    {slide.subtitulo && (
                      <p className="mt-2 text-lg md:text-xl text-white">{slide.subtitulo}</p>
                    )}
                    {slide.arte && (
                      <Image
                        src={slide.arte}
                        width={600}
                        height={300}
                        alt="Arte del slide"
                        className="artImage"
                      />
                    )}
                    {slide.ctaTexto && slide.ctaLink && (
                      <a
                        href={slide.ctaLink}
                        className="mt-4 px-6 py-2 bg-secondary-terracota text-white hover:bg-[#2c5057]"
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

      {/* Botón de scroll con ícono */}
      <Link
  href="#next-section"
  scroll={false}
  onClick={(e) => {
    e.preventDefault()
    if (typeof window !== "undefined") {
      const target = document.getElementById("next-section")
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }}
  className="cursor-pointer absolute bottom-6 left-1/2 -translate-x-1/2 z-1 text-white hover:text-gray-300 transition-colors"
  aria-label="Scroll down"
>
  <LuMouse size={32} className="animate-bounce" />
</Link>


    </div>
  );
}
