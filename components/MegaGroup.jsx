import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const MegaGroup = ({ id, title, titleHref, items, isOpen, onToggle }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  return (
    <div className="MegaGroup ">
      <div className="MegaGroupHeader">
        <Link href={titleHref} className="MegaGroupTitle text-white font-semibold">
          {title}
        </Link>

        {/* Ícono toggle solo visible en mobile */}
        <button
          className="block lg:hidden text-white"
          onClick={() => onToggle(id)}
          aria-label="toggle"
        >
          {isOpen ? <FaMinus /> : <FaPlus />}
        </button>
      </div>

      {/* DESKTOP: ul siempre visible sin animación */}
      <ul className="hidden lg:block mt-2 space-y-1 text-white ">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* MOBILE: ul animado con framer-motion */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden mt-2 space-y-1 text-white text-sm"
          >
            {items.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaGroup;
