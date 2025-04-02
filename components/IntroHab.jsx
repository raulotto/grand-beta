import React from 'react'

const IntroHab = () => {
  return (
    <section className="SectionDiv"> {/* <-- aquí agregamos espacio arriba */}
      <div className="ContainerFlex">
        <div>
        <h2 className="text-4xl font-normal text-light-oceanic">
          Habitaciones y Suites
        </h2>

        <br />

        <div className="h-1 w-16 bg-[#e8ddd2] mx-auto mb-6" />

        <p className="text-base">
          Disponibles en <u>Deluxe</u>, <u>Premium Plus</u> y <u>Lujo</u>, las suites están situadas en tres zonas distintas del complejo, cada una con sus propias piscinas y terrazas.
          <br /><br />
          ¿Busca hoteles en la Costa del Sol? ¿O prefiere un alojamiento independiente en la Costa del Sol? No busque más: Wyndham Grand. Ubicadas en una ladera junto al Mediterráneo, nuestras suites ofrecen lo mejor de ambas opciones.
          <br /><br />
          Tanto si desea aislamiento y vistas panorámicas al mar, un espacio contemporáneo sólo para adultos o el ambiente relajado de un complejo familiar, Wyndham Grand cuenta con el espacio ideal para usted.
        </p>
      </div>
      </div>
    </section>
  )
}

export default IntroHab
