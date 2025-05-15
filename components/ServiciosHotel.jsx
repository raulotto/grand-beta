'use client';
import { usePathname } from 'next/navigation';
import serviciosData from '@/data/servicios.json';

import * as Icons from 'react-icons/fa';
import { RiSafe3Fill } from 'react-icons/ri';
import { MdCoffeeMaker } from "react-icons/md";
import { MdWorkspacePremium } from "react-icons/md";
import { TbIroning1Filled } from "react-icons/tb";
import { GiSlippers } from "react-icons/gi";

const customIcons = {
  RiSafe3Fill,
  MdCoffeeMaker,
  MdWorkspacePremium,
  TbIroning1Filled,
  GiSlippers,
};

const ServiciosHotel = () => {
  const pathname = usePathname();
  const lang = pathname.startsWith('/en') ? 'en' : 'es';

  const servicios = serviciosData[lang];

  return (
    <section className="SectionDiv BgImageLeft bg-primary-dune/60">
      <div className="ContainerFlex flex-col">
        <h4 className="TitleSectionMd">
          {lang === 'en' ? 'Included with your stay' : 'Incluido con cada estancia'}
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm w-full">
          {servicios.map((item, index) => {
            const iconName = item.icono;
            const Icon = customIcons[iconName] || Icons[iconName] || Icons.FaBoxOpen;

            return (
              <div key={index} className="flex items-start gap-2">
                <span className="text-primary-oceanic text-lg pr-2"><Icon /></span>
                <span className="text-gray-500">{item.nombre}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiciosHotel;
