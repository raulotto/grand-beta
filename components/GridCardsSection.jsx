'use client'
import React from 'react';
import { BASE_PATH } from "@/utils/config";



import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'


export default function GridCardsSection({ cards, variant = 'default' }) {
  const isCarouselDesktop = cards.length >= 4;
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (swiperInstance && swiperInstance.params) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.params.pagination.el = paginationRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
      swiperInstance.pagination.init();
      swiperInstance.pagination.render();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance]);
  
  const Card = ({ card }) => {
    const Wrapper = ({ children }) =>
       card.link ? (
    <Link
      href={card.link}
      className="block h-full"
      target={card.target || '_self'}
      rel={card.target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {children}
    </Link>
  ) : (
    <div className="h-full">{children}</div>
  );

    if (variant === 'side-image') {
      return (
        <Wrapper>
          <div className="GridSide flex flex-col lg:flex-row-reverse bg-[#f5f5f5] border border-gray-300 shadow-sm h-full w-full">
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[200px] lg:h-full">
              {card.image && (
                <Image
                  src={`${BASE_PATH}${card.image}`}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              )}
              </div>
            </div>
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
      target={card.target || '_self'}
      rel={card.target === '_blank' ? 'noopener noreferrer' : undefined}
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

    if (variant === 'person-card') {
      return (
        <Wrapper>
          <div
            className="relative h-[500px] w-full overflow-hidden rounded-md shadow-md group"
            onClick={(e) => {
              const el = e.currentTarget;
              el.classList.toggle('show-hover');
            }}
          >
            <Image
              src={`${BASE_PATH}${card.image}`}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4 text-white z-10 transition-opacity duration-300 group-hover:opacity-0 group-[.show-hover]:opacity-0">
              <h3 className="TitleSection text-white!">{card.title}</h3>
              {card.description && (
                <p className="text-sm opacity-90 text-white!">{card.description}</p>
              )}
            </div>
            {card.hoverText && (
              <div className="absolute inset-0 bg-black/80 text-white flex flex-col justify-center items-center text-center px-5 py-6 opacity-0 group-hover:opacity-100 group-[.show-hover]:opacity-100 transition-opacity duration-500">
                <h3 className="TitleSectionMd text-white!">{card.title}</h3>
                <p className="text-sm opacity-90 text-white!">{card.hoverText}</p>
                {card.link && (
                  <Link
      href={card.link}
      target={card.target || '_self'}
      rel={card.target === '_blank' ? 'noopener noreferrer' : undefined}
                    className="mt-4 border border-white px-4 py-2 text-sm font-semibold hover:bg-white hover:text-black transition"
                  >
                    {card.buttonText || 'VIEW MORE'}
                  </Link>
                )}
              </div>
            )}
          </div>
        </Wrapper>
      );
    }

    if (variant === 'clean') {
      return (
        <Wrapper>
          <div className="GridClean bg-white overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
          {card.image && (
            <div className="relative w-full h-[220px]">
              <Image
                src={`${BASE_PATH}${card.image}`}
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
      target={card.target || '_self'}
      rel={card.target === '_blank' ? 'noopener noreferrer' : undefined}
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

    if (variant === 'overlay') {
      return (
        <Wrapper>
          <div className="GridOverlay relative group h-[340px] overflow-hidden shadow-md">
            <Image
              src={`${BASE_PATH}${card.image}`}
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
    if (variant === 'icon-title-desc') {
      return (
        <Wrapper>
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-lg h-full hover:shadow-md transition-shadow duration-300">
          {card.icon && (
  <div className="mb-4 text-[#405d65] text-5xl">
    {card.icon}
  </div>
)}


            <h3 className="text-lg font-bold text-[#333] mb-2">{card.title}</h3>
            {card.description && (
              <p className="text-sm text-gray-600">{card.description}</p>
            )}
          </div>
        </Wrapper>
      )
    }
    
    return (
      <Wrapper>
        <div className="bg-white shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
          <div className="relative w-full h-[380px]">
              {card.image && (
                <Image
                  src={`${BASE_PATH}${card.image}`}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              )}
          </div>
          <div className="p-5 flex-1 flex flex-col text-center">
            <h3 className="TitleGridCards">{card.title}</h3>
            {card.description && (
              <p
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
              className="relative pb-10"
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
              <button ref={prevRef} className="custom-prev absolute -left-14 top-1/2 -translate-y-1/2 z-10 text-[#405d65] hover:text-black">
                <FiChevronLeft size={48} />
              </button>
              <button ref={nextRef} className="custom-next absolute -right-14 top-1/2 -translate-y-1/2 z-10 text-[#405d65] hover:text-black">
                <FiChevronRight size={48} />
              </button>
            </div>
          </>
        ) : (
          <div
            className="GridArea grid gap-18 items-stretch"
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
      <div className="block lg:hidden w-full relative">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          pagination={{
            el: paginationRef.current,
            clickable: true
          }}
          onSwiper={setSwiperInstance}
        >
          {cards.map((card, index) => (
            <SwiperSlide
              key={index}
              className={["side-image", "default"].includes(variant) ? "!h-auto" : ""}
            >
              <div
                className={
                  ["side-image", "default"].includes(variant)
                    ? "h-full flex"
                    : ""
                }
              >
                <Card card={card} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flechas controladas */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-10">
          <button ref={prevRef} className="mobile-prev text-white/80 hover:text-white">
            <FiChevronLeft size={36} />
          </button>
          <button ref={nextRef} className="mobile-next text-white/80 hover:text-white">
            <FiChevronRight size={36} />
          </button>
        </div>

        {/* Dots controlados */}
        <div ref={paginationRef} className="mobile-pagination mt-4 flex justify-center gap-2" />
      </div>
    </div>
  )
}
