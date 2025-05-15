import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import data from "@/data/spaSections.json";
import Image from "next/image";

const SpaAcordeon = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
<>
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full border-b border-gray-200 py-4"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h4 className="text-lg font-medium text-black-grand">{item.titulo}</h4>
              <span className="text-lg text-gray-500">
                {openIndex === index ? (
                  <FaMinus className="w-4 h-4" />
                ) : (
                  <FaPlus className="w-4 h-4" />
                )}
              </span>
            </div>

            <div
              className={`lg:flex gap-4 transition-all duration-500 ease-in-out overflow-hidden justify-center items-center ${
                openIndex === index ? "lg:max-h-[180px] mt-2" : "max-h-0"
              }`}
            >
              {item.imagen && (
                  <div className="w-full mb-4 relative aspect-[5/1]">
                    <Image
                      src={item.imagen}
                      alt={item.titulo}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                )}
              <div
                className="text-sm text-gray-600 px-1"
                dangerouslySetInnerHTML={{ __html: item.contenido }}
              />
            </div>
          </div>
        ))}
</>
  );
};

export default SpaAcordeon;
