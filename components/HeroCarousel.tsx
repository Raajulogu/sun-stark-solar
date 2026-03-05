'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CarouselSlide {
  id: number
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  backgroundImage: string
  backgroundAlt: string
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: 'Premium Solar Energy for Your Future',
    subtitle: 'Transform your energy independence with cutting-edge solar solutions across Tamil Nadu and Pondicherry.',
    buttonText: 'Get Free Consultation',
    buttonLink: '/contact',
    backgroundImage: '/images/hero-carousel-slide1.jpg',
    backgroundAlt: 'Modern Indian homes with rooftop solar panels during golden sunset'
  },
  {
    id: 2,
    title: 'Get Government Subsidy up to ₹78,000',
    subtitle: 'Install rooftop solar and receive subsidy through PM Surya Ghar Yojana. Complete support from application to installation.',
    buttonText: 'Check Eligibility',
    buttonLink: '/services#residential',
    backgroundImage: '/images/hero-carousel-slide2.jpg',
    backgroundAlt: 'Happy Indian family standing near their rooftop solar installation'
  },
  {
    id: 3,
    title: 'Solar EMI starts from just ₹2,170/month',
    subtitle: 'Go solar with zero upfront investment and flexible EMI plans.',
    buttonText: 'Get EMI Plan',
    buttonLink: '/contact',
    backgroundImage: '/images/hero-carousel-slide3.jpg',
    backgroundAlt: 'Indian family on rooftop with solar panels and city skyline'
  }
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 10000)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  const slide = slides[currentSlide]

  return (
    <section className="relative w-full h-screen md:h-[600px] overflow-hidden bg-background border-b border-border">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={slide.backgroundImage}
          alt={slide.backgroundAlt}
          fill
          className="object-cover"
          priority
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-0 w-full">
          <div className="max-w-2xl space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {slide.title}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-lg">
              {slide.subtitle}
            </p>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href={slide.buttonLink}>
                {slide.buttonText}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 sm:w-10 bg-accent'
                : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-white/70 text-xs sm:text-sm font-medium">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  )
}
