'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import localizedRoutes from '@/utils/localizedRoutes';

const LANGUAGES = [
  { code: 'es', label: 'ES', flag: '/images/lang/es.svg' },
  { code: 'en', label: 'EN', flag: '/images/lang/en.svg' }
];

export default function LanguageSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('es');
  const [isTranslatable, setIsTranslatable] = useState(false);

  useEffect(() => {
    const cleanPath = pathname.replace(/\/$/, '').toLowerCase();

    const routesMap = Object.keys(localizedRoutes).reduce((acc, key) => {
      acc[key.toLowerCase().replace(/\/$/, '')] = localizedRoutes[key];
      return acc;
    }, {});

    setCurrentLang(pathname.startsWith('/en') ? 'en' : 'es');
    setIsTranslatable(!!routesMap[cleanPath]);
  }, [pathname]);

  if (!isTranslatable) return null;

  const handleLanguageChange = (langCode) => {
    const cleanPath = pathname.replace(/\/$/, '').toLowerCase();

    const routesMap = Object.keys(localizedRoutes).reduce((acc, key) => {
      acc[key.toLowerCase().replace(/\/$/, '')] = localizedRoutes[key];
      return acc;
    }, {});

    const targetPath = routesMap[cleanPath]?.[langCode];

    if (targetPath) {
      router.push(targetPath);
    } else {
      const fallbackPath = langCode === 'en'
        ? `/en${pathname}`
        : pathname.replace(/^\/en/, '');
      router.push(fallbackPath);
    }

    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="FlagButton flex items-center space-x-1"
      >
        <Image
          src={LANGUAGES.find(l => l.code === currentLang).flag}
          alt={currentLang}
          width={24}
          height={24}
        />
        <p className="text-white">{currentLang.toUpperCase()}</p>
        <svg className="w-4 h-4 ml-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M19 9l-7 7-7-7'} />
        </svg>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute left-0 mt-2 w-24 bg-slate-800 rounded-lg shadow-lg p-2 z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {LANGUAGES.filter(l => l.code !== currentLang).map(lang => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="flex items-center space-x-2 text-white hover:text-yellow-300 py-1 px-2 w-full"
              >
                <Image src={lang.flag} alt={lang.label} width={20} height={20} />
                <span>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
