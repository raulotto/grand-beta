
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";

import { LiaCocktailSolid } from "react-icons/lia";
import { PiForkKnife } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { BiSpa } from "react-icons/bi";
import { IoWifiOutline } from "react-icons/io5";

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
    descripcion: '',
  },
  {
    icono: <LiaMoneyBillWaveAltSolid size={24} />,
    titulo: 'Cuotas sin intereses',
    descripcion: '',
  },
  {
    icono: <IoWifiOutline size={24} />,
    titulo: 'Wifi gratis de alta velocidad',
    descripcion: '',
  },
  {
    icono: <LiaCocktailSolid size={24} />,
    titulo: '20% Dcto en Saria Bar',
    descripcion: '',
  },
  {
    icono: <PiForkKnife size={24} />,
    titulo: '20% Dcto en Paprika Restaurante',
    descripcion: '',
  },
  {
    icono: <BiSpa  size={24} />,
    titulo: '20% Dcto en Servicio Wellness',
    descripcion: '',
  },
];

const bgOpacities = [
  'bg-[#36565f]/100',
  'bg-[#36565f]/90',
  'bg-[#36565f]/80',
  'bg-[#36565f]/70',
  'bg-[#36565f]/60',
  'bg-[#36565f]/50',
];

const BeneficiosDirectos = () => {
  return (
    <section className="SectionDiv">
      <div className="ContainerFlex p-0">
        <div className="w-full grid grid-cols-12">
          {/* Lado izquierdo */}
          <div className="bg-[#f2e5d5] p-6 text-sm text-gray-800 font-semibold flex items-center justify-center text-center col-span-6 lg:col-span-3">
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
              loop={true}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                },
              }}
              className="w-full py-4"
            >
              {beneficios.map((item, i) => (
                <SwiperSlide key={i} className="flex items-center justify-center">
                  <div className={`${bgOpacities[i % bgOpacities.length]} h-[190px] w-full max-w-[240px] text-white p-6 flex flex-col items-center justify-center text-center `}>
                    <div className="mb-2 text-primary-oceanic bg-white rounded-full p-2">{item.icono}</div>
                    <div className="text-xs  text-white font-semibold px-2 py-1">{item.titulo}</div>
                    {item.descripcion && (
                      <p className="text-[11px] mt-2 leading-tight">
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
