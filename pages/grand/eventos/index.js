'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import ContadorEventos from '@/components/ContadorEventos'
import HeaderTrad from '@/components/HeaderTrad'
import Footer from '@/components/Footer'
import HeroSlider from '@/components/HeroSlider'
import Header from '@/components/Header'
import eventos from '@/data/eventos.json'
import capacidadData from '@/data/capacidadData.json';
import { FaPlus, FaMinus } from 'react-icons/fa';
import disposiciones from '@/data/disposiciones.json';


export default function Eventos() {
  const categorias = ['Todas', 'Bodas', 'Reuniones']
  const [categoriaActiva, setCategoriaActiva] = useState('Todas')

  const eventosFiltrados =
    categoriaActiva === 'Todas'
      ? eventos
      : eventos.filter((e) => e.categoria === categoriaActiva)


      const [openIndex, setOpenIndex] = useState(null);

      const toggle = (index) => {
        if (openIndex !== index) {
          setOpenIndex(index); // solo cambia si es otra pestaña
        }
      };
      
      const [unidad, setUnidad] = useState('metros');

  const convertirArea = (m2) => {
    return unidad === 'metros'
      ? `${m2} m²`
      : `${(m2 * 10.7639).toFixed(0)} ft²`;
  };

      const items = [
        {
          title: "Tabla de Capacidad",
          content: (
            <div className="mt-6">
            {/* Toggle unidades */}
            <div className="mb-4 inline-flex bg-gray-100 rounded-full overflow-hidden">
              <button
                className={`px-4 py-2 text-sm ${
                  unidad === 'pies' ? '' : 'bg-blue-600 text-white'
                }`}
                onClick={() => setUnidad('metros')}
              >
                Metros
              </button>
              <button
                className={`px-4 py-2 text-sm ${
                  unidad === 'pies' ? 'bg-blue-600 text-white' : ''
                }`}
                onClick={() => setUnidad('pies')}
              >
                Pies
              </button>
            </div>
      
            {/* Tabla */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm">
                <thead className="bg-gray-100 text-left">
                  <tr>
                    <th className="px-4 py-2 border">Sala</th>
                    <th className="px-4 py-2 border">Tamaño</th>
                    <th className="px-4 py-2 border">Altura</th>
                    <th className="px-4 py-2 border">Capacidad</th>
                    <th className="px-4 py-2 border">Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  {capacidadData.map((sala, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-4 py-2">{sala.salon}</td>
                      <td className="px-4 py-2">{convertirArea(sala.area)}</td>
                      <td className="px-4 py-2">
  {unidad === 'metros'
    ? `${sala.altura} m`
    : `${(sala.altura * 3.28084).toFixed(1)} ft`}
</td>

                      <td className="px-4 py-2">{sala.capacidad}</td>
                      <td className="px-4 py-2">{sala.tipo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          ),
        },
        {
          title: "Ejemplos de disposición de sala",
          content: (
            <div className="grid gap-4 ">
              {disposiciones.map((item, i) => (
                <section key={i} className="pt-0">
                  <div className="ContainerFlex p-0">
                    <div className="w-[20%]">
                      <div className="relative w-full">
                        <Image
                          src={item.imagen}
                          alt={item.titulo}
                          width={200}
                          height={200}
                          className="object-cover items-center"
                        />
                      </div>
                    </div>
                    <div className="w-[80%]">
                      <h4 className="TitleSection">{item.titulo}</h4>
                      <p className="text-gray-700 leading-relaxed text-parrafos">
                        {item.descripcion}
                      </p>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          )
          ,
        },
        {
          title: "Equipos y servicios",
          content: (
            <p className="text-sm text-gray-600 mt-2">
              Servicios como proyector, micrófonos, coffee break, etc.
            </p>
          ),
        },
      ];


  return (
    <main className="mx-auto">
      <HeaderTrad />
      <HeroSlider page="eventos" />

      {/* SECCIÓN: UNFORGETTABLE MEETINGS */}
      <section className="SectionDiv">
        <div className="ContainerFlex flex-col text-center">
          <h2 className="TitleSection">Organiza un evento inolvidable y empieza a planificar con nosotros​</h2>
          <p className="max-w-3xl text-base text-gray-600 leading-relaxed mt-4">
          Ofrecemos más de 70 salones a nivel nacional diseñados para todo tipo de reuniones, desde grandes eventos hasta juntas ejecutivas. Adaptamos cada espacio a tus necesidades y brindamos acceso a internet en todas las áreas. Además, contamos con equipos audiovisuales de alta gama para garantizar la mejor experiencia en imagen y sonido.
          </p>
        </div>
      </section>

      {/* SECCIÓN: PLANIFICA TUS EVENTOS */}
      <section className="SectionDiv">
        <div className="ContainerFlex flex-col text-center">
          <h2 className="TitleSection">Empieza a planificar tus reuniones o eventos aquí</h2>
          <p >
          ¡Bienvenido al Hotel Costa Del Sol Wyndham Lima, ubíquese en un lugar privilegiado de la ciudad para que pueda conocer los atractivos turísticos que esta hermosa región del país tiene para ofrecerte! Con más de 60 metros cuadrados de espacio para eventos y 1 sala de eventos para elegir, Costa del Sol Wyndham Cusco es el lugar ideal para celebrar tu próxima conferencia, reunión de negocios o evento social.
          </p>
        </div>
      </section>

      {/* SECCIÓN: TARJETAS EN GRILLA / CARRUSEL */}
      <section className="SectionDiv">
        <div className="ContainerFlex">

          {/* VERSIÓN ESCRITORIO: GRILLA DE 4 TARJETAS */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {data.map((card, index) => (
              <GridCard key={index} card={card} />
            ))}
          </div>

          {/* MOBILE: CARRUSEL SLIDE POR SLIDE CON AUTOPLAY */}
          <div className="block lg:hidden w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="w-full"
            >
              {data.map((card, index) => (
                <SwiperSlide key={index}>
                  <GridCard card={card} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

      {/* CONTADOR EVENTOS */}
      <ContadorEventos />
            {/* SECCIÓN: REUNIONES Y EVENTOS */}
            <section className="pt-0 SectionDiv BgImageLeft">
            
            <div className="ContainerFlex ">
              {/* Contenedor de imágenes */}
              <div className="w-full md:max-w-lg hidden lg:block">
        <div className="relative w-full h-[200px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/images/wg-lobby.jpg"
            alt="Piscina"
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      
              {/* Contenido del hotel */}
              <div className="flex-1 max-w-lg">
                <div>
                
      
                <h4 className="TitleSection">
                  Reuniones & Eventos
                </h4>
                  <p className="suptitle">Un lugar inspirador para dar vida a grandes ideas</p>
                </div>
                <p className="text-gray-700 leading-relaxed text-parrafos">
                  Ubicado dentro de la Ciudad aeropuerto (Jorge Chávez - LIM), Wyndham
                  Grand Costa del Sol Lima Airport te evita la caminata de ida y vuelta
                  por tiempo, al estar en una ciudad estratégica, con acceso directo a la
                  terminal aérea a través de un cómodo pasillo. A tan solo 30 minutos, la
                  sede se encuentra financiera y un megaplex ideal para los 1,200 m² con
                  25 renovadas habitaciones con diseño de lujo y totalmente premium en un
                  entorno sin igual. Además, en la región se pueden encontrar sitios con
                  la importancia de Lima, como la Plaza de Armas o el Museo Submarino
                  Abtao, la Catedral de Lima, la iglesia de San Francisco y el icónico
                  Parque del Amor en Miraflores.
                </p>
              </div>
            </div>
          </section>
{/* SECCIÓN: SALAS FILTRABLES */}
<section className="SectionDiv">
        <div className="ContainerFlex flex-col items-start">

          <div className="w-full sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 flex overflow-x-auto pb-4 sm:overflow-visible snap-x snap-mandatory scroll-smooth">
            {eventosFiltrados.map((evento) => (
              <div
                key={evento.id}
                className="w-[120px] min-w-[270px] sm:w-auto sm:min-w-0 mr-4 snap-start flex-shrink-0"
              >
                <EventosCard evento={evento} />
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="SectionDiv">
      <div className="ContainerFlex flex-col w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full border-b border-gray-200 py-4"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h4 className="text-sm font-medium text-black-grand">
                {item.title}
              </h4>
              <span className="text-lg text-gray-500">
  {openIndex === index ? <FaMinus className="w-4 h-4"/> : <FaPlus className="w-4 h-4"/>}
</span>

            </div>
            <div
  className={`transition-all duration-500 ease-in-out overflow-hidden ${
    openIndex === index ? "max-h-auto mt-2" : "max-h-0"
  }`}
>
  <div className="text-sm text-gray-600 px-1">{item.content}</div>
</div>

          </div>
        ))}
      </div>
    </section>

      {/* SECCIÓN: CATERING */}
      <section  className="SectionDiv BgImageLeft">
        
  
    <div className="ContainerFlex">
      
      {/* Contenedor de imágenes */}
      <div className="flex-1 max-w-md lg:max-w-lg">
        <div> 
            {/* Título principal */}
            <h4 className="TitleSection">
              Catering
            </h4>
            <div className="divider-line"></div>
        </div>
        <div className="mx-auto">
        <p className="text-parrafos">
        Alojamiento de lujo en la "Ciudad de los Reyes. Recarga energías entre vuelos en Wyndham Grand Costa del Sol Lima Airport y disfruta de una de nuestras 249 habitaciones de última tecnología. Con express self check-in y opciones libres de humo, cada habitación y suite está diseñada para ofrecerte el máximo confort y una estancia sin complicaciones. Gracias a la tecnología inteligente, puedes solicitar servicio de lavandería o room service 24/7 con solo tocar un botón, mientras que las ventanas insonorizadas te brindan vistas espectaculares de la capital peruana y el ambiente perfecto para un descanso reparador
        </p>
       
        </div>
      </div>
  
      {/* Contenido del hotel */}
      <div className="w-full md:max-w-lg hidden lg:block">
        <div className="relative w-full h-[200px] md:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/images/WG-Habitacion-Suite-Presidencial-1.jpg"
            alt="Piscina"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>

      

      <Footer />
    </main>
  )
}

const GridCard = ({ card }) => {
  return (
    <div className="CardHotel ">
      <div className="CardHotelImage">
        <Image src={card.image} alt={card.title} layout="fill" objectFit="cover" />
      </div>
      <div className="CardHotelContent">
        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
        <p className="text-sm mb-4">{card.text}</p>
        <div className="ButtonInfoStatic">
        <Link href={card.link} className="PrimaryColor ButtonRounded">
          {card.buttonText}
        </Link>
        </div>
      </div>
    </div>
  )
}

const data = [
  {
    title: 'Reuniones y conferencias',
    text: 'Encuentra soluciones innovadoras y versátiles que te acompañan.',
    buttonText: 'Más Información',
    link: '/reuniones',
    image: '/images/celebraciones-avatar-image.jpg',
  },
  {
    title: 'Bodas',
    text: 'Haz que el gran día sea tan perfecto como siempre soñaste.',
    buttonText: 'Comenzar a planificar',
    link: '/bodas',
    image: '/images/bodas-avatar-image.jpg',
  },
  {
    title: 'Celebraciones',
    text: 'Eventos familiares y de empresa con opciones para grupos pequeños.',
    buttonText: 'Explorar ahora',
    link: '/celebraciones',
    image: '/images/celebraciones-avatar-image.jpg',
  },
  {
    title: 'Viaje en grupo',
    text: 'Para equipos, estudiantes o familias a vivir aventuras memorables.',
    buttonText: 'Comienza',
    link: '/viaje-grupo',
    image: '/images/eventos-avatar-image.jpg',
  },
]

import EventosCard from '@/components/EventosCard'
