import HotelCard from "./HotelCard ";
import hotelCards from "../data/hotelCards.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // para Swiper v9+

import "swiper/css";

const HotelesGrid = () => {
  return (
    <section className="SectionDiv">
      <h2 className="text-2xl font-semibold mb-6">Encuentra un destino especial</h2>
    <div className="ContainerFlex">
      {/* Mobile Carousel */}
      <div className="lg:hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 350, // 2.5 segundos
            disableOnInteraction: false, // sigue moviéndose aunque lo toques
          }}
          speed={1600}
          grabCursor={true}
          className=" w-[300px]"
        
          
          breakpoints={{
            640: {
              slidesPerView: 2.2,
            },
            768: {
              slidesPerView: 3.2,
            },
          }}
        >
          {hotelCards.map((hotel, index) => (
            <SwiperSlide key={index} className=" !w-[230px]">
            <HotelCard
              href={hotel.href}
              image={hotel.image}
              badge={hotel.badge}
              title={hotel.title}
              city={hotel.city}
              tags={hotel.tags}
            />
          </SwiperSlide>
          
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {hotelCards.map((hotel, index) => (
            <HotelCard
              key={index}
              href={hotel.href}
              image={hotel.image}
              badge={hotel.badge}
              title={hotel.title}
              city={hotel.city}
              tags={hotel.tags}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default HotelesGrid;
