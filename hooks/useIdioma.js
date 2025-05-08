// hooks/useIdioma.js
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import seo from "@/data/seo.json"

export default function useIdioma(pageKey = "", dataSources = {}) {
  const router = useRouter()
  const [lang, setLang] = useState("es")
  const [langReady, setLangReady] = useState(false)

  useEffect(() => {
    if (!router.isReady) return
    const isEnglish = router.pathname.startsWith("/en")
    setLang(isEnglish ? "en" : "es")
    setLangReady(true)
  }, [router.isReady, router.pathname])

  if (!langReady) return null

  const result = { lang }

  // Agrega los datos multilenguaje desde cada JSON pasado
  Object.entries(dataSources).forEach(([key, dataset]) => {
    result[key] = dataset[lang] || dataset["es"] || []
  })

  result.seoData = seo[lang]?.[pageKey] || seo["es"][pageKey]

  return result
}
