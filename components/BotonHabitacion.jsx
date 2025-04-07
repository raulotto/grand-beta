import Link from 'next/link';

const BotonHabitacion = ({ habitacion, isDetalle = false }) => {
  if (!habitacion) return null;

  const label = isDetalle ? 'Reservar' : 'Ver más';
  const url = isDetalle ? habitacion.urlReserva : habitacion.urlInterna;

  return isDetalle ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#3A6C74] text-white px-8 py-3 rounded-md text-lg font-semibold shadow hover:bg-[#2d545b] transition inline-block"
    >
      {label}
    </a>
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
