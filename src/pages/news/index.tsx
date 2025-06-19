"use client"


import NewsSection from "./Section1"
import Hero from "./hero"



import { useState, useRef } from "react"



type NewsItem = {
  id: number
  title: string
  description: string
  image: string
  img?: string
  fullContent: string
  marketData: {
    trend: "bull" | "bear"
    percentage: number
  }
}

const Home = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  const handleNewsSelect = (newsItem: NewsItem) => {
    setSelectedNews(newsItem)

    // Scroll to hero section smoothly
    setTimeout(() => {
      heroRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 100)
  }

  const handleBackClick = () => {
    setSelectedNews(null)
  }

  return (
    <>
      <div ref={heroRef}>
        <Hero selectedNews={selectedNews} onBackClick={handleBackClick} />
      </div>
      <NewsSection onNewsSelect={handleNewsSelect} selectedNewsId={selectedNews?.id} />
    </>
  )
}

export default Home
