import React from 'react';
import Link from "next/link";

import Image from "next/image";


const RestBar = () => {
  return (
    <section id="restaurantes" className="SectionDiv BgImageLeft">
      
      {/* Cabecera principal con imagen de fondo a pantalla completa */}
     

      {/* Contenedor de contenido */}
      <div className="ContainerFlex">
        
        {/* Contenedor de texto */}
        <div className="flex-1 max-w-md lg:max-w-lg">
          <div> 
          <h6 className="suptitle">Servicios de primera clase</h6>
            <h4 className="TitleSection">
            Comer & Beber
            </h4>
            <div className="divider-line"></div>
          </div>
          <div className="mx-auto">
            <p className="text-parrafos">
              En Wyndham Grand Costa del Sol Lima Airport descubre lo mejor de la reconocida gastronomía peruana en 
              ambientes sofisticados y con un servicio excepcional. Comienza el día con un desayuno buffet que combina 
              clásicos peruanos y favoritos internacionales en nuestro restaurante de cocina global abierto todo el día.
              Disfruta de cócteles cuidadosamente elaborados, una selección de vinos, licores y bebidas sin alcohol en 
              nuestro elegante bar 24/7, o prueba auténticos sabores locales en nuestro snack bar de comida callejera 
              peruana, perfecto para viajeros en movimiento. Y para la máxima comodidad, nuestro room service 24/7 te 
              lleva lo mejor de la gastronomía peruana directamente a tu habitación.
            </p>
            <div className="ButtonInfoStatic">
        <Link
  className="PrimaryColor ButtonRounded"
  href="/grand/restaurantes"
  aria-label="Descubre nuestras habitaciones"
>
  Descubre
</Link>

  </div>
          </div>
        </div>

        {/* Imagen del hotel */}
        <div className="w-full md:max-w-lg hidden lg:block">
          <div className="relative w-full h-[200px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/wg-paprika.jpg"
              alt="Piscina"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestBar;
