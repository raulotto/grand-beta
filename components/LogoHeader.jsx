'use client'
import Link from 'next/link'
import Image from 'next/image'

const LogoHeader = ({ isActive }) => {
  return (
    <div className="LogoInner">
      <div className="block">
        <Link href="/grand">
          <Image
            src={
              isActive
                ? '/images/new-grand-costa-aeropuerto-logo-oceanic.svg'
                : '/images/new-grand-costa-aeropuerto-logo-blanco.svg'
            }
            alt="Logo"
            width={200}
            height={isActive ? 120 : 130}
          />
        </Link>
      </div>
    </div>
  )
}

export default LogoHeader
