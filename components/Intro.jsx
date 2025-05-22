import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import { IoEnterOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import TextoExpandible from '@/components/TextoExpandible';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";





  const Intro = ({ data }) => {
    return (
      <>
        <section className="SectionDiv pb-0 scroll-mt-24 lg:scroll-mt-32" id="next-section">
          <div className="ContainerFlex items-start">
            <div className="flex-1 lg:max-w-lg">
              <div className="flex gap-2 mb-4">
              <Image
                src="/images/best-of-wyndham-grand-logo.jpg"
                alt="Tripadvisor Travelers' Choice Awards 2025"
      width={80}
      height={80}/>
      <Image
                src="/images/WG-nivel-2.png"
                alt="Tripadvisor Travelers' Choice Awards 2025"
      width={80}
      height={80}/>
          <Image
      src="/images/tc_2024_botb_badge_green.png" 
      alt="Tripadvisor Travelers' Choice Awards 2025"
      width={84}
      height={80}
    />
                </div>
              
              <h3 className="suptitle">{data.suptitle}</h3>
              <h4 className="TitleSection">{data.title}</h4>
              <div className="text-[16px] text-gray-500 PrataFont font-[100] mb-2">{data.subtitle}</div>
  
              <TextoExpandible
  parrafos={data.paragraphs}
  masInfo={data.masInfo}
  menosInfo={data.menosInfo}
/>

            </div>
  
            <div className="w-full lg:max-w-lg infohotelbox">
              <div className="bg-primary-dune/60 p-6 text-center mx-auto w-full lg:w-[90%]">
              <div className="mb-4">
  {/* Logo + rating */}
  <div className="flex items-center gap-4 mb-2">

    <div className='flex items-center justify-start w-full items-center gap-2'>
      <div className="flex items-center gap-1">
        <span className="text-lg font-bold text-gray-800">{data.estrellas}</span>
        {[1, 2, 3, 4, 5].map((i) => {
          const rating = parseFloat(data.estrellas);
          return (
            <span key={i} className="text-[#355764] text-[1em]">
              {rating >= i ? (
                <IoIosStar />
              ) : rating >= i - 0.5 ? (
                <IoIosStarHalf />
              ) : (
                <IoIosStarOutline />
              )}
            </span>
          );
        })}
      </div>
      <p className="text-sm text-gray-500">({data.totalComentarios} comentarios)</p>
    </div>
  </div>

  {/* Información de contacto */}
  <div className="text-left text-sm space-y-2 text-gray-700">
    <p className="flex items-center gap-2">
      <FaMapMarkerAlt className="text-[#40666a]" />
      {data.direccion}
    </p>
    <p className="flex items-center gap-2">
      <FaEnvelope className="text-[#40666a]" />
      {data.email}
    </p>
    <p className="flex items-center gap-2">
      <FaPhone className="text-[#40666a]" />
      {data.telefono}
    </p>
  </div>
</div>

                <div className="flex items-start mb-4 divide-x divide-gray-400 ">
                <div class="px-4 flex  items-center gap-2">
                    <div className="flex flex-col items-center">
                    <span className="text-2xl font-semibold text-gray-900">{data.checkInHora}</span>
                    <span className="text-[10px] font-semibold tracking-wider text-gray-600 uppercase">
                      {data.checkIn}
                    </span>
                    </div>
                    <IoExitOutline className="text-[2em] text-primary-oceanic" />

                  </div>
                  <div class="px-4 flex  items-center gap-2">
                    <div className="flex flex-col items-center ">
                    <span className="text-2xl font-semibold text-gray-900 ">{data.checkOutHora}</span>
                    <span className="text-[10px] font-semibold tracking-wider text-gray-600 uppercase">
                      {data.checkOut}
                    </span>
                    </div>
                    <IoEnterOutline className="text-[2em] text-primary-oceanic" />

                  </div>
                </div>
                <hr className="border-t border-gray-300 my-4 hidden" />
                <a href="#" className="text-sm text-[#2e737a] hover:underline hidden">
                  {data.viewPolicies}
                </a>
              </div>
              {data.taxiLink && data.taxi && (
  <div className='p-6 text-center mx-auto w-full'>
    <Link href={data.taxiLink} className="ColorButton1 ButtonRounded block w-full">
      {data.taxi}
    </Link>
  </div>
)}

            </div>
          </div>
        </section>
  
        <section className="SectionDiv py-0 BgImageRight">
          <div className="ContainerFlex flex-col-reverse lg:flex-row">
            <div className="flex-1 max-w-md lg:max-w-lg">
              <h4 className="TitleSectionMd">{data.nearbyTitle}</h4>
              <ul className="space-y-2 mt-4">
                {data.lugares.map((lugar, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <FaMapMarkerAlt className="mt-1 text-support-custom-gray" />
                    <div className='ListItemLugares'>
                      <span className="text-primary-oceanic">{lugar.nombre}</span>
                      <span className="block text-gray-500">{lugar.tiempo}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="w-full lg:max-w-lg">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5771.998648251757!2d-77.11881088793656!3d-12.030004988156259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cd9c6f771a1f%3A0xfb26782c8a84c82e!2sWyndham%20Grand%20Costa%20Del%20Sol%20Lima%20Airport!5e1!3m2!1ses!2spe!4v1746125580060!5m2!1ses!2spe"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
            </div>
          </div>
        </section>
  
      </>
    );
  };
  
  export default Intro;
  
