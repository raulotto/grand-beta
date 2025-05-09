import React from "react";
import Image from "next/image";
import Link from "next/link";
import GridCardsSection from '@/components/GridCardsSection'
import promosHomeCards from '@/data/promosHomeCards.json'

const Meeting = () => {
  return (
    <section id="promo" className="SectionDiv BgImageRight">
          <GridCardsSection cards={promosHomeCards} />
    
    
          </section>
  );
};

export default Meeting;
