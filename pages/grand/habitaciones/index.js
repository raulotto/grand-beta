import { useState } from "react";
import HabitacionesCard from "@/components/HabitacionesCard";
import habitaciones from "@/data/habitaciones.json";
import HeaderTrad from "@/components/HeaderTrad";
import HeroSlider from "@/components/HeroSlider";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import ServiciosHotel from "@/components/ServiciosHotel";
import habitacionesCardsOffers from "@/data/habitacionesCardsOffers.json";
import GridCardsSection from "@/components/GridCardsSection";
import { TbView360Number } from "react-icons/tb";
import Link from "next/link";

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
<ServiciosHotel />
<section className="pt-0 SectionDiv">
        <GridCardsSection cards={habitacionesCardsOffers} variant="overlay"/>
      </section>
      <section className="SectionDiv relative w-full h-[500px]">
  {/* Imagen de fondo */}
  <div className="absolute inset-0 z-0">
    <img
      src="/images/WG-Habitacion-Suite-2-2.jpg" // reemplaza con tu ruta real
      alt="Recorrido virtual 360°"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Bloque de contenido */}
  <div className="ContainerFlex relative flex items-center justify-center h-full">
    <div className="bg-white max-w-xl w-full text-center p-8 shadow-lg rounded">
      <div className="mb-3 flex justify-center text-[3em]">
      <TbView360Number />

      </div>
      <h3 className="TitleSectionMd mb-2">Recorrido virtual 360°</h3>
      <p className="text-sm text-gray-600">
        Explora cada rincón de la habitación y sumérgete en sus detalles.<br />
        Descubre la armonía de sus texturas, la cuidada distribución del espacio<br />
        y el diseño exclusivo que define cada ambiente.
      </p>
      <div className="mt-5 justify-center items-center">
      <Link
                href="#"
              >
                <span className="ColorButton1 ButtonRounded inline-block">
                  Ver Ahora
                </span>
              </Link>
      </div>
    </div>
  </div>
</section>
<section  className="SectionDiv">
        
        <div className="ContainerFlex">
          
        <div className="flex flex-col md:flex-row w-full shadow-sm">
  {/* Texto a la izquierda */}
  <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
    <h4 className="TitleSectionMd mb-2">Las mascotas son bienvenidas</h4>
    <p className="text-gray-700 text-sm">
      Aquí va una descripción o contenido. Puedes poner cualquier texto que necesites
      para destacar el mensaje principal de tu sección.
    </p>
  </div>

  {/* Imagen a la derecha */}
  <div className="w-full md:w-1/2 h-[300px]">
    <img
      src="/images/eventos-avatar-image.jpg" // reemplaza con tu ruta real
      alt="Descripción"
      className="w-full h-full object-cover"
    />
  </div>
</div>

        </div>
      </section>
      <Footer />
    </main>
  );
}

