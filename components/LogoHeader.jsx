'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BASE_PATH } from '@/utils/config';

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
      ? `${BASE_PATH}/images/logo-wide-oceanic.svg`
      : `${BASE_PATH}/images/logo-wide-blanco.svg`
  }
  alt="Logo"
  width={400}
  height={isActive ? 120 : 130}
  className="w-[300px] lg:w-[400px]"
  unoptimized
/>
        </Link>
      </div>
    </div>
  );
};

export default LogoHeader;
