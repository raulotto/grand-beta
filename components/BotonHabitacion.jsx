import { useEffect, useState } from 'react';
import Link from 'next/link';

const BotonHabitacion = ({ habitacion }) => {
  const [isDetalle, setIsDetalle] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace(/\/$/, '');
      const habitacionPath = habitacion?.urlInterna?.replace(/\/$/, '');
      setIsDetalle(path === habitacionPath);
    }
  }, [habitacion]);

  if (!habitacion) return null;

  const label = isDetalle ? 'Reservar' : 'Ver más';
  const url = isDetalle ? habitacion.urlReserva : habitacion.urlInterna;

  return isDetalle ? (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#3A6C74] text-white px-8 py-3 rounded-md text-lg font-semibold shadow hover:bg-[#2d545b] transition inline-block"
    >
      {label}
    </Link>
  ) : (
    <Link
      href={url}
      className="bg-[#3A6C74] text-white px-8 py-3 rounded-md text-lg font-semibold shadow hover:bg-[#2d545b] transition inline-block"
    >
      {label}
    </Link>
  );
};

export default BotonHabitacion;
