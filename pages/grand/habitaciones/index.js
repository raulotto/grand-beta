import { useState } from "react";
import HabitacionesCard from "@/components/HabitacionesCard";
import habitaciones from "@/data/habitaciones.json";
import HeaderTrad from "@/components/HeaderTrad";
import HeroSlider from "@/components/HeroSlider";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Todas", "Superior", "Suite"];

export default function HabitacionesPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");

  const habitacionesFiltradas = categoriaActiva === "Todas"
    ? habitaciones
    : habitaciones.filter((hab) => hab.categoria === categoriaActiva);

  return (
    <main className="mx-auto">
      <HeaderTrad />
      <HeroSlider page="habitaciones" />

<BookingForm />
<section className="SectionDiv">
        {/* DIV CONTENEDOR */}
        <div className="ContainerFlex flex-col">

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`pb-2 border-b-2 transition ${
                  categoriaActiva === tab
                    ? "border-[#3A6C74] text-[#3A6C74]"
                    : "border-transparent text-gray-500 hover:text-[#3A6C74]"
                }`}
                onClick={() => setCategoriaActiva(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards */}
          <AnimatePresence mode="wait">
  <motion.div
    key={categoriaActiva}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 flex overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth"
  >
    {habitacionesFiltradas.map((hab) => (
      <div
        key={hab.id}
        className="w-[120px] min-w-[280px] sm:w-auto sm:min-w-0 mr-4 snap-start flex-shrink-0"
      >
        <HabitacionesCard habitacion={hab} />
      </div>
    ))}
  </motion.div>
</AnimatePresence>

        </div>
      </section>
      <Footer />
    </main>
  );
}

