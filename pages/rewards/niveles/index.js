
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
import RewardsTable from '@/components/RewardsTable'

import rewardsNivelesData from '@/data/rewardsNiveles.json'
export default function Home() {


  const idioma = useIdioma("niveles", {
    cards: rewardsCards,
    offers: rewardsCardsOffers,
    info: rewardsCardsInfo,
    noches: rewardsCardsPuntosInfo,
    rewardsNiveles: rewardsNivelesData,
  })
  
  if (!idioma) return null
  
  const { info, cards, offers, seoData, noches, rewardsNiveles } = idioma
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
      <HeroSlider page="niveles" />

      <BookingForm />

      {/* Sección: Tarjetas de Rewards */}
      <section className=" SectionDiv pb-0">
      <GridCardsSection cards={noches} variant="clean"/>

      </section>
      <section className="SectionDiv pt-1">
        <div className="ContainerFlex flex-col">
      <RewardsTable data={rewardsNiveles} />
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
