'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

export default function GridCardsSection({ cards, variant = 'default' }) {
  const Card = ({ card }) => {
    const Wrapper = ({ children }) =>
      card.link ? (
        <Link href={card.link} className="block h-full">
          {children}
        </Link>
      ) : (
        <div>{children}</div>
      )

    return variant === 'overlay' ? (
      <Wrapper>
        <div className="relative group h-[340px] overflow-hidden shadow-md">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
            <h3 className="text-lg text-white font-semibold uppercase tracking-wider mb-3">{card.title}</h3>
            {card.buttonText && (
              <span className="ColorButton1 ButtonRounded inline-block">
                {card.buttonText}
              </span>
            )}
          </div>
        </div>
      </Wrapper>
    ) : (
      <Wrapper>
        <div className="bg-white shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
          <div className="relative w-full h-[380px]">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="TitleSectionMd">{card.title}</h3>
            {card.description && (
              <div
                className="text-parrafos mt-2"
                dangerouslySetInnerHTML={{
                  __html: card.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                }}
              />
            )}
            {card.text && <p className="text-parrafos mt-2">{card.text}</p>}
            {card.buttonText && (
              <div className="mt-4">
                <span className="ColorButton1 ButtonRounded inline-block">
                  {card.buttonText}
                </span>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    )
  }

  return (
    <div className="ContainerFlex flex-col w-full">
      {/* Desktop grid */}
      <div
        className={`hidden lg:grid gap-8 w-full`}
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        }}
      >
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
