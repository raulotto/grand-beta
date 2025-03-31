import Image from "next/image";
import Link from "next/link";

const HotelCard = ({ href, image, badge, title, city, tags = [] }) => {
  return (
    <Link href={href} className="CardHotel">
      <div className="CardHotelImage">
        <Image
          src={image}
          alt={`Hotel ${city}`}
          fill
          className="object-cover"
        />

        {/* Badge tipo TripAdvisor o etiquetas */}
        {badge && (
          <div className="absolute bottom-2 right-2">
            <Image src={badge} alt="badge" width={40} height={40} />
          </div>
        )}

        {/* Tags como "Nuevo" o "Ver más" */}
        {tags.length > 0 && (
          <div className="absolute top-2 right-2 flex gap-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-white text-xs px-2 py-0.5 rounded ${
                  tag === "Nuevo" ? "bg-orange-500" : "bg-emerald-600"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="CardHotelContent">
        <span className="text-xs text-gray-500 block leading-none">{title}</span>
        <span className="text-base text-black font-semibold">{city}</span>
      </div>
    </Link>
  );
};

export default HotelCard;
