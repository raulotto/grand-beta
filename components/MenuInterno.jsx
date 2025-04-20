'use client';
import React from 'react';
import menuData from '@/data/menuinterno.json';
import { usePathname, useRouter } from 'next/navigation';
import * as Icons from "react-icons/fa";



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
        <ul className="flex overflow-x-auto no-scrollbar gap-4 px-4 py-2 w-full lg:items-center lg:justify-center lg:justify-center">
        {menuData.map((item) => {
    const Icon = Icons[item.icon] || Icons.FaQuestionCircle;

    return (
        <li
        key={item.id}
        className="flex-shrink-0 flex flex-col items-center text-sm cursor-pointer hover:text-primary-oceanic transition"
        onClick={() => handleClick(item)}
      >
        <Icon className="w-6 h-6 mb-1 lg:hidden" /> {/* Aquí va el ícono dinámico */}
        {item.label}
      </li>
    );
  })}
</ul>


        </div>
      </section>
    );
  };
  

export default MenuInterno;
