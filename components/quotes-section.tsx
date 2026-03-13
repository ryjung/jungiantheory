"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const quotes = [
  {
    text: "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
    source: "Letters, Vol. 2",
  },
  {
    text: "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
    source: "Modern Man in Search of a Soul",
  },
  {
    text: "I am not what happened to me, I am what I choose to become.",
    source: "Attributed",
  },
  {
    text: "The privilege of a lifetime is to become who you truly are.",
    source: "Memories, Dreams, Reflections",
  },
  {
    text: "One does not become enlightened by imagining figures of light, but by making the darkness conscious.",
    source: "The Philosophical Tree",
  },
  {
    text: "Your vision will become clear only when you can look into your own heart.",
    source: "Letters, Vol. 1",
  },
]

export function QuotesSection() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextQuote = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
      setIsAnimating(false)
    }, 300)
  }, [isAnimating])

  const prevQuote = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
      setIsAnimating(false)
    }, 300)
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(nextQuote, 8000)
    return () => clearInterval(interval)
  }, [nextQuote])

  return (
    <section className="py-24 px-6 bg-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-12">Words of Wisdom</p>

        <div className="relative min-h-[200px] flex items-center justify-center">
          <div
            className={`transition-opacity duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed italic mb-6">
              "{quotes[currentQuote].text}"
            </blockquote>
            <cite className="text-muted-foreground text-sm not-italic">
              — {quotes[currentQuote].source}
            </cite>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prevQuote}
            className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return
                  setIsAnimating(true)
                  setTimeout(() => {
                    setCurrentQuote(index)
                    setIsAnimating(false)
                  }, 300)
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentQuote ? "bg-primary" : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextQuote}
            className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
