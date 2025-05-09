'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const LogoHeader = ({ isActive }) => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en/hotel-wyndham-grand-costa-del-sol-lima-airport');
  const homeHref = isEnglish ? '/en/hotel-wyndham-grand-costa-del-sol-lima-airport' : '/hotel-wyndham-grand-costa-del-sol-lima-airport';

  return (
    <div className="LogoInner">
      <div className="block">
        <Link href={homeHref}>
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
  );
};

export default LogoHeader;
