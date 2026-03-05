'use client'

import React, { useRef } from "react"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Zap, Shield, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import getYearsOfEXP from '@/hooks/getYearsOfEXP'
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"

// Trust Indicators Component with Dynamic Years
function TrustIndicators() {
  const { yearsOfExcellence } = getYearsOfEXP()

  return (
    <div className="pt-8 sm:pt-12 grid grid-cols-3 gap-4 sm:gap-6 border-t border-border/30">
      <div className="flex flex-col gap-1">
        <div className="text-2xl sm:text-3xl font-bold text-accent">600+</div>
        <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-2xl sm:text-3xl font-bold text-accent">{yearsOfExcellence}+</div>
        <div className="text-xs sm:text-sm text-muted-foreground">Years of Excellence</div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-2xl sm:text-3xl font-bold text-accent">99%</div>
        <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
      </div>
    </div>
  )
}

// Icon components
function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
  )
}

function Building(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="2" width="14" height="20" rx="2" ry="2" /><path d="M7 6h.01M7 10h.01M7 14h.01M7 18h.01M17 6h2v8h-2z" /></svg>
  )
}

function Factory(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M2 8h20v3H2z" /><path d="M6 2v4" /><path d="M12 2v4" /><path d="M18 2v4" /></svg>
  )
}

function Wrench(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.4 14.4L9.6 9.6" /><path d="M18.9 4.9a2.1 2.1 0 0 1 2.9 3l-.6.6a2.1 2.1 0 0 1-3-3l.7-.6z" /><path d="M5 20H3v-2a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2h-2v-2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2z" /></svg>
  )
}

