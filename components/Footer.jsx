import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#40666a] SectionDiv">
        <div className="ContainerFlex flex-col">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 w-full
">
        {/* Logo */}
        <div className="flex flex-col items-start gap-4">
          
          <Image
                      src="/images/new-grand-costa-aeropuerto-logo-blanco.svg"
                      alt="Restaurante del hotel"
                      width={200}
                      height={130}
                    />
        </div>

        {/* Navegación principal */}
        <div className="flex flex-col gap-2">
          <Link href="#">Inicio</Link>
          <Link href="#">Hotel</Link>
          <Link href="#">Servicios</Link>
          <Link href="#">Restaurantes y bares</Link>
          <Link href="#">Wellness</Link>
          <Link href="#">Eventos y grupos</Link>
        </div>

        {/* Atención al cliente */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Atención al cliente</span>
          <Link href="#">Preguntas frecuentes</Link>
          <Link href="#">Facturación electrónica</Link>
          <Link href="#">Modificar reserva</Link>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col gap-2">
          <span className="uppercase tracking-widest text-sm mb-1">Redes Sociales</span>
          <div className="flex gap-4 text-lg">
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaYoutube /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
            <Link href="#"><FaTiktok /></Link>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-white/30 mx-auto max-w-7xl" />

      {/* Textos inferiores */}
      <div className="text-center text-xs text-white/80 py-6 px-4 space-y-2">
        <div className="space-x-2">
          <Link href="#">Términos y condiciones</Link>|
          <Link href="#">Política web de privacidad</Link>|
          <Link href="#">Política de uso de datos personales</Link>|
          <Link href="#">Política de uso aceptable</Link>|
          <Link href="#">Dog Friendly</Link>
        </div>
        <p className="text-white mt-10">Wyndham Grand New Lima Airport © Copyright 2025</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
