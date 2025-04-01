import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const imageGroups = [
  [
    "../images/Gran-Salon.jpg",
    "../images/Hall-Ascensores.jpg",
    "../images/Lobby.jpg"
  ],
  [
    "../images/Paprika.jpg",
    "../images/Recepcion.jpg",
    "../images/Terraza_foodcourt.jpg"
  ],
  [
    "../images/Walak.jpg",
    "../images/WG-Habitacion-Suite-1-2.jpg",
    "../images/WG-Habitacion-Suite-1-3.jpg"
  ]
];


const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Aplanar las imágenes en un solo array para el lightbox
  const flatImages = imageGroups.flat();

  // Formatear para Lightbox
  const slides = flatImages.map((src) => ({ src }));

  const handleClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="SectionDiv p-0 z-[0] relative">
   <div className="ContainerFull">
    <Swiper
  modules={[Autoplay]}
  spaceBetween={20}
  slidesPerView="auto"
  loop={true}
  speed={7000}
  autoplay={{
    delay: 1, // ¡cambia de 0 a 1 para que funcione al cargar!
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  grabCursor={true}
  className="w-full"
>


        {imageGroups.map((group, groupIndex) => (
          <SwiperSlide key={groupIndex} className="!w-auto">
            <div className="grid grid-cols-3 gap-4">
              {group.map((src, index) => {
                const flatIndex = groupIndex * 3 + index;
                const heights = ["h-[220px]", "h-[220px]", "h-[220px]"];
                const heightClass = heights[index % heights.length];

                return (
                  <img
                    key={index}
                    src={src}
                    alt={`gallery-${flatIndex}`}
                    onClick={() => handleClick(flatIndex)}
                    className={`rounded-lg object-cover w-full cursor-pointer ${heightClass}`}
                  />
                );
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
      />
      </div>
    </div>
  );
};

export default Gallery;
