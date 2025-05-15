'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'
import useIdioma from '@/hooks/useIdioma'
import topbarData from '@/data/topbar.json'

export default function TopBar() {
  const idioma = useIdioma('topbar', { topbar: topbarData })
  const [visible, setVisible] = useState(true)

  if (!idioma || !visible) return null

  const { topbar } = idioma

  return (
    <section className="SectionDiv w-full bg-[#e7e0d5] py-1 px-4 text-sm flex items-center justify-between gap-2 relative TopBar">
        <div className='ContainerFlex p-0'>
      <div className="flex  w-full flex-wrap justify-center items-center p-2 gap-2 lg:gap-4">
        <strong className="text-[#2b6d7e] uppercase">
          {topbar.titulo}
        </strong>
        <span className="text-[11px] text-gray-800">{topbar.descripcion}</span>
        {topbar.link && (
          <Link href={topbar.link} target="_blank" rel="noopener noreferrer">
            <span className="ColorButton1 ButtonRounded py-2!">
              {topbar.botonTexto}
            </span>
          </Link>
        )}
      </div>
      <button
        onClick={() => setVisible(false)}
        className="text-[#456a6f] text-xl absolute right-2 top-[20px] -translate-y-1/2"
        aria-label="Cerrar"
      >
        <FaTimes />
      </button>
    </div>
    </section>
  )
}
