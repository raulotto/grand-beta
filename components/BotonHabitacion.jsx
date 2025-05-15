import Link from "next/link";
import { usePathname } from "next/navigation";

const BotonHabitacion = ({ habitacion }) => {
  if (!habitacion?.urlReserva) return null;

  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";

  const textos = {
    es: "Reservar",
    en: "Book now"
  };

  return (
    
    <div className="ButtonInfoStatic mt-4">
              <Link
      href={habitacion.urlReserva}
      target="_blank"
      rel="noopener noreferrer"
      className="ColorButton1 ButtonRounded"
    >
      {textos[lang]}
    </Link>
            </div>
  );
};

export default BotonHabitacion;
