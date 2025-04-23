import { useState } from "react";
import HabitacionesCard from "@/components/HabitacionesCard";
import habitaciones from "@/data/habitaciones.json";
import HeaderTrad from "@/components/HeaderTrad";
import HeroSlider from "@/components/HeroSlider";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Superior", "Suite"];

export default function HabitacionesPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("Superior");

  const habitacionesFiltradas = categoriaActiva === "Todas"
    ? habitaciones
    : habitaciones.filter((hab) => hab.categoria === categoriaActiva);

  return (
    <main className="mx-auto">
      <HeaderTrad />
      <HeroSlider page="habitaciones" />

<BookingForm />
<section className="SectionDiv">
 <div className="ContainerFlex flex-col text-center pb-0">
 <div>
                
      
                <h4 className="TitleSection">
                  Opciones de Suites
                </h4>
                </div>
<p className="w-full lg:w-[70%]">Relájese en una de nuestras 249 modernas y tecnológicas habitaciones, diseñadas para ofrecer el máximo confort y eficiencia, donde
puede solicitar servicio a la habitación las 24 horas o lavandería con solo tocar un botón. Disfrute de nuestra piscina climatizada,
relájese en el spa o mantenga su rutina de ejercicios en nuestro gimnasio completamente equipado. Organice eventos con estilo en
nuestras seis modernas salas, con impresionantes vistas y lo mejor de la gastronomía peruana.</p>
 </div>
        {/* DIV CONTENEDOR */}
        <div className="ContainerFlex flex-col pb-0">

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

