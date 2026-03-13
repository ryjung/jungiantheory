"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface TheoryCardProps {
  title: string
  subtitle: string
  description: string
  details: string[]
  index: number
}

export function TheoryCard({ title, subtitle, description, details, index }: TheoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border-t border-border">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left hover:bg-secondary/30 transition-colors px-2 -mx-2"
      >
        <div className="flex items-start gap-6">
          <span className="font-serif text-4xl md:text-5xl text-primary/50 leading-none">
            {String(index).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm">{subtitle}</p>
          </div>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-muted-foreground transition-transform mt-2 shrink-0 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-8 pl-2 md:pl-20">
          <p className="text-foreground/80 text-lg leading-relaxed mb-6 max-w-3xl">
            {description}
          </p>
          <ul className="space-y-3">
            {details.map((detail, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <span className="text-muted-foreground">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
