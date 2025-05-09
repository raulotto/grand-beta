'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';
import lang from '@/data/footer.json';
import SocialIcons from '@/components/SocialIcons';

const Footer = () => {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState('es');

  useEffect(() => {
    setCurrentLang(pathname.startsWith('/en') ? 'en' : 'es');
  }, [pathname]);

  const t = lang[currentLang];

  return (
    <footer className="bg-[#40666a] SectionDiv">
      <div className="ContainerFlex flex-col">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
          {/* Nuestros Hoteles */}
          <div className="flex flex-col gap-2 FooterColumns">
            <span className="font-semibold">{t.hoteles.title}</span>
            {t.hoteles.links.map((item, i) => (
              <Link key={i} href={item.href || '#'}>{item.label}</Link>
            ))}
          </div>

          {/* Sobre nosotros */}
          <div className="flex flex-col gap-2 FooterColumns">
            <span className="font-semibold">{t.about.title}</span>
            {t.about.links.map((item, i) => (
              <Link key={i} href={item.href || '#'}>{item.label}</Link>
            ))}
          </div>

          {/* Atención al cliente */}
          <div className="flex flex-col gap-2 FooterColumns">
            <span className="font-semibold">{t.customer.title}</span>
            {t.customer.links.map((item, i) => (
              <Link key={i} href="#">{item}</Link>
            ))}
          </div>
            {/* Atención al cliente */}
          <div className="flex flex-col gap-2 FooterColumns">
            <span className="font-semibold">{t.revolt.title}</span>
            {t.customer.links.map((item, i) => (
              <Link key={i} href="#">{item}</Link>
            ))}
          </div>
          {/* Redes sociales */}
          <div className="flex flex-col gap-2 FooterColumns">
            <span className="uppercase tracking-widest text-sm mb-1">{t.social}</span>
            <SocialIcons />
          </div>
        </div>

        <div className="border-t border-white/30 mx-auto max-w-7xl mt-6" />

        <div className="text-center text-xs text-white/80 py-6 px-4 space-y-2">
          <div className="space-x-2">
            {t.legal.map((item, i) => (
              <React.Fragment key={i}>
                <Link href="#">{item}</Link>
                {i < t.legal.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="text-white mt-10">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;