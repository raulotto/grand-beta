import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import Footer from '@/components/Footer'
import HeroSlider from '@/components/HeroSlider';
import BookingForm from '@/components/BookingForm';
import RestaurantesGallery from '@/components/RestaurantesGallery'
import Link from 'next/link';
import HeaderTrad from '@/components/HeaderTrad';
import GridCardsSection from '@/components/GridCardsSection'
import restaurantesCards from '@/data/restaurantesCards.json'
import chefCards from '@/data/chefsCards.json'

import { FaClock } from "react-icons/fa";
import PromoSwiper from '@/components/PromoSwiiper';





export default function Restaurantes() {
  return (
    <main className="mx-auto">
        <HeaderTrad />
              <HeroSlider page="restaurantes" />
        <BookingForm />
      {/* SECCIÓN: Déjate envolver por ... */}
      <section className="SectionDiv pb-0">
        <div className="ContainerFlex flex-col text-center">
          <h2 className="TitleSection">Déjate envolver por los sabores de Lima</h2>
          <p className="max-w-3xl text-base text-gray-600 leading-relaxed mt-4">
            Descubre la reconocida escena culinaria de Perú junto con un ambiente sofisticado y un servicio excepcional en Wyndham Grand Costa del Sol Lima Airport. Comienza el día con energía disfrutando de un variado desayuno buffet que combina lo mejor de la gastronomía peruana y mundial en nuestro restaurante internacional abierto todo el día.
            Nuestro elegante bar 24/7 ofrece cócteles elaborados por expertos, además de una selecta carta de vinos, licores y bebidas sin alcohol. Para quienes buscan algo rápido y delicioso, nuestro snack bar presenta opciones de comida callejera al estilo peruano, perfectas para viajeros en movimiento.
            Y para la máxima comodidad, el servicio a la habitación disponible las 24 horas lleva hasta tu puerta una exquisita selección de platos locales e internacionales.
          </p>
        </div>
      </section>

      {/* SECCIÓN: TARJETAS EN GRILLA Y CARRUSEL */}

      <section className="SectionDiv py-0">

      <GridCardsSection cards={restaurantesCards} />
</section>

        {/* DESAYUNO BUFFET */}
       <section className="py-0 SectionDiv BgImageLeft">
             
             <div className="ContainerFlex ">
               {/* Contenedor de imágenes */}
               <div className="w-full lg:w-[60%]">
         <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
           <Image
             src="/images/Costa-del-sol-Desayuno-buffet-mobile.jpg"
             alt="Piscina"
             fill
             className="object-cover"
           />
         </div>
       </div>
       
       
               {/* Contenido del hotel */}
               <div className="w-full lg:w-[40%]">
                 <div>
                 
       
                 <h4 className="TitleSectionMd mb-4">
                 Empieza el día con desayuno buffet desde las 04:00
                 </h4>
                   
                 </div>
                 
                 <p className="text-parrafos">
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

           <RestaurantesGallery />

 {/* PAPRIKA */}
 
 <section className="py-0 SectionDiv BgImageLeft">
             
             <div className="ContainerFlex ">
               {/* Contenedor de imágenes */}
               <div className="w-full lg:w-[60%]">
         <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
           <Image
             src="/images/cds/cds-amigas-paprika.jpg"
             alt="Piscina"
             fill
             className="object-cover"
           />
         </div>
       </div>
       
       
               {/* Contenido del hotel */}
               <div className="w-full lg:w-[40%]">
                 <div>
                 
       
                 <h4 className="TitleSectionMd mb-4">
                 Páprika Restaurantes
                 </h4>
                   
                 </div>
                 
                 <p className="text-parrafos">
                 A chic bistro concept, with the signature of Olivier da Costa. The restaurant takes over with a menu that exposes the connection between respect for traditions, with the irreverence of restaurateur Olivier, where highlights are the Monkfish Picanha or Lobster steak.
                 Opening times: 5 pm to midnight (service)
5 pm to 10:30 pm (kitchen)  
            </p>
            <div className="ButtonInfoStatic">
            <Link
      className="ColorButton1 ButtonRounded"
      href="/grand/habitaciones"
      aria-label="Descubre nuestras habitaciones"
    >
      Book Now
    </Link>
    <Link
      className="ColorButton1 ButtonRounded ml-2"
      href="/grand/habitaciones"
      aria-label="Descubre nuestras habitaciones"
    >
      Menu
    </Link>
      </div>
               </div>
             </div>
           </section>

 {/* SARIA */}

 <section className="SectionDiv BgImageRight py-0">
        
  
          <div className="ContainerFlex flex-col-reverse lg:flex-row">
          
          {/* Contenedor de imágenes */}
          <div className="w-full lg:w-[40%]">
          <div>
                 
       
                 <h4 className="TitleSectionMd mb-4">
                 Saria Bar
                 </h4>
                   
                 </div>
            <div className="mx-auto">
            <p className="text-parrafos">
            Take your seat in the early evening to enjoy an irresistible beverage and sample a seductive selection of tasty bites or join only for a relaxing nightcap.

Explore the cocktails menu and try one of our signature cocktails. For the less adventurous, the classics are always available.

Opening times: 5 pm to midnight (service)
5 pm to 10:30 pm (kitchen)  
            </p>
            <div className="ButtonInfoStatic">
            <Link
      className="ColorButton1 ButtonRounded"
      href="/grand/habitaciones"
      aria-label="Descubre nuestras habitaciones"
    >
      Menu
    </Link>
    
      </div>
            </div>
          </div>
      
          {/* Contenido del hotel */}
          <div className="w-full lg:w-[60%]">
            <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
              <Image
                src="/images/cds/cds-barman.jpg"
                alt="Piscina"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 SectionDiv BgImageLeft">
             
             <div className="ContainerFlex ">
               {/* Contenedor de imágenes */}
               <div className="w-full lg:w-[60%]">
         <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
           <Image
             src="/images/wg-paprika.jpg"
             alt="Piscina"
             fill
             className="object-cover"
           />
         </div>
       </div>
       
       
               {/* Contenido del hotel */}
               <div className="w-full lg:w-[40%]">
                 <div>
                 
       
                 <h4 className="TitleSectionMd mb-4">
                 Paraka Barrio Gourmet
                 </h4>
                   
                 </div>
                 
                 <p className="text-parrafos">
A sun-splashed spot beside the swimming pool, a popular spot for leisurely indulgence, serving cool drinks and refreshing cocktails daily from 10:30 am to 6 pm.

For lunch, be tempted with a fresh, playful, delicious menu focused on healthy signature dishes, salads, pizzas and burgers.

Service: 10:30 am to 5 pm
Lunch: 12 pm to 5 pm
Seasonally open
            </p>
            <div className="ButtonInfoStatic">
            <Link
      className="ColorButton1 ButtonRounded"
      href="/grand/habitaciones"
      aria-label="Descubre nuestras habitaciones"
    >
      Menu
    </Link>
      </div>
               </div>
             </div>
           </section>
           <section className="SectionDiv py-12 px-6 bg-support-ash/5">
      <div className="ContainerFlex flex-col md:flex-row items-center gap-8">
        {/* Imagen */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          <Image
            src="https://picsum.photos/id/1050/800/600" // Puedes reemplazar con una imagen real
            alt="Grand Eats en celular"
            fill
            className="object-cover rounded"
          />
        </div>

        {/* Contenido */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="TitleSection mb-2">
            GRAND EATS DELIVERY
          </h2>
          <p className="text-gray-600 mb2 max-w-md mx-auto md:mx-0">
            Elige entre una variedad de opciones de menú para que te las lleven y disfrutes en la comodidad de tu habitación.
          </p>

          <div className="flex flex-col sm:flex-row gap-1 lg:gap-4 justify-center md:justify-start mb-4">
          <div className="ButtonInfoStatic mt-4">
              <Link
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="ButtonOutline text-[10px] font-semibold w-full"
    >
     Haz tu pedido Online
    </Link>
            </div>
      <div className="ButtonInfoStatic mt-4">
              <Link
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="ButtonOutline text-[10px] font-semibold w-full"
    >
     Ver menú de bebidas
    </Link>
            </div>
            <div className="ButtonInfoStatic mt-4">
              <Link
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="ButtonOutline text-[10px] font-semibold w-full"
    >
     Ver menú de comidas
    </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-800 font-semibold mb-1">
            <FaClock className="text-sm" />
            <span>HORARIO DE ATENCIÓN</span>
          </div>
          <p className="text-gray-600 text-sm text-left
">
            Domingo a Jueves 4:00 PM - 10:00 PM<br />
            Viernes y Sábado 4:00 PM – 11:00 PM | Solo pedidos online
          </p>
        </div>
      </div>
    </section>
    <section className="SectionDiv">
      <div className="ContainerFlex flex-col">
      <h2 className="TitleSection">
            Descubre las mejores ofertas y disfruta al máxiimo de tu experiencia con nosotros
          </h2>
    <PromoSwiper/>
    </div>
    </section>
    <div className="SectionDiv">
    <h2 className="TitleSection">
            Nuestros Chefs
          </h2>
    <GridCardsSection cards={chefCards} variant='person-card' />
    </div>
      <Footer/>
    </main>
  );
}

