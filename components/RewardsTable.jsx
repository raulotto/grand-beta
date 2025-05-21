'use client'

import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'

const levelColors = {
  blue: 'bg-blue-700',
  gold: 'bg-yellow-700',
  platinum: 'bg-gray-700',
  diamond: 'bg-gray-400'
}

const levels = ['blue', 'gold', 'platinum', 'diamond']

export default function RewardsTable({ data }) {
  const [openItems, setOpenItems] = useState({})
  const [openCategories, setOpenCategories] = useState({})

  if (!data || !data.items || !data.niveles) return null

  const toggleItem = (itemKey) => {
    setOpenItems((prev) => ({ ...prev, [itemKey]: !prev[itemKey] }))
  }

  const toggleCategory = (categoryKey) => {
    setOpenCategories((prev) => ({ ...prev, [categoryKey]: !prev[categoryKey] }))
  }
const langLabels = {
  es: {
    descriptions: [
      "Al inscribirte",
      "Después 5 noches.",
      "Después 15 noches.",
      "Después 40 noches."
    ]
  },
  en: {
    descriptions: [
      "Upon enrollment",
      "After 5 nights.",
      "After 15 nights.",
      "After 40 nights."
    ]
  }
}

const currentLang = typeof window !== 'undefined' && window.location.pathname.startsWith('/en') ? 'en' : 'es'

  return (
    <div className="w-full ManropeFont">
      

      {/* DESKTOP */}
      {/* Descripciones encima de los niveles */}
<div className="hidden md:grid grid-cols-[3fr_1fr_1fr_1fr_1fr] text-center text-sm mb-1">
  <div></div>
  {langLabels[currentLang].descriptions.map((desc, i) => (
    <div key={i}>
      <div className="text-gray-600 text-[13px] leading-tight">{desc}</div>
    </div>
  ))}
</div>

{/* Encabezado con nombre de niveles */}
<div className="hidden md:grid grid-cols-[3fr_1fr_1fr_1fr_1fr] font-semibold text-center border-b border-gray-300 pb-2 mb-4 text-sm">
  <div className="text-left"><h2 className="text-xl">{data.titulo}</h2></div>
  {levels.map((lvl) => (
    <div key={lvl}>{data.niveles[lvl]}</div>
  ))}
</div>


      <div className="hidden md:block">
        {data.items.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleItem(index)}
              className="grid grid-cols-[3fr_1fr_1fr_1fr_1fr] text-left w-full py-4 hover:bg-gray-50 transition cursor-pointer"
            >
              <div className="flex items-center justify-between col-span-1 ">
              <span className="text-left font-medium text-[14px] pl-4">{item.titulo}</span>
              {item.contenido ? (
                openItems[index] ? (
                  <FaChevronUp className="ml-2 shrink-0" />
                ) : (
                  <FaChevronDown className="ml-2 shrink-0" />
                )
              ) : null}
            </div>


              {levels.map((lvl) => (
                <div key={lvl} className="flex justify-center items-center">
                  {item.niveles.includes(lvl) && (
                    <span className={`w-3 h-3 rounded-full ${levelColors[lvl]}`}></span>
                  )}
                </div>
              ))}
            </button>

            <AnimatePresence initial={false}>
              {openItems[index] && item.contenido && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden bg-gray-50"
                >
                  <div className="p-4 text-sm text-gray-700">
                    <div className='text-[14px]' dangerouslySetInnerHTML={{ __html: item.contenido }} />
                    {item.link && (
                      <a href={item.link} className="text-blue-700 underline font-semibold mt-2 block">
                        {item.textlink || 'Ver más'}
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* MOBILE */}
      <div className="md:hidden space-y-4">
        {levels.map((lvl, i) => (
          <div key={lvl} className="border border-gray-300 rounded overflow-hidden">
            <button
              onClick={() => toggleCategory(lvl)}
              className="grid grid-cols-[3fr_1fr] w-full items-center px-4 py-3 font-semibold text-left"
            >
              <div className="flex items-center gap-5">
                <span className="text-xs text-gray-600 leading-none w-[50%]">
                  {langLabels[currentLang].descriptions[i]}
                </span>
                <span className={`${levelColors[lvl]} text-white px-2 rounded text-sm font-bold`}>
                  {data.niveles[lvl]}
                </span>
              </div>

              <div className='flex justify-end'>{openCategories[lvl] ? <FaChevronUp /> : <FaChevronDown />}</div>
            </button>

            <AnimatePresence initial={false}>
              {openCategories[lvl] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {data.items
                    .filter((item) => item.niveles.includes(lvl))
                    .map((item, j) => {
                      const key = `${lvl}-${j}`
                      return (
                        <div key={key} className="border-t border-gray-200">
                          <button
                            onClick={() => toggleItem(key)}
                            className="flex justify-between w-full px-4 py-3 text-sm font-medium"
                          >
                            <span className="text-[12px] text-left mr-3">{item.titulo}</span>

                            {item.contenido ? (
                              openItems[key] ? <FaChevronUp /> : <FaChevronDown />
                            ) : null}
                          </button>

                          <AnimatePresence initial={false}>
                            {openItems[key] && item.contenido && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden bg-gray-50 text-sm px-4 pb-4"
                              >
                                <div dangerouslySetInnerHTML={{ __html: item.contenido }} />
                                {item.link && (
                                  <a href={item.link} className="text-blue-700 underline font-semibold mt-2 block">
                                    {item.textlink || 'Ver más'}
                                  </a>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
