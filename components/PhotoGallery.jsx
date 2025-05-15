'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/counter.css';

export default function PhotoGalleryModal({ galleryData }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = Object.values(galleryData).flat();

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const openLightboxAtIndex = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <section className="SectionDiv BgImageRight p-0">
      {/* Vista previa estilo Airbnb */}
      <div className=" relative flex max-h-[570px] overflow-hidden">
        {/* Imagen grande a la izquierda */}
        {allImages[0] && (
          <div
            onClick={() => openLightboxAtIndex(0)}
            className="col-span-2 row-span-2 cursor-pointer"
          >
            <Image
              src={allImages[0].src}
              alt={allImages[0].alt || 'Imagen'}
              width={800}
              height={600}
              className="w-full h-full object-cover object-center"
              priority={true}
            />
          </div>
        )}

        {/* Cuadrícula derecha en desktop */}
        <div className="hidden md:grid grid-cols-2 grid-rows-2  max-h-[620px] ">
          {allImages.slice(1, 5).map((img, idx) => (
            <div key={idx} onClick={() => openLightboxAtIndex(idx + 1)} className="cursor-pointer ">
              <Image
                src={img.src}
                alt={img.alt || 'Imagen'}
                width={300}
                height={300}
                className="w-full h-[300px] object-cover object-center hover:bg-red-500"
              />
            </div>
          ))}
        </div>

        {/* Cuadrícula derecha en mobile */}
        <div className="md:hidden grid grid-cols-2 grid-rows-2  max-h-[620px] ">
          {allImages.slice(1, 3).map((img, idx) => (
            <div key={idx} onClick={() => openLightboxAtIndex(idx + 1)} className="cursor-pointer">
              <Image
                src={img.src}
                alt={img.alt || 'Imagen'}
                width={300}
                height={300}
                className="w-full h-[300px] object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => {
          setLightboxOpen(false);
          document.body.style.overflow = 'auto';
        }}
        index={lightboxIndex}
        slides={allImages.map((img) => ({ src: img.src, alt: img.alt || 'Imagen' }))}
        plugins={[Counter]}
      />
    </section>
  );
}
