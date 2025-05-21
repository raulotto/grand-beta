
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
      <h4 className="TitleSection CenterCenter">Ahorra con nuestra tarifa para miembros

</h4>
      <p>
      Las recompensas nunca terminan para nuestros miembros: Disfruta de ahorros en miles de hoteles alrededor del mundo. Además, siempre obtendrás el precio más bajo cuando reserves directo en nuestro sitio web o nuestra app *.
      </p>
      <p>
      ¿No eres miembro de Wyndham Rewards? Inscríbete gratis durante la reserva.
      </p>
        </div>
        </section>
      {/* Sección: ¿Cómo funciona Wyndham Rewards? */}
      <section className=" SectionDiv ">
        <div className="ContainerFlex">
          <div className="w-full md:max-w-lg flex justify-center items-center">
            <h4 className="TitleBig ManropeFont ">
              ¿Cómo funciona <br /> Wyndham Rewards?
            </h4>
          </div>
          <div className="flex-1 max-w-lg">
            <div>
              <h4 className="ManropeFont mb-4">Fácil de unirse, simple de disfrutar</h4>
              <ol className="text-sm">
                <li>Regístrate gratis – Solo toma un par de clics.</li>
                <li>Reserva directo – Hospédate en cualquier hotel Costa del Sol o Wyndham.</li>
                <li>Acumula puntos – Por cada estadía calificada.</li>
                <li>Canjea recompensas – Por noches gratis, upgrades y más.</li>
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

            <h4 className="TitleBig ManropeFont">¿Por qué unirte?</h4>
          </div>
          <div className="flex-1 max-w-lg">
            <div>
            <ul className="text-sm space-y-2">
            <li className="flex items-start gap-2">
              <FaHotel className="text-xl mt-1" />
              <div>
                <strong>Mientras más te hospedas, más ganas:</strong> Acumula puntos por cada estadía calificada.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaGlobeAmericas className="text-xl mt-1" />
              <div>
                <strong>Canjea en miles de destinos:</strong> Usa tus puntos en más de 9,000 hoteles alrededor del mundo.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaTags className="text-xl mt-1" />
              <div>
                <strong>Tarifas exclusivas para socios:</strong> Ahorra automáticamente por ser miembro.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaGift className="text-xl mt-1" />
              <div>
                <strong>Noches gratis desde solo 7,500 puntos:</strong> Canjea fácilmente y sin complicaciones.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaSuitcaseRolling className="text-xl mt-1" />
              <div>
                <strong>Recompensas flexibles:</strong> Usa solo puntos, combinación de puntos y efectivo o tarjetas de regalo.
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

<h4 className="TitleSection CenterCenter">Como miembro de Wyndham Rewards usted puede elegir</h4>
<GridCardsSection cards={iconinfoWithIcons} variant="icon-title-desc" />

</div>
      </section>

      {/* Sección: Recompensas */}
      <section className="SectionDiv bg-primary-blue">
        <h3 className="TitleSectionMd text-white ManropeFont">
          No importa la razón de tu viaje, recibe Recompensas
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
      <h2 className="ManropeFont TitleSectionMd font-bold">Preguntas frecuentes sobre reservas</h2>
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
