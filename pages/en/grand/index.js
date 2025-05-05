import fs from "fs";
import path from "path";
import { useState, useEffect } from "react";
import Script from "next/script";

import HeaderTrad from "@/components/HeaderTrad";
import HeroSlider from "@/components/HeroSlider";
import BookingForm from "@/components/BookingForm";
import MenuInterno from "@/components/MenuInterno";
import Beneficios from "@/components/Beneficios";
import Habitaciones from "@/components/Habitaciones";
import Parallax from "@/components/Parallax";
import RestBar from "@/components/RestBar";
import Gallery from "@/components/Gallery";
import Meeting from "@/components/Meeting";
import Ofertas from "@/components/Ofertas";
import HotelesGrid from "@/components/HotelesGrid";
import Footer from "@/components/Footer";
import PhotoGalleryModal from '@/components/PhotoGalleryModal';
import galleryData from '@/data/photoGallery.json';
import BeneficiosDirectos from "@/components/BeneficiosDirectos";
import Intro from "@/components/Intro";
import data from "@/data/introData.json";
import { useRouter } from "next/router";
import introMultiData from "@/data/introData.json";
import ServiciosHotel from "@/components/ServiciosHotel";


export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "hotel_es.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const hotel = JSON.parse(jsonData);

  return {
    props: { hotel },
  };
}

export default function Home({ hotel }) {
  const [embedMenu, setEmbedMenu] = useState(false);
  const router = useRouter();
  const lang = router.pathname.startsWith('/en') ? 'en' : 'es';
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.71;
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
  

  return (
    <main className="mx-auto">
      <HeaderTrad />
      <HeroSlider page="home" />
      <BookingForm embedMenu={embedMenu} />
   
      <MenuInterno
  embedMenu={false}
  className={`${embedMenu ? 'invisible absolute h-0 overflow-hidden' : 'block'}`}
/>

<Intro data={introMultiData[lang]} />
<ServiciosHotel />

      <Beneficios id="beneficios" />
      <Habitaciones />
      <BeneficiosDirectos />
      <Parallax />
      <RestBar />
      <PhotoGalleryModal galleryData={galleryData} />
      <Meeting />
      <HotelesGrid />
      <Footer />

      <Script
        src="https://www.thehotelsnetwork.com/js/hotel_price_widget.js?hotel_id=1599080&property_id=1026923&account_key=759990a7c11770efa4dc4e332fafe0d9"
        strategy="lazyOnload"
      />
    </main>
  );
}
