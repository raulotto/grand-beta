'use client';
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
import sliderData from "@/data/heroSlider.json";
import { LuMouse } from "react-icons/lu";
import Link from "next/link";
import { BASE_PATH } from "@/utils/config";
import { FaPlay, FaPause } from "react-icons/fa";

export default function HeroSlider({ page = "home" }) {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const slideSet = sliderData[lang].find(entry => entry.page === page);
  const slides = slideSet?.slides || [];
  const sliderId = slideSet?.id || "";

  const slidesWithBasePath = slides.map(slide => ({
    ...slide,
    src: `${BASE_PATH}${slide.src}`,
    arte: slide.arte ? `${BASE_PATH}${slide.arte}` : null,
  }));

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full h-[80vh] relative" id={sliderId}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        navigation
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={false}
        className="h-full"
      >
        {slidesWithBasePath.map((slide, i) => {
          const isVideo = slide.src.endsWith(".mp4");

          return (
            <SwiperSlide key={i} className={`swiper-slide-${i}`}>
              <div className="relative w-full h-[80vh]">
                {isVideo ? (
                  <div className="relative w-full h-full">
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="object-cover w-full h-full absolute top-0 left-0"
                    >
                      <source src={slide.src} type="video/mp4" />
                    </video>
                    <button
                      onClick={toggleVideo}
                      className="absolute bottom-3 right-3 z-[20] bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      aria-label="Play or Pause video"
                    >
                      {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
                    </button>
                  </div>
                ) : (
                  <Image
                    src={slide.src}
                    alt={`Slide ${i + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                )}

                {(slide.titulo || slide.segtitulo || slide.subtitulo || slide.ctaTexto || slide.arte) && (
                  <div className={`HeroSliderData ${slide.claseExtra || ""}`}>
                    <div className={`ContainerFlexSlider LightSlider text-shadow ${
                      slide.alineacion === "izquierda" ? "items-start text-left" :
                      slide.alineacion === "derecha" ? "items-end text-right" :
                      "items-center text-center"
                    }`}>
                      {slide.titulo && Array.isArray(slide.titulo) ? (
                        <h3 className="text-2xl md:text-4xl text-white">
                          {slide.titulo.map((line, index) => (
                            <span key={index}>
                              {line}
                              {index < slide.titulo.length - 1 && (
                                <>
                                  <span className="hidden lg:inline"><br /></span>
                                  <span className="inline lg:hidden">&nbsp;</span>
                                </>
                              )}
                            </span>
                          ))}
                        </h3>
                      ) : (
                        <h3 className="text-2xl md:text-4xl text-white">{slide.titulo}</h3>
                      )}

                      {slide.segtitulo && <h4 className="text-[1.5rem] text-white">{slide.segtitulo}</h4>}
                      {slide.subtitulo && <p className="mt-2 text-lg md:text-xl text-white">{slide.subtitulo}</p>}
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
                        <Link
                          href={slide.ctaLink}
                          target={slide.target || "_self"}
                          rel={slide.target === "_blank" ? "noopener noreferrer" : undefined}
                          className="mt-4 px-6 py-2 bg-secondary-terracota text-white hover:bg-[#2c5057]"
                        >
                          {slide.ctaTexto}
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Scroll Button */}
      <Link
        href="#next-section"
        scroll={false}
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById("next-section");
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className="cursor-pointer absolute bottom-6 left-1/2 -translate-x-1/2 z-[15] text-white hover:text-gray-300 transition-colors"
        aria-label="Scroll down"
      >
        <LuMouse size={32} className="animate-bounce" />
      </Link>
    </div>
  );
}
