import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import { FaMapMarkerAlt, FaPlane } from 'react-icons/fa';
import ServiciosHotel from './ServiciosHotel';
import { IoEnterOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import TextoExpandible from '@/components/TextoExpandible';





  const LugaresCercanos = () => {
    const lugares = [
      { nombre: 'Malecón de la Costa Verde', tiempo: 'A 4 min en auto o 12 min a pie.', icono: <FaMapMarkerAlt /> },
      { nombre: 'Pirámide Huaca Huallamarca', tiempo: 'A 8 min en auto.', icono: <FaMapMarkerAlt /> },
      { nombre: 'Ruinas de Huaca Pucllana', tiempo: 'A 15 min en auto.', icono: <FaMapMarkerAlt /> },
      { nombre: 'Museo Larco', tiempo: 'A 15 min en auto.', icono: <FaMapMarkerAlt /> },
      { nombre: 'Larco Mar', tiempo: 'A 20 min en auto.', icono: <FaMapMarkerAlt /> },
      { nombre: 'Centro Histórico de Lima', tiempo: 'A 30 min en auto.', icono: <FaMapMarkerAlt /> },
      { nombre: 'Aeropuerto Internacional Jorge Chávez', tiempo: 'A 40 min en auto.', icono: <FaPlane /> }
    ];
  
    return (
      <div className="mt-6">
        <ul className="space-y-2">
          {lugares.map((lugar, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="mt-1 text-support-custom-gray">{lugar.icono}</span>
              <div className='ListItemLugares'>
                <span className="text-primary-oceanic">{lugar.nombre}</span>
                <span className="block text-gray-500">{lugar.tiempo}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

const Intro = () => {
  return (
    <>
    <section className="SectionDiv pb-0">
      
      <div className="ContainerFlex items-start">
        {/* Contenedor de imágenes */}
      {/* Contenido del hotel */}
      <div className="flex-1 max-w-lg ">
          <div>
          <h3 className="suptitle">
        Experimenta la exclusividad dentro de la ciudad aeropuerto
      </h3>

          <h4 className="TitleSection">
            Wyndham Grand Costa del Sol Lima City
          </h4>
            <div className="text-[16px] text-gray-500 PrataFont font-[100] mb-2">Estancia premium y servicio de clase mundial</div>
          </div>
          <div className="flex items-center gap-2 my-4 hidden">
            <span className="text-lg font-bold text-primary-oceanic">★★★★★</span>
            <span className="text-gray-700 text-sm">4.6 | 905 Opiniones</span>
          </div>
          <TextoExpandible
  parrafos={[
    `Ubicado dentro de la Ciudad aeropuerto (Jorge Chávez - LIM), Wyndham
        Grand Costa del Sol Lima Airport te evita la caminata de ida y vuelta
        por tiempo, al estar en una ciudad estratégica, con acceso directo a la
        terminal aérea a través de un cómodo pasillo. A tan solo 30 minutos, la
        sede se encuentra financiera y un megaplex ideal para los 1,200 m² con
        25 renovadas habitaciones con diseño de lujo y totalmente premium en un
        entorno sin igual. Además, en la región se pueden encontrar sitios con
        la importancia de Lima, como la Plaza de Armas o el Museo Submarino
        Abtao, la Catedral de Lima, la iglesia de San Francisco y el icónico
        Parque del Amor en Miraflores.`,
    `Ubicado dentro de la Ciudad aeropuerto (Jorge Chávez - LIM), Wyndham
        Grand Costa del Sol Lima Airport te evita la caminata de ida y vuelta
        por tiempo, al estar en una ciudad estratégica, con acceso directo a la
        terminal aérea a través de un cómodo pasillo. A tan solo 30 minutos, la
        sede se encuentra financiera y un megaplex ideal para los 1,200 m² con
        25 renovadas habitaciones con diseño de lujo y totalmente premium en un
        entorno sin igual. Además, en la región se pueden encontrar sitios con
        la importancia de Lima, como la Plaza de Armas o el Museo Submarino
        Abtao, la Catedral de Lima, la iglesia de San Francisco y el icónico
        Parque del Amor en Miraflores.`
  ]}
/>

        </div>
  
      {/* Contenido del hotel */}
      <div className="w-full md:max-w-lg ">
      <div class="bg-primary-dune/60 p-6 text-center  mx-auto">
  <div class="flex justify-between items-start mb-4">
    <div class="flex flex-col items-center">
    <IoExitOutline className='text-[2em] text-primary-oceanic'/>
      <span class="text-xs font-semibold tracking-wider text-gray-600 uppercase">
      Horario de Check In</span>
      <span class="text-2xl font-semibold text-gray-900 mt-1">14:00</span>
    </div>
    <div class="flex flex-col items-center">
    <IoEnterOutline className='text-[2em] text-primary-oceanic'/>
      <span class="text-xs font-semibold tracking-wider text-gray-600 uppercase">
      Horario de Check Out</span>
      <span class="text-2xl font-semibold text-gray-900 mt-1">12:00</span>
    </div>
  </div>
  <hr class="border-t border-gray-300 my-4" />
  <a href="#" class="text-sm text-[#2e737a] hover:underline">Ver todas las políticas del hotel</a>
</div>

      </div>
      </div>
    </section>
    <section  className="SectionDiv py-0 BgImageRight">
        
  
    <div className="ContainerFlex flex-col-reverse lg:flex-row">
      
      {/* Contenedor de imágenes */}
      <div className="flex-1 max-w-md lg:max-w-lg">
        <div> 
            {/* Título principal */}
            <h4 className="TitleSectionMd">
              ¿Qué encontrar cerca?
            </h4>
        </div>
        <div className="mx-auto">
        <LugaresCercanos />
        <div className="ButtonInfoStatic">
       

  </div>
        </div>
      </div>
  
      {/* Contenido del hotel */}
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
<ServiciosHotel />

  </>
  );
};

export default Intro;
