
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
import DobleSup from '@/components/DobleSup'



const Habitaciones = () => {
  return (
    <main className="mx-auto">
      <HeaderTrad />

      <HeroSliderCompact />

     

      <IntroHab />
      <MatriSup />
      <DobleSup />
      <Gallery />

      
      

      <Footer />
    </main>
  )
}

export default Habitaciones
