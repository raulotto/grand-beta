import React from 'react'
import Link from "next/link";
import { FaBars, FaTimes, FaPhoneSquareAlt, FaBell, FaGlobe, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";

const ItemsRightMenu = () => {
  return (
    <div className="ContainerFlex flex-row">
    <div className="ItemsMenuLeft">
      <Image
        src="/images/new-grand-costa-aeropuerto-logo-blanco.svg"
        alt="Restaurante del hotel"
        width={250}
        height={130}
      />
    </div>
    <div className="ItemsMenuCenter">
      <ul className="MenuLight flex">
        <li><Link href="tel:+5102009200" className="flex items-center gap-2"><FaPhoneSquareAlt /><span className="hidden sm:inline">Reservas: +51(01) 2009200</span></Link></li>

      </ul>
    </div>

    

    <div className="ItemsMenuRight">
      <ul className="MenuLight flex">
        <li><Link href="#" className="flex items-center gap-2"><FaCalendarAlt /><span className="hidden sm:inline">Modificar Reserva</span></Link></li>
      </ul>
    </div>
    
  </div>
  )
}

export default ItemsRightMenu
