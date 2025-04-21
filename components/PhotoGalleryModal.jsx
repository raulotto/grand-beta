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
    <section className="SectionDiv">
      {/* Vista previa */}
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(galleryData)
          .slice(0, 2)
          .map(([section, images]) => (
            <div key={section} onClick={openModal} className="cursor-pointer">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                width={300}
                height={200}
                className="rounded aspect-[16/9] object-cover"
              />
              <p className="text-xs text-gray-600 mt-1">{images[0].alt}</p>
            </div>
          ))}
      </div>

      {/* Botón para abrir modal */}
      <div className="mt-4">
        <button
          onClick={openModal}
          className="px-4 py-2 bg-[#223e44] text-white rounded hover:bg-[#1a3236] transition"
        >
          Mostrar todas las fotos
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col overflow-y-auto">
          {/* Header navegación */}
          <div className="ContainerFlex flex-col px-6 pb-0 pt-6 flex-start">
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
                    className="rounded w-[120px] h-[80px] object-cover"
                  />
                  <p className="text-xs text-center mt-1">{section}</p>
                </div>
              ))}
            </div>

            
          </div>

          {/* Galería escalonada */}
          <div className="ContainerFlex flex-col px-6 pb-10 pt-6">
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
                              className="rounded w-full object-cover aspect-[16/9]"
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
                                    className="rounded w-full object-cover aspect-[16/9]"
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
