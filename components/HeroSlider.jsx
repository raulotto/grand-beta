// components/HeroSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Image from "next/image";

const images = [
  "https://www.costadelsolperu.com/wp-content/uploads/2025/01/back-new-hotel-render.jpg",
  "https://www.costadelsolperu.com/wp-content/uploads/2025/01/Gran-Salon.jpg",
  "https://www.costadelsolperu.com/wp-content/uploads/2025/01/Terraza_foodcourt.jpg",
];

export default function HeroSlider() {
    return (
      <div className="w-full h-screen relative">
        <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="h-full"
        >

          {/* 👇 Overlay debe ir antes de los slides */}
          <div className="OverlayHeader" />
  
          {/* Slides */}
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
  
