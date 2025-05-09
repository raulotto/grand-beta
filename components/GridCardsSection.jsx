'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function GridCardsSection({ cards, variant = 'default' }) {
  const isCarouselDesktop = cards.length >= 4

  const Card = ({ card }) => {
    const Wrapper = ({ children }) =>
      card.link ? (
        <Link href={card.link} className="block h-full">
          {children}
        </Link>
      ) : (
        <div className="h-full">{children}</div>
      )

    // === VARIANT: SIDE IMAGE ===
    if (variant === 'side-image') {
      return (
        <Wrapper>
          <div className="GridSide flex flex-col lg:flex-row-reverse bg-[#f5f5f5] border border-gray-300 shadow-sm h-full w-full">
            {/* Imagen */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[200px] lg:h-full">
              {card.image && (
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              )}
              </div>
            </div>

            {/* Texto */}
            <div className="flex flex-col justify-between p-6 lg:w-1/2 h-full">
              <div>
                <h3 className="text-xl font-bold text-[#333] mb-4 uppercase">{card.title}</h3>
                {card.description && (
                  <div
                    className="text-parrafos"
                    dangerouslySetInnerHTML={{
                      __html: card.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                    }}
                  />
                )}
              </div>
              {card.link && (
                <div className="mt-6">
                  <Link
                    href={card.link}
                    className="text-[#0071c2] font-semibold hover:underline"
                  >
                    {card.buttonText || 'CONOCE MÁS'}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Wrapper>
      )
    }
    // === VARIANT: SIDE IMAGE ===
    if (variant === 'clean') {
      return (
        <Wrapper>
          <div className="GridClean bg-white overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
          {card.image && (
            <div className="relative w-full h-[220px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="p-5 flex-1 flex flex-col justify-center items-center text-center">
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
            {card.link && (
                <div className="mt-6">
                  <Link
                    href={card.link}
                    className="text-[#0071c2] font-semibold hover:underline"
                  >
                    {card.buttonText || 'CONOCE MÁS'}
                  </Link>
                </div>
              )}
          </div>
        </div>
        </Wrapper>
      )
    }
    // === VARIANT: OVERLAY ===
    if (variant === 'overlay') {
      return (
        <Wrapper>
          <div className="GridOverlay relative group h-[340px] overflow-hidden shadow-md">
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
      )
    }

    // === VARIANT: DEFAULT ===
    return (
      <Wrapper>
        <div className="bg-white shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
          <div className="relative w-full h-[380px]">
              {card.image && (
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              )}
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
              <div className="ButtonGridSection mt-4">
                <span className="ColorButton1 ButtonRounded ">
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
      {/* Desktop */}
      <div className="hidden lg:block w-full relative">
        {isCarouselDesktop ? (
          <>
            <Swiper
              modules={[Navigation]}
              spaceBetween={40}
              slidesPerView={3}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              loop={false}
              className="relative"
            >
              {cards.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className={variant === 'side-image' ? '!h-auto' : ''}
                >
                  <div className={variant === 'side-image' ? 'h-full flex' : ''}>
                    <Card card={card} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div>
              <button className="custom-prev absolute -left-14 top-1/2 -translate-y-1/2 z-10 text-[#405d65] hover:text-black">
                <FiChevronLeft size={48} />
              </button>
              <button className="custom-next absolute -right-14 top-1/2 -translate-y-1/2 z-10 text-[#405d65] hover:text-black">
                <FiChevronRight size={48} />
              </button>
            </div>
          </>
        ) : (
          <div
            className="GridArea grid gap-12 items-stretch"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            }}
          >
            {cards.map((card, index) => (
  <div
    key={index}
    className={`h-full ${['side-image', 'default'].includes(variant) ? 'flex' : ''}`}
  >
    <Card card={card} />
  </div>
))}

          </div>
        )}
      </div>

      {/* Mobile */}
      <div className="block lg:hidden w-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
        >
          {cards.map((card, index) => (
            <SwiperSlide
            key={index}
            className={['side-image', 'default'].includes(variant) ? '!h-auto' : ''}
          >
            <div className={`${['side-image', 'default'].includes(variant) ? 'h-full flex' : ''}`}>
              <Card card={card} />
            </div>
          </SwiperSlide>
          
          ))}
        </Swiper>
      </div>
    </div>
  )
}
