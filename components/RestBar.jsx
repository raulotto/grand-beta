import React from 'react';

const RestBar = () => {
  return (
    <section className="SectionDiv p-0">
      
      {/* Cabecera principal con imagen de fondo a pantalla completa */}
      <div
        className="ContainerFull bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://cdn2.paraty.es/wyndham-grand-cancun/images/868847eb274c834')",
          height: "40vh",
        }}
      >

        

        {/* Texto en la esquina inferior derecha */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10 text-right">
          <h2 className="text-white text-3xl md:text-5xl font-light tracking-wide backdrop-blur-sm">
            RESTAURANTES Y BARES
          </h2>
          <p className="text-sm font-light tracking-wide md:text-white bg-olive-grand px-4 py-2 mt-2 rounded-md inline-block shadow-lg">
            Wyndham Grand Costa del Sol Lima Airport
          </p>
        </div>
      </div>

      {/* Contenedor de contenido */}
      <div className="ContainerFlex">
        
        {/* Contenedor de texto */}
        <div className="flex-1 max-w-md lg:max-w-lg">
          <div> 
          <h6 className="text-xs text-gray-500 tracking-widest uppercase">SERVICIOS DE PRIMERA CLASE</h6>
            <h3 className="pb-2 font-bold text-title-section">COMER Y BEBER</h3>
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
        <div className="flex-1 max-w-lg p-6 text-black-grand">
          <img
            src="https://cdn2.paraty.es/wyndham-grand-cancun/images/868847eb274c834"
            alt="Piscina del hotel"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default RestBar;
