'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const BodyWrapper = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const path = pathname === '/' 
  ? 'home' 
  : pathname.replace(/^\/|\/$/g, '') // quita / inicial y final
            .replace(/\//g, '-');     // reemplaza / intermedios con guion

    const pageClass = `page-${path}`;

    // Normaliza ruta sin idioma (quita "/en", "/es", etc.)
    const cleanPath = pathname.replace(/^\/(en|es)(\/|$)/, '/');

    // Mapeo de rutas a clases parent
    const parentMap = [
      {
        match: /^\/hotel-wyndham-grand-costa-del-sol-lima-airport/,
        class: 'grand-parent'
      },
      {
        match: /^\/rewards/,
        class: 'rewards-parent'
      }
    ];

    const extraParentClass = parentMap.find(p => p.match.test(cleanPath))?.class;

    // Asignar clases
    document.body.className = ''; // limpia todas
    document.body.classList.add(pageClass);
    if (extraParentClass) {
      document.body.classList.add(extraParentClass);
    }
  }, [pathname]);

  return null;
};

export default BodyWrapper;
