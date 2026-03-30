"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Globe, Package, Plane, Ship } from "lucide-react";

function HeroGraphic({ isLoaded }: { isLoaded: boolean }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 1200ms ease" }}
    >
      {/* Centerpiece */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[640px] sm:h-[640px]">
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/25 via-blue-400/10 to-blue-600/20 blur-3xl" />

        {/* Orbit rings */}
        <div className="absolute inset-10 rounded-full border border-white/10" />
        <div className="absolute inset-20 rounded-full border border-white/10" />
        <div className="absolute inset-32 rounded-full border border-white/10" />

        {/* Wireframe globe */}
        <svg
          className="absolute inset-[72px] text-white/10"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* latitude */}
          <ellipse
            cx="50"
            cy="50"
            rx="46"
            ry="30"
            stroke="currentColor"
            strokeWidth="1"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="46"
            ry="16"
            stroke="currentColor"
            strokeWidth="1"
          />
          {/* longitude */}
          <ellipse
            cx="50"
            cy="50"
            rx="18"
            ry="46"
            stroke="currentColor"
            strokeWidth="1"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="30"
            ry="46"
            stroke="currentColor"
            strokeWidth="1"
          />

          {/* connection arcs */}
          <path
            d="M18 56 C 30 30, 56 26, 82 38"
            stroke="rgba(59, 130, 246, 0.35)"
            strokeWidth="1.4"
          />
          <path
            d="M22 40 C 36 68, 62 72, 86 58"
            stroke="rgba(34, 211, 238, 0.25)"
            strokeWidth="1.2"
          />
          <path
            d="M28 70 C 42 58, 56 48, 76 28"
            stroke="rgba(99, 102, 241, 0.22)"
            strokeWidth="1.2"
          />
        </svg>

        {/* Slowly rotating accent ring */}
        <div className="absolute inset-6 rounded-full border border-accent/25 blur-[0.5px] animate-[spin_60s_linear_infinite]" />
      </div>
    </div>
  );
}

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background image (subtle) */}
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-15 scale-105"
        />

        {/* Soft overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-dark opacity-90" />

        <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-subtle" />

        {/* Decorative graphic */}
        <HeroGraphic isLoaded={isLoaded} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl sm:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto text-balance">
            Connect with trusted logistics partners and expand your business
            globally with premium import-export solutions.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center`}
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <a
            href="/contact"
            className="px-8 py-4 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-glow-blue flex items-center gap-2 group"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/about"
            className="px-8 py-4 bg-card text-foreground border border-border rounded-lg font-semibold hover:bg-card/80 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
