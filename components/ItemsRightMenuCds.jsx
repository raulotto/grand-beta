import React from 'react'
import Link from "next/link";
import { FaBars, FaTimes, FaPhoneSquareAlt, FaBell, FaGlobe, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";

const ItemsRightMenu = ({ isVisible, modoClaro = false }) => {
  const isActive = isVisible || modoClaro;

  return (
    <div className="ContainerFlex flex-row lg:py-[15px]">
    <div className="ItemsMenuLeft">
  {/* Logo para desktop (lg y más) */}
 {/* Logo en mobile – cambia según scroll */}
 <div className="lg:block">
  <Link href="/grand">
    {!isVisible ? (
      <Image
        src={
          isVisible
            ? "/images/logo-costa-30-aniv.svg"
            : "/images/logo-costa-30-aniv.svg"
        }
        alt="Logo"
        width={200}
        height={isVisible ? 110 : 130}
      />
    ) : (
      <Image
        src="/images/logo-costa-30-aniv.svg"
        alt="Logo color"
        width={340}
        height={110}
      />
    )}
  </Link>
</div>

</div>
    
    
  </div>
  )
}

export default ItemsRightMenu
