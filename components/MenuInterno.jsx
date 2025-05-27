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

const [activeHash, setActiveHash] = useState('');

const handleClick = (item) => {
  if (item.href.startsWith('/')) {
    router.push(item.href);
  } else {
    const el = document.querySelector(item.href);
    if (el) {
      const yOffset = -130;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveHash(item.href); // 🔥 Marca como activo
    }
  }
};


useEffect(() => {
  const menu = menuRef.current;
  if (!menu) return;

  const initialOffsetTop = menu.offsetTop;

  const handleScroll = () => {
    if (window.innerWidth < 1024) {
      setIsStickyMobile(window.scrollY >= initialOffsetTop);
    }

    const offsets = menuData[lang]
      .filter(item => item.href.startsWith('#'))
      .map(item => {
        const el = document.querySelector(item.href);
        if (!el) return null;
        const top = el.getBoundingClientRect().top;
        return { href: item.href, top: Math.abs(top - 150) }; // margen de tolerancia
      })
      .filter(Boolean);

    if (offsets.length > 0) {
      const closest = offsets.reduce((prev, curr) =>
        curr.top < prev.top ? curr : prev
      );
      setActiveHash(closest.href);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [lang]);



  
  return (
    <section
      ref={menuRef}
      className={`SectionDivInnerMenu ${embedMenu ? 'pt-0' : ''} ${
        isStickyMobile ? 'fixed top-[81px] z-2 w-full bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className={`px-0! ContainerFlexOSize relative ${embedMenu ? 'bg-[#f0f0f0]' : 'px-10 py-0'}`}>
        
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
                    className={`MenuInternoItems flex items-center gap-2 text-[12px] cursor-pointer hover:text-secondary-terracota transition whitespace-nowrap ${activeHash === item.href
          ? 'text-secondary-terracota border-b-2 border-secondary-terracota'
          : 'text-gray-500'
        }`}
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
        ) : (<>
          <ul className="hidden lg:flex overflow-x-auto no-scrollbar gap-6 p-0 w-full lg:items-center lg:justify-center">
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
          <ul className="lg:hidden flex overflow-x-auto no-scrollbar px-2 py-2 w-full bg-white border-t border-gray-200 shadow-sm gap-0">
  {menuData[lang].map((item) => (
    <li
      key={item.id}
      onClick={() => handleClick(item)}
      className={`text-sm font-medium px-4 py-2 border-0 cursor-pointer whitespace-nowrap transition-all
        ${
          activeHash === item.href
            ? 'text-secondary-terracota border-secondary-terracota bg-[#fff7ef] border-b-2'
            : 'text-gray-700 border-gray-300 bg-white border-r-1'
        }`}
    >
      {item.label}
    </li>
  ))}
</ul>


          </>
        )}
      </div>
    </section>
  );
};

export default MenuInterno;
