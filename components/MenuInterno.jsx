'use client';
import React, { useEffect, useState, useRef } from 'react';
import menuData from '@/data/menuinterno.json';
import { usePathname, useRouter } from 'next/navigation';
import * as FaIcons from 'react-icons/fa';
import * as CiIcons from 'react-icons/ci';
import * as io5Icons from 'react-icons/io5';
import * as GrIcons from 'react-icons/gr';

const iconMap = {
  ...FaIcons,
  ...CiIcons,
  ...io5Icons,
  ...GrIcons,
};

const MenuInterno = ({ embedMenu }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isEnglish = pathname.startsWith('/en');
  const lang = isEnglish ? 'en' : 'es';
  const menuRef = useRef(null);
  const [isStickyMobile, setIsStickyMobile] = useState(false);

  const handleClick = (item) => {
    if (item.href) {
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
        isStickyMobile ? 'fixed top-[81px] z-2 w-full bg-white shadow-md' : ''
      }`}
    >
      <div className={`ContainerFlexOSize ${embedMenu ? 'bg-[#f0f0f0]' : 'px-10 py-4'}`}>
        <ul className="flex overflow-x-auto no-scrollbar gap-6 p-0 w-full lg:items-center lg:justify-center">
          {menuData[lang].map((item) => {
            const Icon = iconMap[item.icon] || FaIcons.FaQuestionCircle;
            return (
              <li
                key={item.id}
                className="flex-shrink-0 flex flex-col-2 gap-2 items-center text-sm cursor-pointer hover:text-primary-oceanic transition"
                onClick={() => handleClick(item)}
              >
                <Icon className="w-6 h-6 lg:hidden" />
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
