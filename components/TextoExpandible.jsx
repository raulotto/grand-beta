// components/TextoExpandible.jsx
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const TextoExpandible = ({ parrafos }) => {
  const [expandido, setExpandido] = useState(false);
  const ref = useRef(null);

  return (
    <div>
      <AnimatePresence initial={false}>
        <motion.div
          key="contenido"
          initial={{ height: 100 }}
          animate={{ height: expandido ? ref.current?.scrollHeight : 100 }}
          exit={{ height: 100 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="overflow-hidden relative"
        >
          <div ref={ref}>
            {parrafos.map((p, i) => (
              <p key={i} className="text-parrafos mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>
          {!expandido && (
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          )}
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => setExpandido(!expandido)}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2e737a] hover:underline transition"
      >
        {expandido ? 'MENOS INFORMACIÓN' : 'MÁS INFORMACIÓN'}
        <motion.span
          animate={{ rotate: expandido ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          <FaChevronDown />
        </motion.span>
      </button>
    </div>
  );
};

export default TextoExpandible;
