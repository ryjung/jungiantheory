"use client"

import { useState, useEffect } from "react"

export function HeroSection() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-serif text-xl tracking-wide text-primary">C.G. Jung</span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#theories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Theories
            </a>
            <a href="#archetypes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Archetypes
            </a>
            <a href="#works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Works
            </a>
            <a href="#legacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Legacy
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6">Swiss Psychiatrist & Psychoanalyst</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 text-balance">
            Carl Gustav
            <br />
            <span className="text-primary">Jung</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Founder of analytical psychology. Explorer of the collective unconscious. 
            Pioneer in understanding the depths of the human psyche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#theories"
              className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              Explore Theories
            </a>
            <a
              href="#biography"
              className="px-8 py-3 border border-border text-foreground font-medium rounded-sm hover:bg-secondary transition-colors"
            >
              Biography
            </a>
          </div>
        </div>
      </div>

      {/* Dates */}
      <div className="px-6 pb-12">
        <div className="max-w-7xl mx-auto flex justify-between items-end">
          <div className="text-sm text-muted-foreground">
            <span className="block text-xs tracking-wider uppercase mb-1">Born</span>
            1875, Kesswil, Switzerland
          </div>
          <div className="text-sm text-muted-foreground text-right">
            <span className="block text-xs tracking-wider uppercase mb-1">Died</span>
            1961, Küsnacht, Switzerland
          </div>
        </div>
      </div>
    </header>
  )
}
