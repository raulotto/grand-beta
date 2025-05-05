'use client';
import { usePathname } from 'next/navigation';
import beneficiosData from '@/data/beneficios.json';

import {
  FaHotel,
  FaConciergeBell,
  FaUtensils,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaSpa,
  FaUsers,
  FaCheckCircle
} from 'react-icons/fa';

const iconMap = {
  FaHotel,
  FaConciergeBell,
  FaUtensils,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaSpa,
  FaUsers,
  FaCheckCircle
};

const Beneficios = () => {
  const pathname = usePathname();
  const lang = pathname.startsWith('/en') ? 'en' : 'es';
  const beneficios = beneficiosData[lang];

  return (
    <section id="beneficios" className="SectionDiv BgImageRight">
      <h3 className="suptitle">
        {lang === 'en' ? 'Enjoy all our' : 'Disfruta de todos'}
      </h3>
      <h4 className="TitleSection">
        {lang === 'en' ? 'Our Benefits' : 'Nuestros Beneficios'}
      </h4>

      <div className="ContainerFlex">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {beneficios.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={index} className="flex flex-col items-center text-center text-black-grand">
                {IconComponent && <IconComponent className="text-3xl text-light-oceanic mb-3" />}
                <h4 className="Gotham text-[1em]">{item.titulo}</h4>
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
