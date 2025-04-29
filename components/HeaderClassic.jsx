import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaPhoneSquareAlt, FaBell, FaGlobe, FaCalendarAlt } from "react-icons/fa";
import MegaGroup from "./MegaGroup";
import { useBooking } from "@/context/BookingContext";
import ItemsRightMenuCds from "./ItemsRightMenuCds";
import menuGroups from "@/data/menu.json";


const HeaderClassic = ({ modoClaro = false }) => {


  const [isVisible, setIsVisible] = useState(false);
const [lastScrollTop, setLastScrollTop] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScroll = window.scrollY;

    // Mostrar solo si estás por debajo de 100px
    if (currentScroll > 100) {
      setIsVisible(true);
    }

    // Ocultar si regresas hacia arriba a 80px o menos
    if (currentScroll < 80) {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  const booking = useBooking();

  console.log("BookingContext", booking)
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showMenu]);

  
  const toggleMenu = () => {
    const menu = document.querySelector(".dropdown_menu");
    menu.classList.toggle("show-menu");
    setShowMenu(!showMenu);
  };

   const [activeGroupId, setActiveGroupId] = useState("hoteles"); // primero abierto

  const toggleGroup = (id) => {
    setActiveGroupId((prev) => (prev === id ? null : id));
  };

  return (
    <header
      className={`transition-all duration-500 ease-in-out z-[4] font-gotham-book w-full ${
        isVisible || modoClaro ? 'fixed top-0 bg-white shadow-md' : 'absolute'
      }`}
    >


      {/* 
      <header
      className="absolute top-0 left-0 right-0 z-[2] font-gotham-book"
     
    >
      */}
      <div className="dropdown_menu bg-primary-blue">

        <div className="InnerDropdownMenu ContainerFlex MegaMenu">
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




<ItemsRightMenuCds className="block lg:hidden"/>
        </div>
        
      </div>

      {/* Botón hamburguesa / cerrar */}
      {/* Botón hamburguesa / cerrar */}
<div className="MobileMenuAccomadation">
<div
  className="HamburgerIcon FloatLeft lg:top-[25px]"
  onClick={toggleMenu}
>
<div
  className={`bar ${showMenu ? "bar1" : ""} ${
    showMenu
      ? "bg-white"
      : isVisible || modoClaro
      ? "bg-primary-blue"
      : "bg-white"
  }`}
/>
<div
  className={`bar ${showMenu ? "bar2" : ""} ${
    showMenu
      ? "bg-white"
      : isVisible || modoClaro
      ? "bg-primary-blue"
      : "bg-white"
  }`}
/>
<div
  className={`bar ${showMenu ? "bar3" : ""} ${
    showMenu
      ? "bg-white"
      : isVisible || modoClaro
      ? "bg-primary-blue"
      : "bg-white"
  }`}
/>
</div>


<ItemsRightMenuCds isVisible={isVisible || modoClaro} />

      {/* Idioma */}
      <Link
  className={`SwitchLang lg:right-[calc((100%-1140px)/2)] lg:absolute flex ml-5 items-center MenuLight transition-colors duration-300 ${
    isVisible || modoClaro ? "text-primary-oceanic" : "text-white"
  }`}
  href="/en/hotel-wyndham-grand-costa-del-sol-lima-airport"
>
  <FaGlobe /> EN
</Link>


      <div className="ButtonBooking ActivateForm ml-5 mr-5">
      <Link className="ButtonSolid" href="#" onClick={(e) => {
        e.preventDefault();
        if (booking?.setShowForm) {
          booking.setShowForm(true);
        }
      }}>
        Reservar
      </Link>
    </div>
    
      </div>
      
    </header>
  );
};

export default HeaderClassic;
