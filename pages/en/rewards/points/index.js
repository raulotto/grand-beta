
import { useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Importación de componentes
import HeaderClassic from "@/components/HeaderClassic";
import HeroSlider from "@/components/HeroSlider";
import BookingForm from "@/components/BookingForm";

import FooterCds from "@/components/FooterCds";
import GridCardsSection from "@/components/GridCardsSection";
import TermsToggle from "@/components/TermsToggle";

import { FaHotel, FaGlobeAmericas, FaTags, FaGift, FaSuitcaseRolling } from "react-icons/fa"

// Importación de datos
import rewardsCards from "@/data/rewardsCards.json";
import rewardsCardsOffers from "@/data/rewardsCardsOffers.json";
import rewardsCardsInfo from "@/data/rewardsCardsInfo.json";
import rewardsCardsPuntosInfo from "@/data/rewardsCardsPuntosInfo.json";
import seo from "@/data/seo.json";
import SeoHead from "@/components/SeoHead"
import useIdioma from "@/hooks/useIdioma"


export default function Home() {
  const [embedMenu, setEmbedMenu] = useState(false);



  // Efecto para manejar el scroll y mostrar/ocultar el menú
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.51;
      const margin = 20; // margen de seguridad para evitar parpadeo

      if (window.innerWidth >= 1024) {
        if (!embedMenu && scrollY > triggerPoint + margin) {
          setEmbedMenu(true);
        } else if (embedMenu && scrollY < triggerPoint - margin) {
          setEmbedMenu(false);
        }
      } else {
        setEmbedMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [embedMenu]);


  const idioma = useIdioma("points", {
    cards: rewardsCards,
    offers: rewardsCardsOffers,
    info: rewardsCardsInfo,
    noches: rewardsCardsPuntosInfo,
  })
  
  if (!idioma) return null
  
  const { info, cards, offers, seoData, noches } = idioma
  return (
    <>
    <SeoHead
    title={seoData.title}
    description={seoData.description}
    image={seoData.image}
    canonical={seoData.canonical}
    noIndex
  />
    <main className="mx-auto ManropeFont">
      {/* Encabezado */}
      <HeaderClassic modoClaro />
      <BookingForm />
      <HeroSlider page="puntos" />

      {/* Sección: Tarjetas de Rewards */}
      <section className=" SectionDiv pb-0">
      <GridCardsSection cards={noches} variant="clean"/>

      </section>

      {/* Sección: ¿Por qué unirte? */}
      <section className="pt-0 SectionDiv ">
        <div className="ContainerFlex flex-col">
        <div className="w-full flex justify-start items-center">
            <h4 className="TitleSection ManropeFont">¿Por qué unirte?</h4>
          </div>
          <div className="w-full">
            <p>
            <ol>
            <li>
              <strong>Inicia sesión en tu cuenta</strong><br />
              Accede a <a href="https://www.wyndhamrewards.com" target="_blank" rel="noopener noreferrer">wyndhamrewards.com</a> con tu usuario y contraseña.
            </li>
            <li>
              <strong>Busca un hotel</strong><br />
              Usa el buscador para elegir el destino, las fechas y el número de huéspedes. Puedes filtrar los resultados para ver solo las opciones disponibles con puntos.
            </li>
            <li>
              <strong>Selecciona la opción de canje</strong><br />
              Cuando elijas tu hotel, verás diferentes formas de usar tus puntos:
              <ul>
                <li>
                  <strong>Noche Go Free:</strong><br />
                  Canjea una noche completa desde <strong>7,500 hasta 30,000 puntos</strong> (depende del hotel).
                </li>
                <li>
                  <strong>Noche Go Fast:</strong><br />
                  Combina <strong>menos puntos + un pago en efectivo</strong> para obtener una tarifa reducida.
                </li>
              </ul>
            </li>
            <li>
              <strong>Confirma tu reserva</strong><br />
              Una vez que elijas el tipo de canje que prefieras, sigue los pasos para completar la reserva.<br />
              Recibirás la confirmación por correo electrónico.
            </li>
          </ol>

            </p>
          </div>
        </div>
      </section>

      
    <section className="SectionDiv">
      <div className="ContainerFlex flex flex-col items-stretch">
      <h2 className="ManropeFont TitleSectionMd font-bold">Preguntas frecuentes sobre reservas</h2>
    <TermsToggle />
    </div>
    </section>
      {/* Pie de página */}
      <FooterCds />

      {/* Script externo */}
      <Script
        src="https://www.thehotelsnetwork.com/js/hotel_price_widget.js?hotel_id=1599080&property_id=1026923&account_key=759990a7c11770efa4dc4e332fafe0d9"
        strategy="lazyOnload"
      />
    </main>
    </>
  );
}
