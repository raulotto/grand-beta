import BookingForm from '@/components/BookingForm';
import HeaderTrad from '@/components/HeaderTrad';
import HeroSlider from '@/components/HeroSlider';
import MatriSup from '@/components/MatriSup';
import React from 'react';
import {
  FaBed,
  FaWifi,
  FaShower,
  FaTv,
  FaRss,
  FaCogs,
  FaCoffee,
  FaUniversalAccess,
  FaUtensils,
  FaChair,
  FaBath,
  FaCouch,
  FaDoorOpen
} from 'react-icons/fa';





const MatriSupPage = () => {
  return (
    <>
    <HeaderTrad />
    <HeroSlider />

      <BookingForm />
      {/* Componente MatriSup */}
      <MatriSup />

      {/* SECTION PRINCIPAL */}
      <section className="SectionDiv">
        {/* DIV CONTENEDOR */}
        <div className="ContainerFlex flex-col">

          {/* PRIMER BLOQUE: CARACTERÍSTICAS */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Camas y ropa de cama */}
              <div className="flex items-start space-x-3">
                <FaBed className="text-3xl text-light-oceanic" />
                <div>
                  <p className="font-semibold">Capacidad máxima: 3</p>
                  <p>1 King</p>
                  <p>Se permiten cunas: 1</p>
                  <p>Cantidad máxima de cunas/camas extra permitidas: 1</p>
                  <p>Colchón con cubierta tipo almohada, y Edredón</p>
                </div>
              </div>

              {/* Características de la habitación */}
              <div className="flex items-start space-x-3">
                <FaRss className="text-3xl text-light-oceanic" />
                <div>
                  <p className="font-semibold">43m²/463ft²</p>
                  <p>Con aire acondicionado</p>
                  <p>Habitación para no fumadores</p>
                  <p>Vestidor</p>
                  <p>Ventanas del piso al techo</p>
                  <p>Tomás USB</p>
                </div>
              </div>

              {/* Baño */}
              <div className="flex items-start space-x-3">
                <FaShower className="text-3xl text-light-oceanic" />
                <div>
                  <p className="font-semibold">Baño de mármol</p>
                  <p>Bañera y ducha por separado</p>
                  <p>Inodoro</p>
                  <p>Espejo para maquillajes con iluminación</p>
                  <p>Secador de cabello</p>
                  <p>Bata</p>
                  <p>Pantuflas</p>
                </div>
              </div>

              {/* Mobiliario */}
              <div className="flex items-start space-x-3">
                <FaCogs className="text-3xl text-light-oceanic" />
                <div>
                  <p className="font-semibold">Reloj despertador</p>
                  <p>Caja de seguridad</p>
                  <p>Tomas de corriente con adaptadores de voltaje dual</p>
                  <p>Escritorio, para escribir/trabajar</p>
                  <p>Plancha y tabla de planchar</p>
                </div>
              </div>

              {/* Comidas y bebidas */}
              <div className="flex items-start space-x-3">
                <FaCoffee className="text-3xl text-light-oceanic" />
                <div>
                  <p className="font-semibold">Room service 24h</p>
                  <p>Agua embotellada de cortesía</p>
                  <p>Agua caliente al instante</p>
                  <p>Mini-bar, con cargo</p>
                </div>
              </div>

              {/* Internet y teléfonos */}
              <div className="flex items-start space-x-3">
                <FaWifi className="text-3xl text-light-oceanic" />
                <div>
                  <p className="font-semibold">Teléfonos: 3</p>
                  <p>Teléfono inalámbrico, altavoz y correo de voz</p>
                  <p>Wi-Fi gratuito</p>
                </div>
              </div>

              {/* Entretenimiento */}
              <div className="flex items-start space-x-3">
                <FaTv className="text-3xl text-light-oceanic" />
                <div>
                  <p className="font-semibold">TV Premium</p>
                  <p>Canales internacionales</p>
                  <p>CNN, ESPN, cable/satélite</p>
                  <p>Radio</p>
                </div>
              </div>

              {/* Accesibilidad */}
              <div className="flex items-start space-x-3">
                <FaUniversalAccess className="text-3xl text-light-oceanic" />
                <div>
                  <p className="font-semibold">Accesible para personas con movilidad reducida</p>
                  <p>Ducha con acceso para silla de ruedas</p>
                </div>
              </div>
            </div>
          </div>

          {/* SEGUNDO BLOQUE: THING'S YOU WILL LOVE */}
          <div className="w-full mt-30 max-w-[900px] mx-auto">
            <h4 className="TitleSection mb-8 text-center">Thing's You Will Love</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
              {/* 10 beneficios con íconos */}
              <div className="flex flex-col items-center text-black-grand">
                <FaUtensils className="text-3xl text-light-oceanic mb-3" />
                <h4 className="TitlesBenefits">Cocina equipada</h4>
                <p className="text-sm text-gray-700">Todo lo que necesitas para cocinar como en casa.</p>
              </div>
              <div className="flex flex-col items-center text-black-grand">
                <FaTv className="text-3xl text-light-oceanic mb-3" />
                <h4 className="TitlesBenefits">Microondas</h4>
                <p className="text-sm text-gray-700">Calienta o prepara snacks fácilmente.</p>
              </div>
              <div className="flex flex-col items-center text-black-grand">
                <FaCoffee className="text-3xl text-light-oceanic mb-3" />
                <h4 className="TitlesBenefits">Cafetera Espresso</h4>
                <p className="text-sm text-gray-700">Comienza tus días con tu café favorito.</p>
              </div>
              <div className="flex flex-col items-center text-black-grand">
                <FaChair className="text-3xl text-light-oceanic mb-3" />
                <h4 className="TitlesBenefits">Área de comedor</h4>
                <p className="text-sm text-gray-700">Ideal para compartir tus comidas.</p>
              </div>
              <div className="flex flex-col items-center text-black-grand">
                <FaBath className="text-3xl text-light-oceanic mb-3" />
                <h4 className="TitlesBenefits">Baño privado</h4>
                <p className="text-sm text-gray-700">Comodidad y privacidad garantizada.</p>
              </div>
              <div className="flex flex-col items-center text-black-grand">
                <FaShower className="text-3xl text-light-oceanic mb-3" />
                <h4 className="TitlesBenefits">Ducha a ras del suelo</h4>
                <p className="text-sm text-gray-700">Accesible y moderna.</p>
              </div>
              <div className="flex flex-col items-center text-black-grand">
                <FaCouch className="text-3xl text-light-oceanic mb-3" />
                <h4 className="TitlesBenefits">Sofá cama</h4>
                <p className="text-sm text-gray-700">Ideal para huéspedes adicionales.</p>
              </div>
              <div className="flex flex-col items-center text-black-grand">
                <FaTv className="text-3xl text-light-oceanic mb-3" />
                <h4 className="TitlesBenefits">Televisión HD</h4>
                <p className="text-sm text-gray-700">Disfruta tus programas favoritos.</p>
              </div>
              <div className="flex flex-col items-center text-black-grand">
                <FaWifi className="text-3xl text-light-oceanic mb-3" />
                <h4 className="TitlesBenefits">Internet rápido</h4>
                <p className="text-sm text-gray-700">Navega sin interrupciones.</p>
              </div>
              <div className="flex flex-col items-center text-black-grand">
                <FaDoorOpen className="text-3xl text-light-oceanic mb-3" />
                <h4 className="TitlesBenefits">Área al aire libre</h4>
                <p className="text-sm text-gray-700">Relájate al aire libre con privacidad.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default MatriSupPage;
