import React from 'react'

const Habitaciones = () => {
  return (
    <section className="SectionDiv">
        
  
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
    <button className="bg-olive-grand text-white px-6 py-3 text-xs rounded-md flex items-center gap-2">
      <a href="#">Descubre
      </a>
    </button>
  </div>
        </div>
      </div>
  
      {/* Contenido del hotel */}
      <div className="flex-1 max-w-lg p-6 text-black-grand">
      <img
            src="https://cdn2.paraty.es/wyndham-grand-cancun/images/868847eb274c834"
            alt="Piscina del hotel"
            className="w-full h-full object-cover rounded-lg"
          />
      </div>
    </div>
  </section>

  )
}

export default Habitaciones
