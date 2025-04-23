'use client';
import React from "react";
import beneficiosData from '../data/beneficios.json'; // ruta relativa correcta
import {
  FaHotel,
  FaConciergeBell,
  FaUtensils,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaSpa,
  FaUsers,
  FaCheckCircle
} from "react-icons/fa";

const iconMap = {
  FaHotel: FaHotel,
  FaConciergeBell: FaConciergeBell,
  FaUtensils: FaUtensils,
  FaMapMarkerAlt: FaMapMarkerAlt,
  FaMobileAlt: FaMobileAlt,
  FaSpa: FaSpa,
  FaUsers: FaUsers,
  FaCheckCircle: FaCheckCircle
};

const Beneficios = () => {
  return (
    <section id="beneficios" className="SectionDiv py-0 BgImageRight">
      <h3 className="suptitle">Disfruta de todos</h3>
      <h4 className="TitleSection">Nuestros Beneficios</h4>

      <div className="ContainerFlex">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {beneficiosData.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={index} className="flex flex-col items-center text-center text-black-grand">
                {IconComponent && <IconComponent className="text-3xl text-light-oceanic mb-3" />}
                <h4 className="TitlesBenefits">{item.titulo}</h4>
                <p className="text-xs text-gray-700">{item.descripcion}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
