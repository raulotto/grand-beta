'use client';
import React from 'react';
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
import lang from '@/data/footerCds.json';

const Footer = () => {
  const pathname = usePathname();
  const currentLang = pathname.startsWith('/en') ? 'en' : 'es';
  const t = lang[currentLang];

  return (
    <footer className="bg-support-iron/70 SectionDiv">
      <div className="ContainerFlex flex-col">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          {/* Logo */}
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/images/logo-vertical-mail.png"
              alt="Logo"
              width={200}
              height={130}
            />
          </div>

          {/* Navegación principal */}
          <div className="flex flex-col gap-2">
            {t.nav.map((item, i) => (
              <Link key={i} href="#">{item}</Link>
            ))}
          </div>

          {/* Atención al cliente */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold">{t.customer.title}</span>
            {t.customer.links.map((item, i) => (
              <Link key={i} href="#">{item}</Link>
            ))}
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col gap-2">
            <span className="uppercase tracking-widest text-sm mb-1">{t.social}</span>
            <div className="flex gap-4 text-lg">
              <Link href="#"><FaFacebookF /></Link>
              <Link href="#"><FaInstagram /></Link>
              <Link href="#"><FaYoutube /></Link>
              <Link href="#"><FaLinkedinIn /></Link>
              <Link href="#"><FaTiktok /></Link>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/30 mx-auto max-w-7xl" />

        {/* Textos inferiores */}
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
