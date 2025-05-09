'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/counter.css';

export default function PhotoGalleryModal({ galleryData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = Object.values(galleryData).flat();

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(`section-${sectionId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="photogallery" className="SectionDiv BgImageRight">
      {/* Vista previa estilo Airbnb */}
      <div className="ContainerFlex relative flex flex-cols-2 gap-2 max-h-[570px] overflow-hidden">
  {/* Imagen grande a la izquierda */}
  {allImages[0] && (
    <div
      onClick={openModal}
      className="col-span-2 row-span-2 cursor-pointer"
    >
      <Image
        src={allImages[0].src}
        alt={allImages[0].alt}
        width={800}
        height={600}
        className="w-full h-full object-cover "
      />
    </div>
  )}

  {/* Cuadrícula derecha (2x2) */}
  <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-2 max-h-[620px]">
    {allImages.slice(1, 5).map((img, idx) => (
      
        <Image
        onClick={openModal}
          src={img.src}
          alt={img.alt}
          width={300}
          height={300}
          className="w-full lg:h-[300px] object-cover cursor-pointer "
        />
    ))}
  </div>

  {/* Cuadrícula derecha (2x2) */}
  <div className="md:hidden grid grid-cols-2 grid-rows-2 gap-2 max-h-[620px]">
    {allImages.slice(1, 3).map((img, idx) => (
      
        <Image
        onClick={openModal}
          src={img.src}
          alt={img.alt}
          width={300}
          height={300}
          className="w-full lg:h-[300px] object-cover "
        />
    ))}
  </div>

  {/* Botón superpuesto */}
  <button
    onClick={openModal}
    className="shadow-xs absolute bottom-5 lg:bottom-4 right-2 z-1 bg-white bg-opacity-80 text-sm text-black font-medium px-4 py-2  hover:bg-opacity-100 transition"
  >
    Mostrar todas las fotos
  </button>
</div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col overflow-y-auto">
          {/* Header navegación */}
          <div className="ContainerFlex flex-col px-6 lg:px-0 pb-0 pt-6 flex-start">
            <div className='w-full flex items-center justify-between'>
            <h2 className="text-xl font-semibold ">Recorrido fotográfico</h2>
            <button
              onClick={closeModal}
              className="text-gray-600 hover:text-black text-lg"
            >
              <FaTimes />
            </button>
            </div>
            <div className="flex w-full gap-3 overflow-x-auto pb-2 no-scrollbar">
              {Object.entries(galleryData).map(([section, images]) => (
                <div
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="cursor-pointer flex-shrink-0"
                >
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    width={120}
                    height={80}
                    className=" w-[120px] h-[80px] object-cover"
                  />
                  <p className="text-xs text-center mt-1">{section}</p>
                </div>
              ))}
            </div>

            
          </div>

          {/* Galería escalonada */}
          <div className="ContainerFlex flex-col px-6 lg:px-0 pb-10 pt-6">
            {Object.entries(galleryData).map(([section, images]) => (
              <div
                key={section}
                id={`section-${section}`}
                className="SectionAmenities mb-10 pt-6 flex flex-col lg:flex-row lg:items-start lg:gap-6"
              >
                <h3 className="text-lg font-medium mb-3 lg:mb-0 lg:w-1/4">{section}</h3>
                <div className="w-full lg:w-3/4">
                  {(() => {
                    const blocks = [];
                    let i = 0;

                    while (i < images.length) {
                      // Imagen completa
                      if (images[i]) {
                        const globalIndex = allImages.findIndex(img => img?.src === images[i].src);
                        blocks.push(
                          <div
                            key={`solo-${i}`}
                            className="break-inside-avoid mb-4 cursor-pointer"
                            onClick={() => {
                              setLightboxIndex(globalIndex);
                              setLightboxOpen(true);
                            }}
                          >
                            <Image
                              src={images[i].src}
                              alt={images[i].alt}
                              width={600}
                              height={400}
                              className=" w-full object-cover aspect-[16/9]"
                            />
                          </div>
                        );
                      }
                      i++;

                      // Par de imágenes
                      if (images[i] && images[i + 1]) {
                        blocks.push(
                          <div key={`pair-${i}`} className="columns-2 gap-4">
                            {[images[i], images[i + 1]].map((img, j) => {
                              const globalIndex = allImages.findIndex(im => im?.src === img?.src);
                              if (!img) return null;
                              return (
                                <div
                                  key={`pair-${i + j}`}
                                  className="break-inside-avoid mb-4 cursor-pointer"
                                  onClick={() => {
                                    setLightboxIndex(globalIndex);
                                    setLightboxOpen(true);
                                  }}
                                >
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={600}
                                    height={400}
                                    className=" w-full object-cover aspect-[16/9]"
                                  />
                                </div>
                              );
                            })}
                          </div>
                        );
                        i += 2;
                      }
                    }

                    return blocks;
                  })()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={allImages.map((img) => ({ src: img.src, alt: img.alt }))}
        plugins={[Counter]}
      />
    </section>
  );
}
