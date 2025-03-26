import React, { useState } from "react";
import Image from "next/image";

const images = [
  { src: "https://picsum.photos/id/1015/500/600", width: 200, height: 300 },
  { src: "https://picsum.photos/id/1025/600/400", width: 300, height: 300 },
  { src: "https://picsum.photos/id/1035/350/500", width: 240, height: 190 },
  { src: "https://picsum.photos/id/1045/500/500", width: 240, height: 230 },
  { src: "https://picsum.photos/id/1055/600/700", width: 280, height: 400 },
  { src: "https://picsum.photos/id/1065/300/300", width: 200, height: 240 },
  { src: "https://picsum.photos/id/1075/450/350", width: 180, height: 280 },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="container mx-auto py-10">
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(img.src)}
            style={{ width: `${img.width}px`, height: `${img.height}px` }}
          >
            <Image
              src={img.src}
              alt={`Imagen ${index + 1}`}
              width={img.width}
              height={img.height}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <Image
              src={selectedImage}
              alt="Selected"
              width={1200}
              height={800}
              className="rounded-lg mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
