'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiChevronDown, FiChevronUp, FiChevronRight  } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function TabsContent({ data = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!data.length) return null

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <div className="w-full">
      {/* Desktop Tabs */}
      {!isMobile && (
        <>
          <div className="flex flex-wrap justify-between gap-4 border-b border-gray-200 mb-6">
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`pb-2 border-b-2 font-semibold uppercase cursor-pointer text-[12px] transition-colors ${
                  activeIndex === index
                    ? 'border-primary-oceanic text-primary-oceanic'
                    : 'border-transparent text-gray-400 hover:text-primary-oceanic'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Active content */}
          <AnimatePresence mode="wait">
  <motion.div
    key={activeIndex}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="flex flex-col lg:flex-row gap-10 items-center"
  >
    <div className="w-full lg:w-1/2">
  <Image
    src={data[activeIndex].image}
    alt={data[activeIndex].title}
    width={800}
    height={500}
    className="w-full h-[300px] object-cover rounded-md"
  />
</div>

    <div className="w-full lg:w-1/2">
      <h2 className="TitleSectionMd mb-4">{data[activeIndex].title}</h2>
      <p className="text-gray-700 mb-4">{data[activeIndex].text}</p>
      {data[activeIndex].buttonText && data[activeIndex].link && (
  <Link
    href={data[activeIndex].link}
    target={data[activeIndex].target || '_self'}
    rel={data[activeIndex].target === '_blank' ? 'noopener noreferrer' : undefined}
    className="inline-block text-primary-oceanic font-semibold hover:underline"
  >
    {data[activeIndex].buttonText}
  </Link>
)}

    </div>
  </motion.div>
</AnimatePresence>

        </>
      )}

      {/* Mobile Accordion */}
      {isMobile && (
        <div className="divide-y divide-gray-200">
          {data.map((item, index) => {
            const isOpen = index === activeIndex
            return (
              <div key={index}>
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left py-4 font-semibold text-[#0f4b4c] flex justify-between items-center"
                >
                  <span className='text-primary-oceanic w-[80%]'>{item.title}</span>
                  <motion.span
  className="text-lg"
  animate={{ rotate: isOpen ? 180 : 0 }}
  transition={{ duration: 0.3 }}
>
  <FiChevronDown size={20} />
</motion.span>


                </button>
                <AnimatePresence>
  {isOpen && (
    <motion.div
      key={index}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden pb-6 mb-4"
    >
      <Image
        src={item.image}
        alt={item.title}
        width={800}
        height={500}
        className="w-full h-auto object-cover rounded-md mb-4"
      />
      <p className="text-gray-700 mb-4">{item.text}</p>
      {item.buttonText && item.link && (
        <a
          href={item.link}
          target={item.target || '_self'}
          rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
          className="flex items-center text-primary-oceanic font-semibold hover:underline"
        >
          {item.buttonText} <FiChevronRight size={20} />
        </a>
      )}
    </motion.div>
  )}
</AnimatePresence>

              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
