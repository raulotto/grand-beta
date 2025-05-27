'use client'
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function ContadorEventos() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Se activa cuando el 20% del elemento esté en pantalla
  })

  return (
    <section className="SectionDiv">
      <div className="ContainerFlex p-0 flex-col text-center" ref={ref}>
        <h2 className="TitleSectionMd">Espacios para eventos</h2>
        <p className="text-parrafos">
          Celebra tu evento en nuestros salones para eventos en Cusco diseñados para adaptarse a lo que tú necesitas.
          Sin importar el tamaño o tipo del evento, contamos con los espacios idóneos. Desde un salón impresionante
          hasta una pequeña sala para juntas, nos complace poder configurar cada espacio según tus necesidades.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full text-center">
          <div>
            <h3 className=" font-bold  PrataFont">
              {inView && <CountUp end={300} duration={2} />}m²
            </h3>
            <p className="text-sm mt-1">Espacio total para eventos</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-support-ash PrataFont">
              {inView && <CountUp end={250} duration={2} />}m²
            </h3>
            <p className="text-sm mt-1">Área de la sala más amplia</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-support-ash PrataFont">
              {inView && <CountUp end={200} duration={2} />}
            </h3>
            <p className="text-sm mt-1">Salas de eventos</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-support-ash PrataFont">
              {inView && <CountUp end={150} duration={2} />}
            </h3>
            <p className="text-sm mt-1">ambientes en simultáneo</p>
          </div>
        </div>
      </div>
    </section>
  )
}
