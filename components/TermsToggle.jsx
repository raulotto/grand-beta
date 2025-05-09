"use client";

import { useState } from "react";
import { FaPlus, FaMinus, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useIdioma from "@/hooks/useIdioma";
import termsData from "@/data/termsData.json";

const TermsToggle = () => {
  

  const [openSection, setOpenSection] = useState(0);
  const [openItems, setOpenItems] = useState({});
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleSection = (index) => {
    setOpenSection(index);
    setOpenItems({});
    setMobileNavOpen(false);
  };

  const toggleItem = (sectionIndex, itemIndex) => {
    setOpenItems((prev) => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex] === itemIndex ? null : itemIndex,
    }));
  };
  const idioma = useIdioma("terms", { terms: termsData });
  if (!idioma) return null;
  const { terms } = idioma;
  return (
    <div className="md:flex space-y-6 md:space-y-0 md:space-x-8">
      {/* Menú lateral */}
      <div className="md:min-w-[200px] space-y-2">
        {/* Vista mobile */}
        <div className="md:hidden border-b pb-2">
          <button
            onClick={() => setMobileNavOpen((prev) => !prev)}
            className="flex justify-between w-full text-blue-800 font-bold"
          >
            {terms.secciones[openSection].titulo}
            <FaChevronDown
              className={`transition-transform duration-300 ${
                mobileNavOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {mobileNavOpen && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-2 text-sm font-semibold space-y-2"
              >
                {terms.secciones.map((sec, i) => (
                  <li key={i}>
                    <button
                      onClick={() => toggleSection(i)}
                      className={`w-full text-left ${
                        openSection === i ? "text-black" : "text-blue-800"
                      }`}
                    >
                      {sec.titulo}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Vista desktop */}
        <ul className="hidden md:block text-sm font-bold text-blue-800 space-y-3">
          {terms.secciones.map((sec, i) => (
            <li key={i}>
              <button
                className={`hover:underline ${
                  openSection === i ? "text-black" : ""
                }`}
                onClick={() => toggleSection(i)}
              >
                {sec.titulo}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Contenido de sección */}
      <div className="flex-1">
        {terms.secciones.map((sec, i) => (
          <div key={i} className={`${openSection === i ? "block" : "hidden"}`}>
            <span className="text-xl font-semibold mb-4 block">{sec.titulo}</span>
            <ul className="space-y-3">
              {sec.items.map((item, j) => (
                <li key={j} className="border-b pb-2">
                  <button
                    onClick={() => toggleItem(i, j)}
                    className="w-full flex justify-between text-left font-medium text-gray-800"
                  >
                    <span>{item.titulo}</span>
                    {openItems[i] === j ? (
                      <FaMinus className="text-gray-500" />
                    ) : (
                      <FaPlus className="text-gray-500" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {openItems[i] === j && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { height: "auto", opacity: 1 },
                          collapsed: { height: 0, opacity: 0 },
                        }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden mt-2 text-sm text-gray-700 bg-gray-50 rounded"
                      >
                        <div
                          className="p-3"
                          dangerouslySetInnerHTML={{ __html: item.respuesta }}
                        ></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsToggle;
