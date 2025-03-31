import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const imageGroups = [
  [
    "https://picsum.photos/id/1015/500/300",
    "https://picsum.photos/id/1016/400/500",
    "https://picsum.photos/id/1018/600/400"
  ],
  [
    "https://picsum.photos/id/1024/480/320",
    "https://picsum.photos/id/1021/530/330",
    "https://picsum.photos/id/1027/460/360"
  ],
  [
    "https://picsum.photos/id/1035/420/500",
    "https://picsum.photos/id/1040/640/480",
    "https://picsum.photos/id/1031/500/420"
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
    <div className="w-full overflow-hidden">
   
    <Swiper
  modules={[Autoplay]}
  spaceBetween={32}
  slidesPerView="auto"
  loop={true}
  speed={118000}
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
            <div className="inline-flex gap-4">
              {group.map((src, index) => {
                const flatIndex = groupIndex * 3 + index;
                const heights = ["h-[160px]", "h-[220px]", "h-[280px]"];
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
  );
};

export default Gallery;
