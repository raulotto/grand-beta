
import React from 'react'
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
import rewardsCardsIcon from "@/data/rewardsCardsIcon.json"
import seo from "@/data/seo.json";
import SeoHead from "@/components/SeoHead"
import useIdioma from "@/hooks/useIdioma"
import { LuBadgeAlert } from 'react-icons/lu';
import { FaConciergeBell } from 'react-icons/fa';
import { FaRegSmileWink } from "react-icons/fa";
import { LuCalendarPlus } from "react-icons/lu";
import { LiaHotelSolid } from "react-icons/lia";
import termsData from '@/data/termsData.json';





export default function Home() {
  const [embedMenu, setEmbedMenu] = useState(false);

  const iconMap = {
    LuBadgeAlert,
    FaConciergeBell,
    FaRegSmileWink,
    LuCalendarPlus,
    LiaHotelSolid,
    // otros que uses
  };

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


  const idioma = useIdioma("rewards", {
    cards: rewardsCards,
    offers: rewardsCardsOffers,
    info: rewardsCardsInfo,
    iconinfo: rewardsCardsIcon,
  })
  
  if (!idioma) return null
  
  const { info, iconinfo,  cards, offers, seoData } = idioma

  const iconinfoWithIcons = iconinfo.map(card => {
    const IconComponent = card.icon && iconMap[card.icon];
    const icon = IconComponent ? React.createElement(IconComponent) : null;
    return { ...card, icon };
  });
  
  
  return (
    <>
    <SeoHead
    title={seoData.title}
    description={seoData.description}
    image={seoData.image}
    canonical={seoData.canonical}
  />
    <main className="mx-auto ManropeFont">
      {/* Encabezado */}
      <HeaderClassic modoClaro />
      <HeroSlider page="rewards" />
      <BookingForm />

      <section className=" SectionDiv">
  <div className="ContainerFlex flex-col text-center gap-3">
    <h4 className="TitleSection CenterCenter">Save with our Member Rate</h4>
    <p>
      The rewards never end for our members: Enjoy savings at thousands of hotels around the world. Plus, you'll always get the lowest price when you book directly on our website or app *.
    </p>
    <p>
      Not a Wyndham Rewards member? Sign up for free during your booking.
    </p>
  </div>
</section>

{/* Section: How does Wyndham Rewards work? */}
<section className=" SectionDiv ">
  <div className="ContainerFlex">
    <div className="w-full md:max-w-lg flex justify-center items-center">
      <h4 className="TitleBig ManropeFont ">
        How does <br /> Wyndham Rewards work?
      </h4>
    </div>
    <div className="flex-1 max-w-lg">
      <div>
        <h4 className="ManropeFont mb-4">Easy to join, simple to enjoy</h4>
        <ol className="text-sm">
          <li>Sign up for free – It only takes a few clicks.</li>
          <li>Book directly – Stay at any Costa del Sol or Wyndham hotel.</li>
          <li>Earn points – For every qualified stay.</li>
          <li>Redeem rewards – For free nights, upgrades, and more.</li>
        </ol>
      </div>
    </div>
  </div>
</section>


      {/* Sección: Tarjetas de Rewards */}
      <section className="pt-0 SectionDiv">


      <GridCardsSection cards={info} variant="clean"/>

      </section>

      {/* Sección: ¿Por qué unirte? */}
      <section className="pt-0 SectionDiv ">
  <div className="ContainerFlex">
    <div className="w-full md:max-w-lg flex justify-center items-center">
      <h4 className="TitleBig ManropeFont">Why Join?</h4>
    </div>
    <div className="flex-1 max-w-lg">
      <div>
        <ul className="text-sm space-y-2">
          <li className="flex items-start gap-2">
            <FaHotel className="text-xl mt-1" />
            <div>
              <strong>The more you stay, the more you earn:</strong> Earn points for every qualified stay.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <FaGlobeAmericas className="text-xl mt-1" />
            <div>
              <strong>Redeem in thousands of destinations:</strong> Use your points at over 9,000 hotels worldwide.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <FaTags className="text-xl mt-1" />
            <div>
              <strong>Member-only rates:</strong> Save automatically just by being a member.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <FaGift className="text-xl mt-1" />
            <div>
              <strong>Free nights starting at just 7,500 points:</strong> Redeem easily and hassle-free.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <FaSuitcaseRolling className="text-xl mt-1" />
            <div>
              <strong>Flexible rewards:</strong> Use points only, a mix of points and cash, or gift cards.
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Sección: Tarjetas de Rewards */}
<section className="pt-0 SectionDiv">
<div className="ContainerFlex flex-col">

<h4 className="TitleSection CenterCenter">As a Wyndham Rewards member, you can choose</h4>
<GridCardsSection cards={iconinfoWithIcons} variant="icon-title-desc" />

</div>
      </section>

      {/* Sección: Recompensas */}
      <section className="SectionDiv bg-primary-blue">
        <h3 className="TitleSectionMd text-white ManropeFont">
          No matter the reason for your trip, get rewarded
        </h3>
        <GridCardsSection cards={cards} />
      </section>

      {/* Sección: Beneficios y Habitaciones */}
      <section className="pt-0 SectionDiv">
        <div className="ContainerFlex flex items-stretch">
        <GridCardsSection cards={offers}  variant="side-image"/>
        </div>
      </section>
      
      <section id="faqs" className="SectionDiv">
      <div className="FaqsSec ContainerFlex flex-col p-0">
<h2 className="ManropeFont TitleSectionMd font-bold">Frequently Asked Questions about Reservations</h2>
    <TermsToggle data={termsData} />

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
