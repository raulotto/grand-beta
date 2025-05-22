import { useState, useEffect } from "react"
import HabitacionesCard from "@/components/HabitacionesCard"
import HeaderTrad from "@/components/HeaderTrad"
import HeroSlider from "@/components/HeroSlider"
import BookingForm from "@/components/BookingForm"
import Footer from "@/components/Footer"
import { motion, AnimatePresence } from "framer-motion"
import ServiciosHotel from "@/components/ServiciosHotel"
import habitacionesCardsOffers from "@/data/habitacionesCardsOffers.json"
import GridCardsSection from "@/components/GridCardsSection"
import { TbView360Number } from "react-icons/tb"
import Link from "next/link"
import SeoHead from "@/components/SeoHead"
import useIdioma from "@/hooks/useIdioma"
import habitacionesLandingData from "@/data/habitacionesLanding.json"
import habitaciones from "@/data/habitaciones.json"
import habitacionesLandingOffers from "@/data/habitacionesLandingOffers.json";
import Image from "next/image"

export default function HabitacionesPage() {
  const idioma = useIdioma("habitaciones", {
    textos: habitacionesLandingData,
    habitaciones: habitaciones
  })

  const [categoriaActiva, setCategoriaActiva] = useState(null)

  useEffect(() => {
    if (idioma?.textos?.tabs?.length > 0) {
      setCategoriaActiva(idioma.textos.tabs[0])
    }
  }, [idioma?.textos?.tabs])

  if (!idioma || !categoriaActiva) return null

  const {
    lang,
    textos,
    seoData,
    habitaciones: habitacionesPorIdioma
  } = idioma

  const habitacionesFiltradas =
    categoriaActiva === "Todas"
      ? habitacionesPorIdioma
      : habitacionesPorIdioma.filter((hab) => hab.categoria === categoriaActiva)

  const cardsOffers = habitacionesCardsOffers[lang] || []
  const landingOffers = habitacionesLandingOffers[lang] || [];

  return (
    <>
      <SeoHead {...seoData} />
      <main className="mx-auto">
        <HeaderTrad />
        <HeroSlider page="habitaciones" />
        <BookingForm />

        <section className="SectionDiv">
          <div className="ContainerFlex flex-col text-center pb-0">
            <div>
              <h4 className="TitleSection">{textos.tituloPrincipal}</h4>
            </div>
            <p className="w-full lg:w-[70%]">{textos.parrafoPrincipal}</p>
          </div>

          <div className="ContainerFlex flex-col pb-0">
            <div className="flex gap-6 border-b border-gray-200">
              {textos.tabs.map((tab) => (
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
        <section className="SectionDiv">
<div className="ContainerFlex flex-col text-center pb-0 gap-3">
<h4 className="TitleSection">Ofertas Especiales</h4>
<h6 className="suptitle mb-2 w-[60%]">Explora nuestra selección de ofertas extraordinarias y empieza a planificar tu próxima gran escapada al Algarve.</h6>

          <GridCardsSection cards={cardsOffers} variant="overlay" />

</div>
        </section>
        <section className="SectionDiv">
          <div className="ContainerFlex flex-col">
            <h4 className="TitleSection">Lo más destacable de la habitación</h4>

        <GridCardsSection cards={landingOffers} />
        </div>
        </section>

        <section className="SectionDiv relative w-full h-[500px]">
          <div className="absolute inset-0 z-0">
            <Image
  src="/images/WG-Habitacion-Suite-2-2.jpg"
  alt="Recorrido virtual 360°"
  className="w-full h-full object-cover"
  width={800}
  height={600}
/>
          </div>
          <div className="ContainerFlex relative flex items-center justify-center h-full">
            <div className="bg-white max-w-xl w-full text-center p-8 shadow-lg rounded">
              <div className="mb-3 flex justify-center text-[3em]">
                <TbView360Number />
              </div>
              <h3 className="TitleSectionMd mb-2">{textos.recorrido360.titulo}</h3>
              <p
                className="text-sm text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: textos.recorrido360.descripcion.replace(/\n/g, "<br />")
                }}
              ></p>
              <div className="mt-5 justify-center items-center">
                <Link href="#">
                  <span className="ColorButton1 ButtonRounded inline-block">
                    {textos.recorrido360.cta}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="SectionDiv">
          <div className="ContainerFlex">
            <div className="flex flex-col md:flex-row w-full shadow-sm">
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <h4 className="TitleSectionMd mb-2">{textos.mascotas.titulo}</h4>
                <p className="text-gray-700 text-sm">{textos.mascotas.descripcion}</p>
              </div>
              <div className="w-full md:w-1/2 h-[300px]">
                <Image
  src="/images/WG-Habitacion-King-1-perro.jpg"
  alt="Mascotas"
  width={1200} // puedes ajustar según el diseño
  height={800} // puedes ajustar según el diseño
  className="w-full h-full object-cover"
/>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
