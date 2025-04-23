import Link from "next/link";

const BotonHabitacion = ({ habitacion, isDetalle = false }) => {
  if (!habitacion) return null;

  return isDetalle ? (
    <Link
      href={habitacion.urlReserva}
      target="_blank"
      rel="noopener noreferrer"
      className="ColorButton1 px-6 py-2 rounded-lg text-sm  transition"
    >
      Reservar
    </Link>
  ) : (
    <Link
      href={habitacion.urlInterna}
      className="ColorButton1 px-6 py-2 rounded-lg text-sm  transition"
    >
      Ver habitación
    </Link>
  );
};

export default BotonHabitacion;
