'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import lang from '@/data/lang';

const Parallax = () => {
  const pathname = usePathname();
  const currentLang = pathname.startsWith('/en') ? 'en' : 'es';
  const t = lang[currentLang];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className={`ContainerFull bg-fixed bg-center bg-cover bg-no-repeat relative items-center lg:items-end h-[20vh] lg:h-[60vh] ${
        isMobile ? 'bg-parallax-mobile' : 'bg-parallax-desktop'
      }`}
    >
      <div className="ContainerFlex justify-start lg:justify-end p-0">
        <h4 className="text-[1.5em] lg:text-[2.5em] text-white z-1">{t.restaurantsTitle}</h4>
        <div className="OverlayDiv"></div>
      </div>
    </div>
  );
};

export default Parallax;
