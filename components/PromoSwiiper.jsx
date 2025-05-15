'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import promos from '@/data/promos.json';
import { usePathname } from 'next/navigation';

export default function PromoSwiper() {
  const pathname = usePathname();
  const lang = pathname.startsWith('/en') ? 'en' : 'es';
  const data = promos[lang];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 }
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={item.img}
                  alt={item.alt}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
