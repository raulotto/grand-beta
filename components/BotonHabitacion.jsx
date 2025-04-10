import Link from "next/link";

const BotonHabitacion = ({ habitacion, isDetalle = false }) => {
  if (!habitacion) return null;

  return isDetalle ? (
    <Link
      href={habitacion.urlReserva}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#3A6C74] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#2d545b] transition"
    >
      Reservar
    </Link>
  ) : (
    <Link
      href={habitacion.urlInterna}
      className="inline-block bg-[#c74c11] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#a7420d] transition"
    >
      Ver habitación
    </Link>
  );
};

export default BotonHabitacion;
