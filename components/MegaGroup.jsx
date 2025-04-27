import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const MegaGroup = ({ id, title, titleHref, items = [], subgroups = [], isOpen, onToggle }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [openSubgroup, setOpenSubgroup] = useState(null);

  const toggleSubgroup = (index) => {
    setOpenSubgroup((prev) => (prev === index ? null : index));
  };

  return (
    <div className="MegaGroup">
      {/* Título principal siempre visible */}
      <div className="MegaGroupHeader flex justify-between items-center">
        <Link href={titleHref} className="MegaGroupTitle text-white font-semibold uppercase">
          {title}
        </Link>

        {isMobile && (
          <button
            onClick={() => onToggle(id)}
            className="text-white ml-2 transition-transform duration-300"
            aria-label="toggle"
          >
            <FaChevronDown className={`${isOpen ? "transform rotate-180" : ""}`} />
          </button>
        )}
      </div>

      {/* Mostrar contenido solo en mobile */}
      <AnimatePresence initial={false}>
        {isMobile && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-2 space-y-2 text-white text-sm"
          >
            {subgroups.length > 0 ? (
              subgroups.map((subgroup, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center w-full">
                    <Link
                      href={subgroup.href || "#"}
                      className="font-semibold w-full text-left"
                      onClick={(e) => e.stopPropagation()} // no cerrar si clickean el link
                    >
                      {subgroup.title}
                    </Link>

                    <button
                      onClick={() => toggleSubgroup(idx)}
                      className="text-white ml-2 transition-transform duration-300"
                      aria-label="toggle-subgroup"
                    >
                      <FaChevronDown className={`${openSubgroup === idx ? "transform rotate-180" : ""}`} />
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {openSubgroup === idx && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 mt-1 space-y-1"
                      >
                        {subgroup.items.map((item, i) => (
                          <li key={i}>
                            <Link href={item.href}>{item.label}</Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <ul className="pl-4 space-y-1">
                {items.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaGroup;
