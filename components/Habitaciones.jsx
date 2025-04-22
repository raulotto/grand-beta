import React from 'react'
import Link from "next/link";
import Image from "next/image";



const Habitaciones = () => {
  return (
    <section id="habitaciones" className="SectionDiv BgImageLeft">
        
  
    <div className="ContainerFlex">
      
      {/* Contenedor de imágenes */}
      <div className="flex-1 max-w-md lg:max-w-lg">
        <div> 
            <h6 className="suptitle">Conoce nuestras</h6>
            {/* Título principal */}
            <h4 className="TitleSection">
              Habitaciones
            </h4>
            <div className="divider-line"></div>
        </div>
        <div className="mx-auto">
        <p className="text-parrafos">
        Alojamiento de lujo en la "Ciudad de los Reyes. Recarga energías entre vuelos en Wyndham Grand Costa del Sol Lima Airport y disfruta de una de nuestras 249 habitaciones de última tecnología. Con express self check-in y opciones libres de humo, cada habitación y suite está diseñada para ofrecerte el máximo confort y una estancia sin complicaciones. Gracias a la tecnología inteligente, puedes solicitar servicio de lavandería o room service 24/7 con solo tocar un botón, mientras que las ventanas insonorizadas te brindan vistas espectaculares de la capital peruana y el ambiente perfecto para un descanso reparador
        </p>
        <div className="ButtonInfoStatic">
        <Link
  className="PrimaryColor ButtonRounded"
  href="/grand/habitaciones"
  aria-label="Descubre nuestras habitaciones"
>
  Descubre
</Link>

  </div>
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

  )
}

export default Habitaciones
