import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa";

const MegaGroup = ({ id, title, titleHref, items, isOpen, onToggle }) => {
  return (
    <div className="MegaGroup">
      <div className="MegaGroupHeader">
        {/* Título con Link siempre accesible */}
        <Link href={titleHref} className="MegaGroupTitle">
          {title}
        </Link>

        {/* Icono toggle solo visible en mobile */}
        <button
          className="MegaGroupOpen"
          onClick={() => onToggle(id)}
          aria-label="toggle"
        >
          {isOpen ? <FaMinus /> : <FaPlus />}
        </button>
      </div>

      {/* Lista: visible solo si está abierto en mobile, siempre visible en desktop */}
      <ul className={`${isOpen ? "block" : "hidden"} lg:block mt-2`}>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MegaGroup;
