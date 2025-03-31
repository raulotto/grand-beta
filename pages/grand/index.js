import fs from "fs";
import path from "path";
import Intro from "../../components/Intro";
import RestBar from "../../components/RestBar";
import Link from "next/link";
import HeaderTrad from "@/components/HeaderTrad";
import Beneficios from "@/components/Beneficios";
import Habitaciones from "@/components/Habitaciones";
import Meeting from "@/components/Meeting";
import Ofertas from "@/components/Ofertas";
import Gallery from "@/components/Gallery";
import HeroSlider from "@/components/HeroSlider";
import BookingForm from "@/components/BookingForm";
import Parallax from "@/components/Parallax";
import Footer from "@/components/Footer";
import HotelesGrid from "@/components/HotelesGrid";
import { useState, useEffect } from "react";


export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "hotel_es.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const hotel = JSON.parse(jsonData);

  return {
    props: { hotel },
  };
}

export default function Home({ hotel }) {
  const [showForm, setShowForm] = useState(false);
  const [formIsSticky, setFormIsSticky] = useState(false); // <- nuevo estado

  // Bloquea el scroll del body al mostrar el formulario móvil
  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "auto";
  }, [showForm]);

  // Detecta el scroll para fijar el BookingForm
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.75; // 50% de la pantalla
      const offset = window.scrollY;
      setFormIsSticky(offset > triggerPoint);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <main className="mx-auto">
      <HeaderTrad onOpenForm={() => setShowForm(true)} />
      <HeroSlider />
  <BookingForm
    showForm={showForm}
    onCloseForm={() => setShowForm(false)}
    isFixed={formIsSticky}
  />


      {/* Contenido del hotel */}
      <Intro />
      <Beneficios />
      <Habitaciones />
      <Parallax />
      <RestBar />
      <Ofertas />
      <Gallery />
      {/* Nombre y descripción */}
      <Meeting />
      <HotelesGrid />
      <Footer />

      
    </main>
  );
}
