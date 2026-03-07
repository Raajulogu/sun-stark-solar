'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const slides = [
  {
    title: "Premium Solar Energy for Your Future",
    description:
      "Transform your energy independence with cutting-edge solar solutions across South India.",
    image: "/images/home-hero.jpg",
    button1: "Get Free Consultation",
    button2: "Explore Solutions",
  },
  {
    title: "Get Government Subsidy upto ₹78,000",
    description:
      "Central Government subsidy available through national bank processing for approved DCR solar panels.",
    image: "/images/subsidy_image.png",
    button1: "Check Eligibility",
    button2: "Contact Us",
  },
  {
    title: "Solar EMI Starting ₹2170 / Month",
    description:
      "Install solar today with flexible EMI options and zero heavy upfront investment.",
    image: "/images/EMI_image.png",
    button1: "Calculate Solar Needs",
    button2: "View Services",
  },
]

export default function HeroSlider() {

  const [index, setIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)

  }, [])

  return (

    <section className="relative min-h-[650px] overflow-hidden">

      {slides.map((slide, i) => {

        const active = i === index

        return (

          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ease-out
            ${active
                ? "opacity-100 scale-100 z-20"
                : "opacity-0 scale-110 z-10"
              }`}
          >

            {/* Background */}

            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />

            {/* Content */}

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">

              <div className="max-w-2xl space-y-6">

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  {slide.title}
                </h1>

                <p className="text-lg text-muted-foreground">
                  {slide.description}
                </p>

                <div className="flex gap-4">

                  <Button asChild size="lg">

                    <Link href="/contact">
                      {slide.button1}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>

                  </Button>

                  <Button asChild variant="outline" size="lg">

                    <Link href="/services">
                      {slide.button2}
                    </Link>

                  </Button>

                </div>

              </div>

            </div>

          </div>

        )

      })}

      {/* Dots */}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">

        {slides.map((_, i) => (

          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === i ? "bg-white w-6" : "bg-white/40"
            }`}
          />

        ))}

      </div>

    </section>

  )
}