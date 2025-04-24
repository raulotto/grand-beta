import React from "react";
import Image from "next/image";
import Link from "next/link";
import meetingData from "../data/meetingData.json";

const Meeting = () => {
  return (
    <section
      className="SectionDiv py-0 BgImageLeft"
      
    >
      <div className="ContainerFlex col-span-6 items-stretch">
        <div className="w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 pb-4 pl-4 gap-6 flex overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth">
          {meetingData.map((item, index) => (
            <div
              key={index}
              className="w-[120px] min-w-[270px] sm:w-auto sm:min-w-0 snap-start flex-shrink-0 bg-white shadow-md"
            >
              {/* Imagen horizontal en mobile, alta en desktop */}
              <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-80">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
                <h4 className="absolute inset-0 flex items-center justify-center text-white font-serif text-title-section bg-black/30">
                  {item.title}
                </h4>
              </div>

              {/* Contenido */}
              <div className="flex flex-col p-6 text-left lg:text-center text-black-grand h-[200px] justify-between">
                <p className="text-parrafos text-sm mb-0">{item.description}</p>
                <div className="ButtonInfoStatic">
                  <Link
                    className="PrimaryColor ButtonRounded"
                    href={item.link}
                    aria-label={`Ver más sobre ${item.title.toLowerCase()}`}
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Meeting;
