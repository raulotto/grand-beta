
import React from 'react'
import Link from 'next/link' 
import HeaderTrad from '@/components/HeaderTrad'
import BookingForm from '@/components/BookingForm'
import HeroSliderCompact from '@/components/ImageHeaderHab'
import IntroHab from '@/components/IntroHab'
import Gallery from '@/components/Gallery'
import MatriSup from '@/components/MatriSup'
import Footer from '@/components/Footer'
import { useBooking } from "@/context/BookingContext";


const Habitaciones = () => {
  return (
    <main className="mx-auto">
      <HeaderTrad />

      <HeroSliderCompact />

        <BookingForm />
     

      <IntroHab />
      <MatriSup />
      <Gallery  />

      


      <Footer />
    </main>
  )
}

export default Habitaciones
