import React from "react";
import Image from "next/image";

const Meeting = () => {
  return (
    <section className="bg-white py-10">
      <div className="ContainerFlex">
        {/* CARD 1 */}
        <div className="w-[500px] grid bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative w-full h-80"> {/* más altura */}
            <Image
              src="https://picsum.photos/id/1015/600/400"
              alt="Paquetes"
              fill
              className="object-cover"
            />
            <h4 className="absolute inset-0 flex items-center justify-center text-white font-serif text-title-section bg-black/30">
              Paquetes
            </h4>
          </div>
          <div className="p-6 text-center text-black-grand"> {/* más padding */}
            <p className="text-parrafos text-sm mb-6">
              Nuestros <strong>exclusivos paquetes</strong> combinan descanso,
              gastronomía y servicios diseñados para una estancia sin
              preocupaciones.
            </p>
            <button className="bg-olive-grand text-white px-6 py-3 text-xs rounded-md">
              <a href="#">Ver más</a>
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="w-[500px] grid bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative w-full h-80">
            <Image
              src="https://picsum.photos/id/1025/600/400"
              alt="Meetings"
              fill
              className="object-cover"
            />
            <h4 className="absolute inset-0 flex items-center justify-center text-white font-serif text-title-section bg-black/30">
              Meetings
            </h4>
          </div>
          <div className="p-6 text-center text-black-grand">
            <p className="text-parrafos text-sm mb-6">
              Espacios ejecutivos equipados para reuniones privadas y eventos
              de clase mundial, dentro de la ciudad aeropuerto.
            </p>
            <button className="bg-olive-grand text-white px-6 py-3 text-xs rounded-md">
              <a href="#">Ver más</a>
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="w-[500px] grid bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative w-full h-80">
            <Image
              src="https://picsum.photos/id/1039/600/400"
              alt="Wellness"
              fill
              className="object-cover"
            />
            <h4 className="absolute inset-0 flex items-center justify-center text-white font-serif text-title-section bg-black/30">
              Wellness
            </h4>
          </div>
          <div className="p-6 text-center text-black-grand">
            <p className="text-parrafos text-sm mb-6">
              Déjese llevar y logre el balance perfecto entre mente, cuerpo y
              espíritu.
            </p>
            <button className="bg-olive-grand text-white px-6 py-3 text-xs rounded-md">
              <a href="#">Ver más</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meeting;
