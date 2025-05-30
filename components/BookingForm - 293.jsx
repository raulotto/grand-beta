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
      <div className="dropdown_menu BgImageIso">
        <div className="ContainerFlex px-6 lg:px-0 items-start">
        <LogoHeader isActive={false}  />
        </div>
        
        <div className="InnerDropdownMenu ContainerFlex MegaMenu w-full">
  {/* Mobile: acordeón */}
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

  {/* Desktop: columnas visibles solo si el grupo está abierto */}
  <div className="hidden lg:flex gap-12 w-full text-white">
    {menuGroups
      .filter((group) => group.id === activeGroupId)
      .map((group) =>
        group.subgroups && group.subgroups.length > 0 ? (
          group.subgroups.map((subgroup, idx) => (
            <div key={idx} className="flex-1 min-w-[180px]">
              <h4 className="font-bold uppercase mb-3">{subgroup.title}</h4>
              <ul className="space-y-1">
                {subgroup.items.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} className="hover:underline block">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div key={group.id} className="flex-1 min-w-[180px]">
            <h4 className="font-bold uppercase mb-3">{group.title}</h4>
            <ul className="space-y-1">
              {group.items.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:underline block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
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
        <div className="hidden ItemsMenuCenter">
          <ul
            className={`MenuLight flex ${
              isActive ? "text-primary-oceanic" : "text-white"
            }`}
          >
            <li>
              <Link
                href="tel:+5102009200"
                className="flex items-center gap-2"
              >
                <FaPhoneSquareAlt />
                <span className="hidden sm:inline">
                  Reservas: +51(01) 2009200
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
