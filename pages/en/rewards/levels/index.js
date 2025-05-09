
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


  const idioma = useIdioma("levels", {
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
      <section className="pt-0 SectionDiv">
  <div className="ContainerFlex flex-col">
    <div className="w-full flex justify-start items-center">
      <h4 className="TitleSection ManropeFont">Why join?</h4>
    </div>
    <div className="w-full">
      <p>
        <ol>
          <li>
            <strong>Sign in to your account</strong><br />
            Go to <a href="https://www.wyndhamrewards.com" target="_blank" rel="noopener noreferrer">wyndhamrewards.com</a> and sign in with your username and password.
          </li>
          <li>
            <strong>Search for a hotel</strong><br />
            Use the search tool to choose your destination, dates, and number of guests. You can filter results to view only points-eligible options.
          </li>
          <li>
            <strong>Select the redemption option</strong><br />
            When you choose your hotel, you’ll see different ways to use your points:
            <ul>
              <li>
                <strong>Go Free night:</strong><br />
                Redeem a full night starting from <strong>7,500 up to 30,000 points</strong> (depends on the hotel).
              </li>
              <li>
                <strong>Go Fast night:</strong><br />
                Combine <strong>fewer points + a cash payment</strong> to get a discounted rate.
              </li>
            </ul>
          </li>
          <li>
            <strong>Confirm your booking</strong><br />
            Once you choose the redemption type, follow the steps to complete the booking.<br />
            You’ll receive confirmation by email.
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
