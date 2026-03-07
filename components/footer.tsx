import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-foreground">SunStark Solar</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Premium solar energy solutions for a sustainable future.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              We proudly serve customers across Tamil Nadu and Pondicherry.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-foreground text-sm sm:text-base">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link href="/services#residential" className="hover:text-accent transition-colors">
                  Residential
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="hover:text-accent transition-colors">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="/services#industrial" className="hover:text-accent transition-colors">
                  Industrial
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="hover:text-accent transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-foreground text-sm sm:text-base">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:text-accent transition-colors">
                  Our Works
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-accent transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-foreground text-sm sm:text-base">Get in Touch</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="h-4 sm:h-5 w-4 sm:w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919360260195" className="text-muted-foreground hover:text-accent transition-colors">
                    +91 9360260195
                  </a>
                  <a href="tel:+919600642600" className="text-muted-foreground hover:text-accent transition-colors">
                    +91 9600642600
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:sunstarksolarstark@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                  sunstarksolarstark@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  Plot 5 & 6, Muthamizh Nagar<br />
                  Vanur, Pattanur<br />
                  Pondicherry, Tamil Nadu – 605111
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 border-t border-border/40 pt-6">
          <p className="text-xs sm:text-sm text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            Disclaimer: Installation and billing for consumers are managed directly by our company.
            We procure products and services from authorized distributors to ensure quality and reliability.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 SunStark Solar. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <div>GSTIN: 33DBGPN9561R1ZR</div>
              <div>PAN: DBGPN9561R</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
