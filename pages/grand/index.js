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
import Script from "next/script";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "hotel_es.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const hotel = JSON.parse(jsonData);

  return {
    props: { hotel },
  };
}

export default function Home({ hotel }) {
  return (
    <main className="mx-auto">
      <HeaderTrad />
      <HeroSlider page="home" />
      <BookingForm />
      {/* Contenido del hotel */}
      <Intro />
      <Beneficios />
      <Habitaciones />
      <Parallax />
      <RestBar />
      <Gallery />
      {/* Nombre y descripción */}
      <Meeting />
      <HotelesGrid />
      <Footer />
      
      {/* Script para el widget, se carga con lazyOnload */}
      <Script
        src="https://www.thehotelsnetwork.com/js/hotel_price_widget.js?hotel_id=1599080&property_id=1026923&account_key=759990a7c11770efa4dc4e332fafe0d9"
        strategy="lazyOnload"
      />
    </main>
  );
}