export default function HomePage() {
  const autoplay = Autoplay({
    delay: 2000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  })

  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [autoplay]
  )

  const slides = [
    {
      title: "Premium Solar Energy for Your Future",
      description:
        "Transform your energy independence with cutting-edge solar solutions. From residential homes to industrial facilities, we deliver sustainable power across South India.",
      image: "/images/home-hero.jpg",
      button1: "Get Free Consultation",
      button2: "Explore Solutions",
    },

    {
      title: "Get Government Subsidy upto ₹78,000",
      description:
        "Install on-grid solar systems and receive Tamil Nadu government subsidies. SunStark helps you handle the entire subsidy process from application to approval.",
      image: "/images/home-hero.jpg",
      button1: "Check Eligibility",
      button2: "Contact Us",
    },

    {
      title: "Go Solar with EMI Starting ₹2170 / Month",
      description:
        "Switch to solar today with easy EMI options and zero upfront burden. Affordable solar power for every home and business.",
      image: "/images/home-hero.jpg",
      button1: "Calculate Solar Needs",
      button2: "View Services",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section with Image */}
        <section className="relative transition-opacity duration-700 ease-in-out border-b border-border bg-background overflow-hidden">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="relative flex-[0_0_100%] min-h-[600px]"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
                    <div className="space-y-8 sm:space-y-12 max-w-2xl">
                      <div className="space-y-4 sm:space-y-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                          {slide.title}
                        </h1>

                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                          {slide.description}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <Button
                          asChild
                          size="lg"
                          className="w-full sm:w-auto gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
                        >
                          <Link href="/contact">
                            {slide.button1}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>

                        <Button
                          asChild
                          variant="outline"
                          size="lg"
                          className="w-full sm:w-auto"
                        >
                          <Link href="/services">{slide.button2}</Link>
                        </Button>
                      </div>

                      {index === 0 && <TrustIndicators />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className="h-2 w-2 rounded-full bg-white/50"
              />
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="border-b border-border bg-secondary/30 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 sm:space-y-16">
              <div className="space-y-3 sm:space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Featured Projects</h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
                  Transforming properties across South India with sustainable solar solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { title: 'Residential Installation', desc: 'Transform your home with 10kW solar system', location: 'Pondicherry', capacity: '10 kW', image: '/images/home-modern.jpg' },
                  { title: 'Commercial Complex', desc: 'Large-scale commercial solar deployment', location: 'Tamil Nadu', capacity: '50 kW', image: '/images/office-commercial.jpg' },
                  { title: 'Industrial Rooftop', desc: 'Industrial facility with advanced monitoring', location: 'Vanur', capacity: '100 kW', image: '/images/factory-industrial.jpg' }
                ].map((project, i) => (
                  <Link key={i} href="/works" className="group overflow-hidden rounded-lg border border-border bg-background hover:border-accent transition-all hover:shadow-md">
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.desc}
                        </p>
                      </div>
                      <div className="flex justify-between items-center text-xs sm:text-sm border-t border-border pt-4">
                        <span className="text-muted-foreground">
                          {project.location}
                        </span>
                        <span className="text-accent font-semibold">
                          {project.capacity}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center pt-4 sm:pt-8">
                <Button asChild variant="outline">
                  <Link href="/works">View All Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="border-b border-border bg-background py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 sm:space-y-16">
              <div className="space-y-3 sm:space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Our Services</h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
                  Comprehensive solar solutions tailored to your needs
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                {[
                  { icon: HomeIcon, title: 'Residential Solar', desc: 'Custom solar systems designed for homes with energy savings up to 80%. Perfect for family homes and small properties.', image: '/images/consultation-meeting.jpg' },
                  { icon: Building, title: 'Commercial Solar', desc: 'Enterprise-scale solar solutions for offices and retail spaces. Reduce operational costs significantly.', image: '/images/office-commercial.jpg' },
                  { icon: Factory, title: 'Industrial Solar', desc: 'Heavy-duty industrial installations for manufacturing facilities. Maximize efficiency and sustainability.', image: '/images/factory-industrial.jpg' },
                  { icon: Wrench, title: 'Maintenance & Support', desc: 'Professional system maintenance and 24/7 customer support. Keep your system running optimally.', image: '/images/commissioning-phase.jpg' },
                ].map((service, i) => {
                  const Icon = service.icon
                  return (
                    <div key={i} className="overflow-hidden rounded-lg border border-border bg-background hover:border-accent transition-all hover:shadow-md group">
                      <div className="aspect-video relative overflow-hidden bg-muted">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex gap-4 sm:gap-6 p-6 sm:p-8">
                        <div className="flex h-14 sm:h-16 w-14 sm:w-16 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/15 transition-colors flex-shrink-0">
                          <Icon className="h-7 sm:h-8 w-7 sm:w-8 text-accent" />
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground">{service.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex justify-center pt-4 sm:pt-8">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/services">Explore All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose SunStark */}
        <section className="border-b border-border bg-secondary/30 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 sm:space-y-16">
              <div className="space-y-3 sm:space-y-4 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Why Choose SunStark Solar</h2>
                <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground">
                  Partner with industry leaders in renewable energy and sustainable growth
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                {[
                  { icon: Shield, title: 'Expert Installation', desc: 'Professional certified technicians with 10+ years of industry experience and 500+ successful projects' },
                  { icon: TrendingUp, title: 'Maximum Savings', desc: 'Reduce your energy bills by up to 80% with our optimized system designs' },
                  { icon: Zap, title: 'Premium Quality', desc: 'International solar panels and equipment from trusted global manufacturers' },
                  { icon: Users, title: 'Always Available', desc: '24/7 customer support and comprehensive monitoring via mobile app' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="space-y-4 sm:space-y-6">
                      <div className="flex h-14 sm:h-16 w-14 sm:w-16 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-7 sm:h-8 w-7 sm:w-8 text-accent" />
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Government Subsidy Section */}
        <section className="border-b border-border bg-secondary/30 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 sm:space-y-16">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Government Solar Subsidies</h2>
                <p className="max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Make solar energy more affordable with government subsidies. In Tamil Nadu and Pondicherry, on-grid residential solar systems up to 3kW can qualify for subsidy coverage up to 40% of installation costs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
                {[
                  {
                    title: 'Subsidy Eligibility',
                    items: [
                      'Residential properties in Tamil Nadu & Pondicherry',
                      'On-grid rooftop solar systems up to 3kW',
                      'Potential subsidy coverage: up to 40%',
                      'Professional installation by approved vendors'
                    ]
                  },
                  {
                    title: 'Our Support',
                    items: [
                      'Eligibility assessment and consultation',
                      'Complete documentation assistance',
                      'Site survey and feasibility studies',
                      'Professional installation & post-support'
                    ]
                  }
                ].map((section, i) => (
                  <div key={i} className="rounded-lg border border-accent/20 bg-accent/5 p-8 space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Button asChild size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/services#residential">
                    Learn More About Subsidies <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-b border-border bg-background py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-accent/15 bg-gradient-to-r from-accent/5 via-accent/2 to-background p-8 sm:p-12 lg:p-16 text-center space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                  Ready to Transform Your Energy?
                </h2>
                <p className="mx-auto max-w-3xl text-sm sm:text-base text-muted-foreground">
                  Get a free consultation with our solar experts and discover your potential energy savings, installation timeline, and ROI.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                  <Link href="/process">Learn Our Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
