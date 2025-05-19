'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiChevronDown, FiChevronUp, FiChevronRight  } from 'react-icons/fi'

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
          <div className="flex flex-wrap gap-4 border-b border-gray-200 mb-6">
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`pb-2 border-b-2 font-semibold text-sm transition-colors ${
                  activeIndex === index
                    ? 'border-[#0f4b4c] text-primary-oceanic'
                    : 'border-transparent text-gray-500 hover:text-black'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Active content */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2">
              <Image
                src={data[activeIndex].image}
                alt={data[activeIndex].title}
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="TitleSectionMd mb-4">{data[activeIndex].title}</h2>
              <p className="text-gray-700 mb-4">{data[activeIndex].text}</p>
              {data[activeIndex].buttonText && data[activeIndex].link && (
                <a
                  href={data[activeIndex].link}
                  className="inline-block text-primary-oceanic font-semibold hover:underline"
                >
                  {data[activeIndex].buttonText}
                </a>
              )}
            </div>
          </div>
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
                  <span className="text-lg">
  {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
</span>

                </button>
                {isOpen && (
                  <div className="pb-6 mb-4">
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
                        className="flex items-center text-primary-oceanic font-semibold hover:underline"
                      >
                        {item.buttonText} <FiChevronRight size={20} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
