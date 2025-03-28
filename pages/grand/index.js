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
import { useState } from "react";

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

  return (
    <main className="mx-auto">
      {/* Header con botón Reservar */}
      <HeaderTrad onOpenForm={() => setShowForm(true)} />

      {/* Slider principal */}
      <HeroSlider />

      {/* Formulario de reservas flotante */}
      <BookingForm showForm={showForm} onCloseForm={() => setShowForm(false)} />

      {/* Contenido del hotel */}
      <Intro />
      <Beneficios />
      <Habitaciones />
      <RestBar />
      <Ofertas />
      <Gallery />

      {/* Nombre y descripción */}
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold">{hotel.name}</h1>
        <p className="text-gray-700">{hotel.description}</p>
      </header>

      {/* Versión en inglés */}
      <div className="text-center my-4">
        <Link href="/en/hotel-wyndham-grand-costa-del-sol-lima-airport">
          🇬🇧 English Version.
        </Link>
      </div>
    </main>
  );
}
