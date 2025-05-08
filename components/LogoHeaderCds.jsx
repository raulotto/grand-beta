'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const LogoHeader = ({ isActive }) => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const homeHref = isEnglish ? '/en/rewards' : '/rewards/';

  return (
    <div className="LogoInner">
      <div className="block">
        <Link href={homeHref}>
          <Image
            src={
              isActive
                ? '/images/logo-costa-30-aniv.svg'
                : '/images/logo-costa-30-aniv.svg'
            }
            alt="Logo"
            width={340}
            height={isActive ? 120 : 130}
          />
        </Link>
      </div>
    </div>
  );
};

export default LogoHeader;
