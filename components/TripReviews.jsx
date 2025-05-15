'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import reviewsData from '@/data/tripReviews.json';
import { FaTripadvisor, FaStar, FaRegStar } from 'react-icons/fa';

export default function TripReviews() {
  const pathname = usePathname();
  const lang = pathname.startsWith('/en') ? 'en' : 'es';
  const reviews = reviewsData[lang] || [];

    // refs para botones de navegación
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  

  return (
    <section className="SectionDiv BgConections">
      <div className="ContainerFlex justify-between items-center relative">
        {/* Icono fijo de TripAdvisor */}
        <div className="w-full lg:w-1/4 flex flex-col items-center">
                  <Image
                    src="/images/tripadvisor-seeklogo.png"
                    alt="TripAdvisor"
                    width={80}
                    height={120}
                    className="object-contain"
                  />
        </div>
{/* Controles de navegación personalizados */}

        {/* Slider de reseñas */}
        <div className="w-full lg:w-3/4 lg:pl-8 relative">
        <div className="absolute w-full top-1/2 lg:right-8 flex space-x-4 transform -translate-y-1/2 z-10">
          <button ref={prevRef} className="absolute left-[-30] lg:left-0"><FaChevronLeft />
          </button>
          <button ref={nextRef} className="absolute right-[-30] lg:right-0"><FaChevronRight />
          </button>
        </div>
        <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop
            speed={700}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
          >
            {reviews.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="lg:flex  backdrop-blur-sm text-gray-800 rounded-lg items-center gap-8">
                   <div className='w-full lg:w-auto lg:flex w-1/3'>
                        <h3 className="TitleSection">{item.title}</h3>
                    
                    </div> 
                    <div className='w-full lg:w-2/3 border-t-1 lg:border-l-1 lg:border-t-0 lg:pl-8 lg:pr-12'>
                    <p className="mt-2">{item.comment}</p>
                  <div className="TaUsuario mt-4 flex items-center justify-between">
                    <span className="font-medium">- {item.author}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) =>
                        i < item.rating ? (
                          <FaStar key={i} className="mr-1" />
                        ) : (
                          <FaRegStar key={i} className="mr-1" />
                        )
                      )}
                    </div>
                  </div>
                    </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
