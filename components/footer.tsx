'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <span className="text-xl font-bold text-foreground">Maniks</span>
            </div>
            <p className="text-foreground/70 text-sm mb-4">
              Global trade excellence through trusted logistics and premium customer service.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-foreground/50 hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-foreground/50 hover:text-accent transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-foreground/50 hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Process', 'Blog', 'Careers'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-foreground/70 hover:text-accent text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Import Solutions',
                'Export Solutions',
                'Logistics',
                'Customs Clearance',
                'Consulting',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-foreground/70 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <a href="mailto:info@maniks.com" className="hover:text-accent transition-colors">
                  info@maniks.com
                </a>
              </li>
              <li className="flex gap-3 text-foreground/70 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex gap-3 text-foreground/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>123 Trade Street, Global City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-foreground/70">
          <p>&copy; {currentYear} Maniks International. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
