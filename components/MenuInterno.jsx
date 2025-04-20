'use client';
import React from 'react';
import menuData from '@/data/menuinterno.json';
import { usePathname, useRouter } from 'next/navigation';

const MenuInterno = ({ embedMenu }) => {
    const pathname = usePathname();
    const router = useRouter();
  
    const isEnglish = pathname.startsWith('/en');
  
    const handleClick = (item) => {
      if (isEnglish && item.href) {
        router.push(item.href);
      } else {
        const el = document.getElementById(item.id);
        if (el) {
          const yOffset = -130;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };
  
    return (
      <section
        className={`SectionDivInnerMenu ${
          embedMenu ? "pt-0" : ""
        }`}
      >
        <div className="ContainerFlexOSize">
          <ul className="w-full flex flex-col lg:flex-row gap-2 lg:gap-5 items-center justify-center lg:justify-center">
            {menuData.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer hover:text-primary-oceanic transition"
                onClick={() => handleClick(item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  

export default MenuInterno;
