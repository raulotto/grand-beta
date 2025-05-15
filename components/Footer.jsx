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
            {/* Logos centrales */}
        <div className="flex justify-center items-center flex-wrap gap-8 border-y border-white/30 py-8 w-full">
          <Image
            src="/images/logo-vertical-mail.png"
            alt="30 años Costa del Sol"
            width={200}
            height={80}
          />
          <Image
            src="/images/tc_2024_botb_badge_green.png"
            alt="Tripadvisor Travelers' Choice"
            width={80}
            height={60}
          />
          <Image
            src="/images/footer/world-travel-award.png"
            alt="World Travel Awards"
            width={85}
            height={60}
          />
          <Image
            src="/images/footer/lux-awards.svg"
            alt="Lux Awards"
            width={90}
            height={50}
          />
        </div>

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