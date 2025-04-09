import { useState } from "react";
import HabitacionesCard from "@/components/HabitacionesCard";
import habitaciones from "@/data/habitaciones.json";
import HeaderTrad from "@/components/HeaderTrad";
import HeroSlider from "@/components/HeroSlider";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const tabs = ["Superior", "Suite"];

export default function HabitacionesPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("Superior");

  const habitacionesFiltradas = habitaciones.filter(
    (hab) => hab.categoria === categoriaActiva
  );

  return (
    <main className="mx-auto">
      <HeaderTrad />
    <HeroSlider />

      <BookingForm /> 
      <section className="SectionDiv pt-5">
      <div className="ContainerFlex flex flex-col items-start">
      <h1 className="text-2xl font-semibold mb-6">Habitaciones</h1>

      {/* Tabs */}
      <div className="flex gap-6 mb-8 border-b border-gray-200">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {habitacionesFiltradas.map((hab) => (
          <HabitacionesCard key={hab.id} habitacion={hab} />
        ))}
      </div>
      </div>
      </section>
      <Footer />
    </main>
  );
}
