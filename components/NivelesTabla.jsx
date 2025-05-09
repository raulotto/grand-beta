'use client'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaPlus, FaMinus } from 'react-icons/fa'
import useIdioma from '@/hooks/useIdioma'
import rewardsNiveles from "@/data/rewardsNiveles.json" // <- esta línea faltaba

export default function NivelesTabla() {
  const idioma = useIdioma("niveles", {
    niveles: rewardsNiveles
  });

  if (!idioma) return null;

  const { niveles: data } = idioma;
  const { niveles, beneficios } = data;

  const [nivelActivo, setNivelActivo] = useState(null);
  const [itemsAbiertos, setItemsAbiertos] = useState({});

  const toggleNivel = (nombre) => {
    setNivelActivo(prev => prev === nombre ? null : nombre);
    setItemsAbiertos({});
  };

  const toggleBeneficio = (index) => {
    setItemsAbiertos(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const nivelesVisibles = nivelActivo
    ? niveles.slice(0, niveles.findIndex(n => n.nombre === nivelActivo) + 1)
    : [];

  return (
    <div className="border rounded-md overflow-hidden divide-y">
      {niveles.map((nivel, i) => (
        <div key={nivel.nombre}>
          <button
            onClick={() => toggleNivel(nivel.nombre)}
            className="w-full flex justify-between items-center px-4 py-3 bg-white hover:bg-gray-50"
          >
            <span className="font-semibold" style={{ color: nivel.color }}>
              {nivel.etiqueta} <span className="ml-2">{nivel.nombre}</span>
            </span>
            {nivelActivo === nivel.nombre ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {nivelActivo === nivel.nombre && (
            <div className="bg-white">
              {beneficios.map((beneficio, idx) => {
                const aplica = beneficio.niveles.includes(nivel.nombre);
                return (
                  <div key={idx} className="border-t">
                    <button
                      onClick={() => toggleBeneficio(idx)}
                      className="flex justify-between items-center w-full px-4 py-3 text-left"
                    >
                      <span>{beneficio.titulo}</span>
                      {itemsAbiertos[idx] ? <FaMinus /> : <FaPlus />}
                    </button>
                    {itemsAbiertos[idx] && aplica && (
                      <div className="px-4 pb-4 text-sm text-gray-700 space-y-2">
                        <p>{beneficio.contenido}</p>
                        {beneficio.link && (
                          <a href={beneficio.link.url} className="text-blue-600 underline block">
                            {beneficio.link.texto}
                          </a>
                        )}
                        {beneficio.cta && (
                          <a href={beneficio.cta.url} className="inline-block mt-2 px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 text-xs">
                            {beneficio.cta.texto}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
