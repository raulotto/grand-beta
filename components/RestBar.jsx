import React from 'react';
import Image from "next/image";


const RestBar = () => {
  return (
    <section className="SectionDiv BgImageLeft">
      
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
            <div className="mt-8">
              <button className="bg-olive-grand text-white px-6 py-3 text-xs rounded-md flex items-center gap-2">
                <a href="#">VER RESTAURANTES Y BARES</a>
              </button>
            </div>
          </div>
        </div>

        {/* Imagen del hotel */}
        <div className="flex-1 max-w-lg mx-auto">
                        <div className="relative h-[400px] mx-auto">
                          {/* Imagen grande (fondo) */}
                          <Image
                src="../images/Paprika.jpg"
                alt="Paprika"
                width={600}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              
              
                        </div>
                      </div>
      </div>
    </section>
  );
};

export default RestBar;
