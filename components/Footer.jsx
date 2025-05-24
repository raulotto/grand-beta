'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import lang from '@/data/footer.json';
import SocialIcons from '@/components/SocialIcons';
import { FaChevronDown } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useBooking } from "@/context/BookingContext";


const Footer = () => {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState('es');
  const [isMobile, setIsMobile] = useState(false);
  const [openSections, setOpenSections] = useState({});
    const booking = useBooking();
  
  const { showForm, setShowForm, formIsSticky } = useBooking();

  useEffect(() => {
    setCurrentLang(pathname.startsWith('/en') ? 'en' : 'es');
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
 const iconMap = {
  'fa-location-dot': FaMapMarkerAlt, // Mapea correctamente
  'fa-phone': FaPhoneAlt,
  'fa-envelope': FaEnvelope
};

  
  const t = lang[currentLang];

  const FooterSection = ({ title, links, id, contact }) => (
    <div className="FooterColumn border-b lg:border-0 border-white/20 pb-4">
      <button
        onClick={() => toggleSection(id)}
        className="uppercase w-full text-left flex justify-between items-center text-white"
      >
        {title}
        {isMobile && (
          <FaChevronDown
            className={`ml-2 transition-transform duration-300 ${openSections[id] ? 'rotate-180' : ''}`}
          />
        )}
      </button>
  
      <AnimatePresence initial={false}>
        {(!isMobile || openSections[id]) && (
          <motion.div
            key={id}
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: 800, opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden mt-2 flex flex-col gap-2"
          >
            {links?.map((item, i) => (
              <Link
              className="FooterColumns"
              key={i}
              href={item.href || '#'}
              target={item.target || '_self'}
              rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
            >
              {item.label || item}
            </Link>
            
            ))}
  

  {contact?.items?.length > 0 && (
  <>
    {contact.items.map((item, i) => {
      const IconComponent = iconMap[item.icon];
      return item.href ? (
        <Link
  key={i}
  href={item.href}
  target={item.target || '_self'}
  rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
  className="flex items-start gap-2 text-white hover:underline"
>

          {IconComponent && (
            <span className="text-color-prif-color mt-1">
              <IconComponent size={14} />
            </span>
          )}
          <span dangerouslySetInnerHTML={{ __html: item.text }} />
        </Link>
      ) : (
        <div key={i} className="flex items-start gap-2 text-white">
          {IconComponent && (
            <span className="text-color-prif-color mt-1">
              <IconComponent size={14} />
            </span>
          )}
          <span dangerouslySetInnerHTML={{ __html: item.text }} />
        </div>
      );
    })}
  </>
)}


          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
  const [showFooterBooking, setShowFooterBooking] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.innerWidth < 1024) {
      setShowFooterBooking(window.scrollY > 20);
    } else {
      setShowFooterBooking(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll); // también evalúa en cambio de tamaño

  handleScroll(); // llama una vez al iniciar

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, []);


  return (
    <>
    <AnimatePresence>
  {showFooterBooking && (
    <motion.section
      id="FooterBooking"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="SectionDiv p-0 fixed bottom-0 z-2 bg-white w-full block lg:hidden shadow-md"
    >
      <div className="ContainerFlex p-0">
        <Link
          className="ButtonSolid w-full text-center"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (booking?.setShowForm) {
              booking.setShowForm(true);
            }
          }}
        >
          Reservar
        </Link>
      </div>
    </motion.section>
  )}
</AnimatePresence>

    <footer className="bg-[#40666a] SectionDiv">

      <div className="ContainerFlex flex-col">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 w-full ">
          <FooterSection title={t.hoteles.title} links={t.hoteles.links} id="hoteles" />
          <FooterSection title={t.about.title} links={t.about.links} id="about" />
          <FooterSection title={t.customer.title} links={t.customer.links} id="customer" />
          <FooterSection
          title={t.revolt.title}
          links={t.revolt.links}
          contact={t.revolt.contact}
          id="revolt"
        />

          <div className="flex flex-col gap-2 FooterColumns FooterSocials">
            <span className="uppercase tracking-widest text-[12px] mb-1">{t.social}</span>
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
            className='w-[70%] lg:w-[200]'
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
              <Link href={item.href}>{item.label}</Link>
              {i < t.legal.length - 1 && <span>|</span>}
            </React.Fragment>
          ))}
          </div>
          <p className="text-white mt-10">{t.copyright}</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
