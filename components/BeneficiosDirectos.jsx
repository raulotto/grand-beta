
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";

import { LiaCocktailSolid } from "react-icons/lia";
import { PiForkKnife } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { BiSpa } from "react-icons/bi";
import { IoWifiOutline } from "react-icons/io5";
import { FaBottleWater } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

SwiperCore.use([Autoplay, Navigation]);

const beneficios = [
  {
    icono: <BsCupHot size={24} />,
    titulo: 'Desayuno Buffet',
    descripcion: 'L-V de 04:00 a 10:00 hrs / S-D y feriados de 04:00 a 10:30 hrs.',
  },
  {
    icono: <LiaMoneyBillWaveAltSolid size={24} />,
    titulo: 'Descuentos y cuotas sin intereses con bancos aliados',
    descripcion: '',
  },
  {
    icono: <FaBottleWater  size={24} />,
    titulo: 'Botella de agua de bienvenida',
    descripcion: '',
  },
  {
    icono: <LiaCocktailSolid size={24} />,
    titulo: 'Saria Lounge Bar',
    descripcion: '20% descuento en consumo',
  },
  {
    icono: <PiForkKnife size={24} />,
    titulo: 'Paprika Restaurante',
    descripcion: '20% descuento en consumo',
  },
  {
    icono: <BiSpa  size={24} />,
    titulo: 'Oceanic Spa',
    descripcion: '20% descuento en servicios',
  },
  {
    icono: <LiaCocktailSolid  size={24} />,
    titulo: 'Bebida de bienvenida',
    descripcion: '',
  },
  {
    icono: <IoWifiOutline size={24} />,
    titulo: 'Wifi de alta velocidad',
    descripcion: '',
  }
];

const bgOpacities = [
  'bg-primary-oceanic/100',
  'bg-primary-oceanic/95',
  'bg-primary-oceanic/90',
  'bg-primary-oceanic/85',
  'bg-primary-oceanic/80',
  'bg-primary-oceanic/75',
  'bg-primary-oceanic/70',
  'bg-primary-oceanic/65'
];

const BeneficiosDirectos = () => {
  return (
    <section className="SectionDiv">
      <div className="ContainerFlex p-0">
        <div className="w-full grid grid-cols-12">
          {/* Lado izquierdo */}
          <div className="bg-[#f2e5d5] p-3 text-sm text-gray-800 font-semibold flex items-center justify-center text-center col-span-6 lg:col-span-3">
            Reserve directamente <br />
            para disfrutar de los <br />
            siguientes beneficios <br />
            exclusivos
          </div>

          {/* Swiper visible en todas las resoluciones */}
          <div className="col-span-6 lg:col-span-9">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={0}
              autoplay={{ delay: 3000 }}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                },
              }}
              className="w-full py-4"
            >
              {beneficios.map((item, i) => (
                <SwiperSlide key={i} className="flex items-center justify-center">
                  <div className={`${bgOpacities[i % bgOpacities.length]} pt-7 lg:pt-13 h-[190px] w-full max-w-[240px] text-white p-6 flex flex-col items-center justify-start text-center `}>
                    <div className="mb-2 text-primary-oceanic bg-white rounded-full p-2">{item.icono}</div>
                    <div className="text-xs  text-white font-semibold px-2 py-1">{item.titulo}</div>
                    {item.descripcion && (
                      <p className="text-white mt-2 leading-tight text-[10px]!">
                        {item.descripcion}
                      </p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosDirectos;
