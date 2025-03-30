import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="SectionDiv BgImageRight" style={{ backgroundPosition: 'calc(100% + 18%) 0px' }}>
      
      <div className="ContainerFlex">
        {/* Contenedor de imágenes */}
        <div className="flex-1 max-w-lg mx-auto">
          <div className="relative h-[400px] mx-auto">
            {/* Imagen grande (fondo) */}
            <Image
              src="https://cdn2.paraty.es/wyndham-grand-cancun/images/868847eb274c834"
              alt="Piscina del hotel"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg fade-animation"
          
            />

            {/* Imagen pequeña sobrepuesta */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-1/2">
              <Image
                src="https://cdn2.paraty.es/wyndham-grand-cancun/images/309dcb0bb60a7f8"
                alt="Restaurante del hotel"
                width={200} // Ajusta según el tamaño deseado
                height={130} // Ajusta según el tamaño deseado
                className="rounded-lg shadow-lg"
             
              />
            </div>
          </div>
        </div>

        {/* Contenido del hotel */}
        <div className="flex-1 max-w-lg mx-auto">
          <div>
          <h3 className="suptitle">
        Experimenta la exclusividad dentro de la ciudad aeropuerto
      </h3>

          <h4 className="TitleSection">
            Wyndham Grand<br></br> Costa del Sol Lima City
          </h4>
            <p className="text-sm">Estancia premium y servicio de clase mundial</p>
          </div>
          <div className="flex items-center gap-2 my-4">
            <span className="text-lg font-bold text-primary-oceanic">★★★★★</span>
            <span className="text-gray-700 text-sm">4.6 | 905 Opiniones</span>
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
  );
};

export default Intro;
