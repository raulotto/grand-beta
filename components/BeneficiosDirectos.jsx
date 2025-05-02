import { FaGift, FaWifi } from 'react-icons/fa';
import { RiDiscountPercentLine } from "react-icons/ri";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

SwiperCore.use([Autoplay]);

const beneficios = [
  {
    icono: <FaGift size={24} />,
    titulo: 'Desayuno Buffet',
    descripcion: '',
  },
  {
    icono: <LiaMoneyBillWaveAltSolid size={24} />,
    titulo: 'Cuotas sin intereses',
    descripcion: '',
  },
  {
    icono: <FaWifi size={24} />,
    titulo: 'Wifi gratis',
    descripcion: '',
  },
  {
    icono: <RiDiscountPercentLine size={24} />,
    titulo: '20% Dto en Saria Bar',
    descripcion: '',
  },
];

const bgOpacities = [
  'bg-[#36565f]/90',
  'bg-[#36565f]/80',
  'bg-[#36565f]/70',
  'bg-[#36565f]/60'
];

const BeneficiosDirectos = () => {
  return (
    <section className="SectionDiv">
      <div className="ContainerFlex p-0">
        <div className="w-full grid grid-cols-12">
          {/* Lado izquierdo */}
          <div className="bg-[#f2e5d5] p-6 text-sm text-gray-800 font-semibold flex items-center justify-center text-center md:col-span-3 col-span-6 lgcol-span-12">
            Reserve directamente <br />
            para disfrutar de los <br />
            siguientes beneficios <br />
            exclusivos
          </div>

          {/* Mobile: Swiper */}
          <div className="col-span-6 lg:col-span-12 md:hidden ">
            <Swiper
              slidesPerView={1.3}
              spaceBetween={0}
              loop={true}
              autoplay={{ delay: 2500 }}
            >
              {beneficios.map((item, i) => (
                <SwiperSlide className=' flex items-center justify-center' key={i}>
                  <div className={`${bgOpacities[i % bgOpacities.length]} h-[220px] text-white p-6 flex flex-col items-center justify-center text-center `}>
                    <div className="mb-2 text-primary-oceanic  bg-white rounded-full p-2">{item.icono}</div>
                    <div className="text-xs text-white font-semibold px-2 py-1">{item.titulo}</div>
                    {item.descripcion && (
                      <p className="text-[11px] mt-2 leading-tight whitespace-pre-line">
                        {item.descripcion}
                      </p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:col-span-9 grid-cols-4">
            {beneficios.map((item, i) => (
              <div
                key={i}
                className={`${bgOpacities[i % bgOpacities.length]} text-white p-6 flex flex-col items-center justify-center text-center`}
              >
                <div className="mb-2 text-primary-oceanic bg-white rounded-full p-2">{item.icono}</div>
                <div className="text-xs text-white font-semibold px-2 py-1">{item.titulo}</div>
                {item.descripcion && (
                  <p className="text-[11px] mt-2 leading-tight whitespace-pre-line">
                    {item.descripcion}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosDirectos;
