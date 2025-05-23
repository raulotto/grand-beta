import React from 'react'
import Link from "next/link";
import { FaBars, FaTimes, FaPhoneSquareAlt, FaBell, FaGlobe, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";

const ItemsRightMenu = ({ isVisible, modoClaro = false }) => {
  const isActive = isVisible || modoClaro;

  return (
    <div className="ContainerFlex flex-row lg:py-[20px]">
    <div className="ItemsMenuLeft">
  {/* Logo para desktop (lg y más) */}
 {/* Logo en mobile – cambia según scroll */}
<div className="lg:block">
  {!isVisible ? (
    <Image
    src={
      isVisible
        ? "/images/logo-wide-oceanic.svg"
        : "/images/logo-wide-blanco.svg"
    }
    alt="Logo"
    width={isVisible ? 200 : 200}
    height={isVisible ? 110 : 130}
  />
  
  ) : (
    <Image
      src="/images/logo-wide-oceanic.svg"
      alt="Logo color"
      width={200}
      height={110}
    />
  )}
</div>

</div>
    <div className="ItemsMenuCenter">
    <ul className={`MenuLight flex ${isActive ? 'text-primary-oceanic' : 'text-white'}`}>

        <li><Link href="tel:+5102009200" className="flex items-center gap-2"><FaPhoneSquareAlt /><span className="hidden sm:inline">Reservas: +51(01) 2009200</span></Link></li>

      </ul>
    </div>

    

    <div className="ItemsMenuRight">
    <ul className={`MenuLight flex ${isActive ? 'text-primary-oceanic' : 'text-white'}`}>

        <li><Link href="#" className="flex items-center gap-2"><FaCalendarAlt /><span className="hidden sm:inline">Modificar Reserva</span></Link></li>
      </ul>
    </div>
    
  </div>
  )
}

export default ItemsRightMenu
