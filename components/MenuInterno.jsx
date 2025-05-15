'use client';
import React, { useEffect, useState, useRef } from 'react';
import menuData from '@/data/menuinterno.json';
import { usePathname, useRouter } from 'next/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'



const MenuInterno = ({ embedMenu }) => {
  const pathname = usePathname();
  const router = useRouter();
  const lang = pathname.startsWith('/en') ? 'en' : 'es';
  const menuRef = useRef(null);
  const [isStickyMobile, setIsStickyMobile] = useState(false);

  const handleClick = (item) => {
    if (item.href.startsWith('/')) {
      router.push(item.href);
    } else {
      const el = document.querySelector(item.href);
      if (el) {
        const yOffset = -130;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const initialOffsetTop = menu.offsetTop;

    const handleScroll = () => {
      if (window.innerWidth >= 1024) return;
      const scrollY = window.scrollY;
      setIsStickyMobile(scrollY >= initialOffsetTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={menuRef}
      className={`SectionDivInnerMenu ${embedMenu ? 'pt-0' : ''} ${
        isStickyMobile ? 'fixed top-[81px] z-2 w-full bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className={`ContainerFlexOSize relative ${embedMenu ? 'bg-[#f0f0f0]' : 'px-10 py-4'}`}>
        {embedMenu ? (
          <>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            slidesPerView="auto"
            spaceBetween={16}
            className="w-full"
          >
            {menuData[lang].map((item) => {
              return (
                <SwiperSlide key={item.id} className="!w-auto">
                  <li
                    className="MenuInternoItems flex items-center gap-2 text-[12px] cursor-pointer hover:text-secondary-terracota transition whitespace-nowrap"
                    onClick={() => handleClick(item)}
                  >
                    {item.label}
                  </li>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className='absolute w-full'>
                        <button className="custom-prev absolute -left-7 top-1/2 -translate-y-1/2 z-10 text-primary-oceanic/50 hover:text-primary-oceanic">
                          <FiChevronLeft size={28} />
                        </button>
                        <button className="custom-next absolute -right-7 top-1/2 -translate-y-1/2 z-10 text-primary-oceanic/50 hover:text-primary-oceanic">
                          <FiChevronRight size={28} />
                        </button>
                      </div>
                      </>
        ) : (
          <ul className="flex overflow-x-auto no-scrollbar gap-6 p-0 w-full lg:items-center lg:justify-center">
            {menuData[lang].map((item) => {
              return (
                <li
                  key={item.id}
                  className="MenuInternoItems flex-shrink-0 flex font-[500] items-center gap-2 text-sm cursor-pointer  hover:text-secondary-terracota transition"
                  onClick={() => handleClick(item)}
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default MenuInterno;
