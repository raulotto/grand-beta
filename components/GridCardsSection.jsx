'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

export default function GridCardsSection({ cards }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024

  const Card = ({ card }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-[240px]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <h3 className="TitleSectionMd">{card.title}</h3>
        {card.description && (
          <div
            className="text-parrafos mt-2"
            dangerouslySetInnerHTML={{
              __html: card.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }}
          />
        )}
        {card.text && <p className="text-parrafos mt-2">{card.text}</p>}
        {card.buttonText && card.link && (
          <div className="mt-4">
            <Link href={card.link} className="ButtonSolid ButtonRounded">
              {card.buttonText}
            </Link>
          </div>
        )}
      </div>
    </div>
  )

  return (
      <div className="ContainerFlex flex-col w-full">
        {/* Desktop grid */}
        <div className="hidden lg:grid gap-6 w-full" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
        {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="block lg:hidden w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Card card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
  )
}
