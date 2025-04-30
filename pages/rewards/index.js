import fs from "fs";
import path from "path";
import { useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

// Importación de componentes
import HeaderClassic from "@/components/HeaderClassic";
import HeroSlider from "@/components/HeroSlider";
import BookingForm from "@/components/BookingForm";
import MenuInterno from "@/components/MenuInterno";
import Intro from "@/components/Intro";
import Beneficios from "@/components/Beneficios";
import Habitaciones from "@/components/Habitaciones";
import Footer from "@/components/Footer";
import GridCardsSection from "@/components/GridCardsSection";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";


// Importación de datos
import rewardsCards from "@/data/rewardsCards.json";

// Función para obtener datos estáticos
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

  return (
    <main className="mx-auto ManropeFont">
      {/* Encabezado */}
      <HeaderClassic modoClaro />
      <BookingForm />
      <HeroSlider page="rewards" />

      {/* Sección: ¿Cómo funciona Wyndham Rewards? */}
      <section className=" SectionDiv BgImageLeft">
        <div className="ContainerFlex">
          <div className="w-full md:max-w-lg flex justify-center items-center">
            <h4 className="TitleSection ManropeFont">
              ¿Cómo funciona <br /> Wyndham Rewards?
            </h4>
          </div>
          <div className="flex-1 max-w-lg">
            <div>
              <h4 className="ManropeFont">Fácil de unirse, simple de disfrutar</h4>
              <ol>
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
        <GridCardsSection cards={rewardsCards} />
      </section>

      {/* Sección: ¿Por qué unirte? */}
      <section className="pt-0 SectionDiv BgImageLeft">
        <div className="ContainerFlex">
          <div className="w-full md:max-w-lg flex justify-center items-center">
            <h4 className="TitleSection ManropeFont">¿Por qué unirte?</h4>
          </div>
          <div className="flex-1 max-w-lg">
            <div>
              <ul>
                <li>
                  🏨 <strong>Mientras más te hospedas, más ganas:</strong> Acumula puntos por cada estadía calificada.
                </li>
                <li>
                  🌎 <strong>Canjea en miles de destinos:</strong> Usa tus puntos en más de 9,000 hoteles alrededor del mundo.
                </li>
                <li>
                  💸 <strong>Tarifas exclusivas para socios:</strong> Ahorra automáticamente por ser miembro.
                </li>
                <li>
                  🎁 <strong>Noches gratis desde solo 7,500 puntos:</strong> Canjea fácilmente y sin complicaciones.
                </li>
                <li>
                  🧳 <strong>Recompensas flexibles:</strong> Usa solo puntos, combinación de puntos y efectivo o tarjetas de regalo.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Recompensas */}
      <section className="SectionDiv bg-primary-blue">
        <h3 className="TitleSectionMd text-white ManropeFont">
          No importa la razón de tu viaje, recibe Recompensas
        </h3>
        <GridCardsSection cards={rewardsCards} />
      </section>

      {/* Sección: Beneficios y Habitaciones */}
      <section className="pt-0 SectionDiv">
        <div className="ContainerFlex flex items-stretch">
          <div className="w-full flex-col-4 gap-8 flex justify-between p-6 items-center border-1 h-[323px] bg-grey-grand">
            <div className="w-[60%]">
              Los miembros de Wyndham Rewards ahorran
              <p>
                Disfruta de ahorros en nuestra Mejor Tarifa Disponible en miles de hoteles Wyndham Rewards alrededor del mundo con la Tarifa de Recompensa.
              </p>
              <Link
                className=" "
                href="/grand/habitaciones"
                aria-label="Descubre nuestras habitaciones"
              >
                Book Now
              </Link>
            </div>
            <div>
              <Image
                src="/images/wg-lobby.jpg"
                alt="Piscina"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full flex-col-4 gap-8 flex justify-between p-6 items-center border-1 h-[323px] bg-grey-grand">
            <div className="w-[60%]">
              Los miembros de Wyndham Rewards ahorran
              <p>
                Disfruta de ahorros en nuestra Mejor Tarifa Disponible en miles de hoteles Wyndham Rewards alrededor del mundo con la Tarifa de Recompensa.
              </p>
              <Link
                className=" "
                href="/grand/habitaciones"
                aria-label="Descubre nuestras habitaciones"
              >
                Book Now
              </Link>
            </div>
            <div>
              <Image
                src="/images/wg-lobby.jpg"
                alt="Piscina"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="SectionDiv">
      <div className="ContainerFlex flex flex-col items-stretch">
      <h2 className="ManropeFont TitleSectionMd font-bold">Preguntas frecuentes sobre reservas</h2>
      <PreguntasFrecuentes categoria="general" />
      </div>
    </section>
      {/* Pie de página */}
      <Footer />

      {/* Script externo */}
      <Script
        src="https://www.thehotelsnetwork.com/js/hotel_price_widget.js?hotel_id=1599080&property_id=1026923&account_key=759990a7c11770efa4dc4e332fafe0d9"
        strategy="lazyOnload"
      />
    </main>
  );
}
