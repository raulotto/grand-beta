import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaPhone, FaBell, FaGlobe } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    const menu = document.querySelector(".dropdown_menu");
    menu.classList.toggle("show-menu");
    setShowMenu(!showMenu);
  };

  return (
    <header
      className="absolute top-0 left-0 right-0 z-[99]"
     
    >
      {/* Menú desplegable */}
      <div className="dropdown_menu">
        <div className="flex justify-between items-center w-[1140px] mx-auto py-[40px] text-white">
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
      <div className="text-white text-3xl FloatLeft" onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>

      {/* Contenido principal del header */}
      <div className="ContainerFlex">
        <div className="ItemsMenuLeft">
          <ul className="MenuLight">
            <li>Habitaciones</li>
            <li>Ofertas</li>
          </ul>
        </div>

        <div className="logo-wrapper z-[99]">
          <Image
            src="https://www.costadelsolperu.com/wp-content/uploads/2025/03/new-grand-aeropuerto-logo-blanco.svg"
            alt="Restaurante del hotel"
            width={450}
            height={130}
          />
        </div>

        <div className="ItemsMenuRight">
          <ul className="MenuLight">
            <li>Contacto</li>
            <li>ITEM2</li>
          </ul>
        </div>
      </div>

      {/* Idioma */}
      <Link
        className="FloatRight MenuLight items-center"
        href="/en/hotel-wyndham-grand-costa-del-sol-lima-airport"
      >
        <FaGlobe /> GB
      </Link>
    </header>
  );
};

export default Header;
