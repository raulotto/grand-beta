import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/faqs.json";

const PreguntasFrecuentes = ({ categoria }) => {
  const faqs = data.find((cat) => cat.categoria === categoria)?.preguntas || [];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b pb-3">
          <button
            className="flex justify-between w-full text-left font-semibold text-gray-800"
            onClick={() => toggle(index)}
          >
            {faq.pregunta}
            <FaChevronDown
              className={`transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-600 text-sm"
              >
                {faq.respuesta}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default PreguntasFrecuentes;
