import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import data from "@/data/spaSections.json";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SpaAcordeon = () => {
  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <section className="SectionDiv w-full">
        <div className="ContainerFlex">
    <div className="space-y-6 w-full">
      {data.map((item) => (
        <div key={item.id} className="border border-gray-200 shadow">
          <div className="flex flex-col md:flex-row cursor-pointer" onClick={() => toggle(item.id)}>
            <div className="md:w-1/2">
              <Image
                src={item.imagen}
                alt={item.titulo}
                width={800}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="md:w-1/2 bg-[#406970] text-white flex justify-between items-center px-6 py-6 text-xl font-bold">
              {item.titulo}
              <FaChevronDown
                className={`transition-transform duration-300 ${active === item.id ? "rotate-180" : ""}`}
              />
            </div>
          </div>

          <AnimatePresence>
  {active === item.id && (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 text-sm leading-relaxed text-gray-700"
    >
      <div dangerouslySetInnerHTML={{ __html: item.contenido }} />
    </motion.div>
  )}
</AnimatePresence>

        </div>
      ))}
    </div>
    </div>

    </section>
  );
};

export default SpaAcordeon;
