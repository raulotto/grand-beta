import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaPhoneSquareAlt, FaBell, FaGlobe, FaCalendarAlt } from "react-icons/fa";
import MegaGroup from "./MegaGroup";


const HeaderTrad = ({ onOpenForm }) => {
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
      className="absolute top-0 left-0 right-0 z-[2] font-gotham-book"
     
    >
      {/* Menú desplegable */}
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



        </div>
      </div>

      {/* Botón hamburguesa / cerrar */}
      <div className="MobileMenuAccomadation">
      <div className="text-white text-2xl lg:text-3xl FloatLeft" onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>

      {/* Contenido principal del header */}
      <div className="ContainerFlex flex-row">
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
      <div className="FloatRight ButtonBooking ActivateForm"><Link className="ButtonSolid" href={"#"} onClick={(e) => {
        e.preventDefault();
        onOpenForm();
      }}>Reservar</Link></div>
    </header>
  );
};

export default HeaderTrad;
