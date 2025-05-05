import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import { FaMapMarkerAlt, FaPlane } from 'react-icons/fa';
import { IoEnterOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import TextoExpandible from '@/components/TextoExpandible';





  const Intro = ({ data }) => {
    return (
      <>
        <section className="SectionDiv pb-0">
          <div className="ContainerFlex items-start">
            <div className="flex-1 max-w-lg">
              <h3 className="suptitle">{data.suptitle}</h3>
              <h4 className="TitleSection">{data.title}</h4>
              <div className="text-[16px] text-gray-500 PrataFont font-[100] mb-2">{data.subtitle}</div>
  
              <TextoExpandible
  parrafos={data.paragraphs}
  masInfo={data.masInfo}
  menosInfo={data.menosInfo}
/>

            </div>
  
            <div className="w-full md:max-w-lg">
              <div className="bg-primary-dune/60 p-6 text-center mx-auto">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col items-center">
                    <IoExitOutline className="text-[2em] text-primary-oceanic" />
                    <span className="text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      {data.checkIn}
                    </span>
                    <span className="text-2xl font-semibold text-gray-900 mt-1">{data.checkInHora}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <IoEnterOutline className="text-[2em] text-primary-oceanic" />
                    <span className="text-xs font-semibold tracking-wider text-gray-600 uppercase">
                      {data.checkOut}
                    </span>
                    <span className="text-2xl font-semibold text-gray-900 mt-1">{data.checkOutHora}</span>
                  </div>
                </div>
                <hr className="border-t border-gray-300 my-4" />
                <a href="#" className="text-sm text-[#2e737a] hover:underline">
                  {data.viewPolicies}
                </a>
              </div>
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
  
            <div className="w-full md:max-w-lg">
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
  
