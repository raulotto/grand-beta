
import React from 'react'
import Link from 'next/link' 
import HeaderTrad from '@/components/HeaderTrad'
import BookingForm from '@/components/BookingForm'
import HeroSliderCompact from '@/components/ImageHeaderHab'
import IntroHab from '@/components/IntroHab'
import Gallery from '@/components/Gallery'
import MatriSup from '@/components/MatriSup'
import Footer from '@/components/Footer'

const Habitaciones = () => {
  return (
    <main className="mx-auto">
      {/* Título y descripción del hotel */}
      <HeaderTrad />

      {/* Componentes de la página */}
      <HeroSliderCompact />

      <div className="relative z-10 -mt-[60px] w-full max-w-6xl mx-auto px-4">
        <BookingForm />
      </div>

      <IntroHab />
      <MatriSup />
      <Gallery  />

      


      <Footer />
    </main>
  )
}

export default Habitaciones
