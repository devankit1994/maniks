'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-subtle" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Global Trade
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-blue-600">
              Excellence
            </span>
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-xl sm:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto text-balance">
            Connect with trusted logistics partners and expand your business globally with premium import-export solutions.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center`}
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-glow-blue flex items-center gap-2 group"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-card text-foreground border border-border rounded-lg font-semibold hover:bg-card/80 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
