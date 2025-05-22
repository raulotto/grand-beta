import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";
import MegaGroup from "./MegaGroup";
import fullMenuGroups from "@/data/menu.json";
import { usePathname } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import Image from "next/image";
import { FaPhoneSquareAlt, FaCalendarAlt } from "react-icons/fa";
import LogoHeader from '@/components/LogoHeader'
import LanguageSelector from "@/components/LanguageSelector";
import SocialIcons from "./SocialIcons";
import TopBar from "@/components/TopBar";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";


const HeaderTrad = ({ modoClaro = false }) => {
  const booking = useBooking();
  const [isVisible, setIsVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [activeGroupId, setActiveGroupId] = useState("hoteles");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [showMenu]);

  const toggleMenu = () => {
    const menu = document.querySelector(".dropdown_menu");
    menu.classList.toggle("show-menu");
    setShowMenu(!showMenu);
  };

  const toggleGroup = (id) => {
    setActiveGroupId((prev) => (prev === id ? null : id));
  };

  const isActive = isVisible || modoClaro;
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const menuGroups = fullMenuGroups[lang];

  // Nuevos states:
const [activeSubgroupIndex, setActiveSubgroupIndex] = useState(null);

  return (<>
    <TopBar />
    <header
      className={`transition-all duration-500 ease-in-out z-[4] font-gotham-book w-full ${
        isActive ? "fixed top-0 bg-white shadow-md" : "absolute"
      }`}
    >
      {/* Dropdown megamenú */}
      <div className="dropdown_menu BgImageIso h-screen flex flex-col justify-between">

        <div className="ContainerFlex px-6 lg:px-0 items-start">
        <LogoHeader isActive={false}  />
        </div>
        
        <div className="InnerDropdownMenu ContainerFlex MegaMenu w-full flex-grow">

  {/* MOBILE - sigue igual */}
  <div className="block lg:hidden w-full">
    {menuGroups.map((group) => (
      <MegaGroup
        key={group.id}
        id={group.id}
        title={group.title}
        titleHref={group.titleHref}
        isOpen={activeGroupId === group.id}
        onToggle={toggleGroup}
        items={group.items}
        subgroups={group.subgroups || []}
      />
    ))}
  </div>

  {/* DESKTOP - menú tipo Booking / lateral en 3 niveles */}
  <div className="hidden lg:flex w-full  text-white gap-8">
    {/* Primera columna: MenuGroups (Hoteles, Promociones, etc.) */}
    <div className="flex flex-col gap-3 min-w-[180px]">
      {menuGroups.map((group) => (
        <Link
  key={group.id}
  href={group.titleHref}
  target={group.target || "_self"}
  onMouseEnter={(e) => {
    e.preventDefault();
    toggleGroup(group.id);
    setActiveSubgroupIndex(null);
  }}
  className={`text-left font-semibold flex items-center justify-between gap-2 ${
    activeGroupId === group.id ? "text-white" : "text-white/70"
  }`}
>
  <span>{group.title}</span>
  <FaChevronRight
    className={`transition-transform duration-300 ${
      activeGroupId === group.id ? "rotate-90" : "rotate-0"
    }`}
  />
</Link>


      ))}
    </div>

    {/* Segunda columna: Subgrupos (Bancos, Restaurantes...) */}
    {activeGroupId && menuGroups.find((g) => g.id === activeGroupId)?.subgroups && (
      <AnimatePresence mode="wait">
  <motion.div
    key={activeGroupId + "-subs"}
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -10 }}
    transition={{ duration: 0.2 }}
    className="flex flex-col gap-3 min-w-[180px]"
  >
        {menuGroups
          .find((g) => g.id === activeGroupId)
          .subgroups.map((sub, idx) => (
            <Link
  key={idx}
  href={sub.href || "#"}
  target={sub.target || "_self"}
  onMouseEnter={(e) => {
    e.preventDefault();
    setActiveSubgroupIndex(idx);
  }}
  className={`text-left font-semibold flex items-center justify-between gap-2 ${
    activeSubgroupIndex === idx ? "text-white" : "text-white/70"
  }`}
>
  <span>{sub.title}</span>
  <FaChevronRight
    className={`transition-transform duration-300 ${
      activeSubgroupIndex === idx ? "rotate-90" : "rotate-0"
    }`}
  />
</Link>


          ))}
      </motion.div>
</AnimatePresence>
    )}

    {/* Tercera columna: Items del subgrupo seleccionado */}
    {activeGroupId && (
  <AnimatePresence mode="wait">
  <motion.div
    key={activeGroupId + "-items-" + (activeSubgroupIndex ?? "main")}
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -10 }}
    transition={{ duration: 0.2 }}
    className="flex flex-col gap-2 min-w-[250px]"
  >
    {
      // Mostrar items si hay subgrupo activo
      activeSubgroupIndex !== null &&
      menuGroups.find((g) => g.id === activeGroupId)?.subgroups?.[activeSubgroupIndex]?.items?.map((item, i) => (
        <Link
  key={i}
  href={item.href}
  target={item.target || "_self"}
  className="font-semibold block"
>
  {item.label}
</Link>

      ))
    }

    {
      // Mostrar directamente los items si NO hay subgrupos
      activeSubgroupIndex === null &&
      !menuGroups.find((g) => g.id === activeGroupId)?.subgroups?.length &&
      menuGroups.find((g) => g.id === activeGroupId)?.items?.map((item, i) => (
        <Link
  key={i}
  href={item.href}
  target={item.target || "_self"}
  className="font-semibold block"
>
  {item.label}
</Link>

      ))
    }
  </motion.div>
