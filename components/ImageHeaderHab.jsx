// components/ImageHeader.jsx
import Image from "next/image";

export default function ImageHeaderHab() {
  return (
    <div className="relative w-full h-[350px]">
      <Image
        src="https://cdn2.paraty.es/wyndham-grand-cancun/images/8eec88858213ca0"
        alt="Encabezado de página"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
