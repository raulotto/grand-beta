import React from 'react'
import Link from "next/link";
import Image from "next/image";



const Habitaciones = () => {
  return (
    <section className="SectionDiv BgImageLeft">
        
  
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
        Alojamiento de lujo en la "Ciudad de los Reyes
        </p>

        <p className="text-parrafos">
        Recarga energías entre vuelos en Wyndham Grand Costa del Sol Lima Airport y disfruta de una de nuestras 249 habitaciones de última tecnología. Con express self check-in y opciones libres de humo, cada habitación y suite está diseñada para ofrecerte el máximo confort y una estancia sin complicaciones. Gracias a la tecnología inteligente, puedes solicitar servicio de lavandería o room service 24/7 con solo tocar un botón, mientras que las ventanas insonorizadas te brindan vistas espectaculares de la capital peruana y el ambiente perfecto para un descanso reparador
        </p>
        <div className="mt-8">
      <Link className="PrimaryColor ButtonRounded" href="#">Descubre
      </Link>
  </div>
        </div>
      </div>
  
      {/* Contenido del hotel */}
      <div className="flex-1 max-w-lg mx-auto">
                <div className="relative h-[400px] mx-auto">
                  {/* Imagen grande (fondo) */}
                  <Image
        src="../images/WG-Habitacion-Suite-Presidencial-1.jpg"
        alt="Habitación"
        width={600}
        height={400}
        className="rounded-lg object-cover w-full h-full"
      />
      
      
                </div>
              </div>
    </div>
  </section>

  )
}

export default Habitaciones
