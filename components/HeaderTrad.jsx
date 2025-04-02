import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaPhoneSquareAlt, FaBell, FaGlobe, FaCalendarAlt } from "react-icons/fa";
import MegaGroup from "./MegaGroup";
import { useBooking } from "@/context/BookingContext";
import ItemsRightMenu from "./ItemsRightMenu";


const HeaderTrad = () => {

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
  className={`absolute transition-all duration-500 ease-in-out z-[4] font-gotham-book w-full ${
    isVisible ? 'fixed lg:absolute top-0 bg-white z-0 lg:bg-transparent shadow-lg' : ''
  }`}
>


      {/* 
      <header
      className="absolute top-0 left-0 right-0 z-[2] font-gotham-book"
     
    >
      */}
      <div className="dropdown_menu">

        <div className="InnerDropdownMenu ContainerFlex MegaMenu">
        <MegaGroup
  id="hoteles"
  title="Hoteles"
  titleHref="/hoteles"
  isOpen={activeGroupId === "hoteles"}
  onToggle={toggleGroup}
  items={[
    { label: "Costa Del Sol Wyndham Tumbes", href: "#" },
    { label: "Costa Del Sol Wyndham Piura", href: "#" },
    { label: "Costa Del Sol Wyndham Chiclayo", href: "#" },
    { label: "Costa Del Sol Wyndham Trujillo Golf", href: "#" },
    { label: "Costa Del Sol Trujillo Centro", href: "#" },
    { label: "Costa Del Sol Wyndham Cajamarca", href: "#" },
    { label: "Costa Del Sol Wyndham Lima City", href: "#" },
    { label: "Costa Del Sol Wyndham Lima Airport", href: "#" },
    { label: "Wyndham Grand Lima Airport", href: "#" },
    { label: "Costa Del Sol Wyndham Cusco", href: "#" },
    { label: "Costa Del Sol Wyndham Arequipa", href: "#" },
    { label: "Costa Del Sol Wyndham Pucallpa", href: "#" },
  ]}
/>

<MegaGroup
  id="promociones"
  title="Promociones"
  titleHref="/promociones"
  isOpen={activeGroupId === "promociones"}
  onToggle={toggleGroup}
  items={[
    { label: "Interbank Cuenta Sueldo 20%", href: "#" },
    { label: "Interbank 20% Saria Sky Bar", href: "#" },
    { label: "Interbank 20% Paprika Restaurante", href: "#" },
    { label: "Scotiabank 25% Saria Sky Bar", href: "#" },
    { label: "Scotiabank 20% Walak Cafe Bar", href: "#" },
    { label: "Scotiabank 25% Paprika Restaurante", href: "#" },
    { label: "BBVA 20% Paprika Restaurante", href: "#" },
    { label: "Banco Falabella 20% Restaurantes & Bares", href: "#" },
    { label: "Club El Comercio 20% Saria Sky Bar", href: "#" },
    { label: "Qualitas 20% Paprika Restaurante", href: "#" },
  ]}
/>

<MegaGroup
  id="paquetes"
  title="Paquetes"
  titleHref="/paquetes"
  isOpen={activeGroupId === "paquetes"}
  onToggle={toggleGroup}
  items={[
    { label: "Paquete Romántico", href: "#" },
    { label: "Paquete Familiar", href: "#" },
    { label: "Paquete Noche de Bodas", href: "#" },
    { label: "Full Day", href: "#" },
    { label: "Cyber CDS", href: "#" },
    { label: "Destino del Mes", href: "#" },
  ]}
/>

<MegaGroup
  id="nosotros"
  title="Nosotros"
  titleHref=""
  isOpen={activeGroupId === "nosotros"}
  onToggle={toggleGroup}
  items={[
    { label: "Eventos", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Dog Friendly", href: "#" },
    { label: "Reclamos", href: "#" },
    { label: "Contáctenos", href: "#" },
  ]}
/>


<ItemsRightMenu className="block lg:hidden"/>
        </div>
        
      </div>

      {/* Botón hamburguesa / cerrar */}
      {/* Botón hamburguesa / cerrar */}
<div className="MobileMenuAccomadation">
<div
  className="HamburgerIcon FloatLeft"
  onClick={toggleMenu}
>
  <div
    className={`bar ${showMenu ? "bar1" : ""} ${
      showMenu || !isVisible ? "bg-white" : "bg-primary-oceanic"
    }`}
  ></div>
  <div
    className={`bar ${showMenu ? "bar2" : ""} ${
      showMenu || !isVisible ? "bg-white" : "bg-primary-oceanic"
    }`}
  ></div>
  <div
    className={`bar ${showMenu ? "bar3" : ""} ${
      showMenu || !isVisible ? "bg-white" : "bg-primary-oceanic"
    }`}
  ></div>
</div>




  <ItemsRightMenu isVisible={isVisible} />


      {/* Idioma */}
      <Link
  className={`SwitchLang lg:right-[calc((100%-1140px)/2)] lg:absolute flex ml-5 items-center MenuLight transition-colors duration-300
    ${isVisible ? "text-primary-oceanic" : "text-white"} lg:text-white`}
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

export default HeaderTrad;
