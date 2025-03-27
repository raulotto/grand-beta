import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaPhoneSquareAlt, FaBell, FaGlobe, FaCalendarAlt } from "react-icons/fa";

const HeaderTrad = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    const menu = document.querySelector(".dropdown_menu");
    menu.classList.toggle("show-menu");
    setShowMenu(!showMenu);
  };

  return (
    <header
      className="absolute top-0 left-0 right-0 z-[2] font-gotham-book"
     
    >
      {/* Menú desplegable */}
      <div className="dropdown_menu">
        <div className="h-screen flex justify-between items-center w-[1140px] mx-auto py-[40px] text-white">
          <ul >
            <li><Link href="#">Contacto</Link></li>
            <li><Link href="#">Contacto</Link></li>
          </ul>
          <ul>
            <li><Link href="#">Contacto</Link></li>
            <li><Link href="#">Contacto</Link></li>
          </ul>
        </div>
      </div>

      {/* Botón hamburguesa / cerrar */}
      <div className="MobileMenuAccomadation">
      <div className="text-white text-3xl FloatLeft" onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>

      {/* Contenido principal del header */}
      <div className="ContainerFlex">
        <div className="ItemsMenuLeft">
          <Image
            src="/images/new-grand-costa-aeropuerto-logo-blanco.svg"
            alt="Restaurante del hotel"
            width={250}
            height={130}
          />
        </div>
        <div className="">
          <ul className="MenuLight">
            <li><Link href="tel:+5102009200" className="flex items-center gap-2"><FaPhoneSquareAlt /><span className="hidden sm:inline">Reservas: +51(01) 2009200</span></Link></li>

          </ul>
        </div>

        

        <div className="ItemsMenuRight">
          <ul className="MenuLight">
            <li><Link href="#" className="flex items-center gap-2"><FaCalendarAlt /><span className="hidden sm:inline">Modificar Reserva</span></Link></li>
          </ul>
        </div>
      </div>

      {/* Idioma */}
      <Link
        className="FloatRight MenuLight items-center"
        href="/en/hotel-wyndham-grand-costa-del-sol-lima-airport"
      >
        <FaGlobe /> EN
      </Link>
      </div>
    </header>
  );
};

export default HeaderTrad;
