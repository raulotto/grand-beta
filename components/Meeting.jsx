import React from "react";
import Image from "next/image";
import Link from "next/link";
import GridCardsSection from '@/components/GridCardsSection';
import promosHomeCards from '@/data/promosHomeCards.json';
import { useRouter } from 'next/router';

const Meeting = () => {
  const { asPath } = useRouter();
  const lang = asPath.startsWith('/en') ? 'en' : 'es';

  return (
    <section id="promo" className="SectionDiv BgImageRight">
      <GridCardsSection cards={promosHomeCards[lang]} />
    </section>
  );
};

export default Meeting;
