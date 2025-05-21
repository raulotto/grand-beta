'use client'
import React from 'react'
import { useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Importación de componentes



// Importación de datos




import RewardsTable from '@/components/RewardsTable'
import useIdioma from '@/hooks/useIdioma'
import rewardsNivelesData from '@/data/rewardsNiveles.json'


export default function Home() {
  const idioma = useIdioma("test", {
    rewardsNiveles: rewardsNivelesData
  })

  if (!idioma) return null

  const { rewardsNiveles } = idioma


  
  return (
    <>
    nada
    <section className="py-12">
        <RewardsTable data={rewardsNiveles} />
      </section>
    </>
  );
}