</AnimatePresence>
)}

  </div>
</div>


        <SocialIcons /> 

      </div>

      {/* Top header con logo, menú hamburguesa y opciones */}
      <div className="ContainerFlex flex-row px-6 lg:px-[0px] lg:py-[20px] justify-between items-center">
        {/* Logo */}
        <LogoHeader isActive={isActive} />

      {/* Centro - Teléfono */}
<div className="ItemsMenuCenter">
  <ul
    className={`MenuLight flex ${
      isActive ? "text-primary-oceanic" : "text-white"
    }`}
  >
    <li>
      <Link
        href="tel:+5102009200"
        className="flex items-center gap-2 h-[44px]"
      >
        <FaPhoneSquareAlt className="w-[18px] h-[18px]" />
        <span className="hidden sm:inline leading-none text-base">
          <strong>Reservas:</strong> +51(01) 2009200
        </span>
      </Link>
    </li>
  </ul>
</div>


        

       

        {/* Modificar reserva */}
        <div className="hidden ml-5">
          <ul
            className={`MenuLight flex ${
              isActive ? "text-primary-oceanic" : "text-white"
            }`}
          >
            <li>
              <Link href="#" className="flex items-center gap-2">
                <FaCalendarAlt />
                <span className="hidden sm:inline">Modificar Reserva</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Botón reservar */}
        <div className="ButtonBooking ActivateForm">
          <Link
            className="ButtonSolid"
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
         <div className="flex items-center justify-center gap-5">
          {/* Idioma */}
          <LanguageSelector />
        {/* Botón hamburguesa */}
        <div className="MobileMenuAccomadation">
          <div
            className="HamburgerIcon  lg:top-[25px] cursor-pointer block"
            onClick={toggleMenu}
          >
            <div
              className={`bar ${showMenu ? "bar1" : ""} ${
                showMenu
                  ? "bg-white"
                  : isActive
                  ? "bg-primary-oceanic"
                  : "bg-white"
              }`}
            />
            <div
              className={`bar ${showMenu ? "bar2" : ""} ${
                showMenu
                  ? "bg-white"
                  : isActive
                  ? "bg-primary-oceanic"
                  : "bg-white"
              }`}
            />
            <div
              className={`bar ${showMenu ? "bar3" : ""} ${
                showMenu
                  ? "bg-white"
                  : isActive
                  ? "bg-primary-oceanic"
                  : "bg-white"
              }`}
            />
          </div>
        </div>
         </div>
      </div>
    </header></>
  );
};

export default HeaderTrad;
