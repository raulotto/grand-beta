import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaUsers, FaRulerCombined } from "react-icons/fa";

const HabitacionCard = ({ habitacion }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white flex flex-col">
      <div className="relative h-56 w-full">
        <Image
          src={habitacion.imagenPrincipal}
          alt={habitacion.titulo}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{habitacion.titulo}</h3>
          <p className="text-sm text-gray-700 text-justify">{habitacion.descripcion}</p>
        </div>
        <div className="mt-4 text-[#3A6C74] text-xs space-y-1">
          <div className="flex items-center gap-2">
            <FaUsers className="w-4 h-4" />
            {habitacion.ocupacion}
          </div>
          <div className="flex items-center gap-2">
            <FaRulerCombined className="w-4 h-4" />
            {habitacion.tamano}
          </div>
          <div className="flex items-center gap-2">
            <FaBed className="w-4 h-4" />
            {habitacion.cama}
          </div>
        </div>
        <Link
          href={`/grand/habitaciones/${habitacion.id}`}
          className="mt-4 inline-block text-center bg-[#C1440E] text-white py-2 px-4 rounded text-sm hover:bg-[#a9380c]"
        >
          Ver habitación
        </Link>
      </div>
    </div>
  );
};

export default HabitacionCard;
