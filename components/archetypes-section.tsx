"use client"

import { useState } from "react"

const archetypes = [
  {
    name: "The Self",
    symbol: "◉",
    description:
      "The archetype of wholeness and the regulating center of the psyche. It represents the totality of the conscious and unconscious mind and is the goal of the individuation process. The Self often appears in dreams as a mandala, a divine child, or a wise figure.",
    quote: "The Self is not only the centre, but also the whole circumference which embraces both conscious and unconscious.",
  },
  {
    name: "The Shadow",
    symbol: "◐",
    description:
      "The unknown dark side of the personality—the part of the unconscious mind consisting of repressed weaknesses, shortcomings, and instincts. The shadow is everything we refuse to acknowledge about ourselves yet is constantly thrust upon us from the unconscious.",
    quote: "Everyone carries a shadow, and the less it is embodied in the individual's conscious life, the blacker and denser it is.",
  },
  {
    name: "The Anima",
    symbol: "☽",
    description:
      "The feminine inner personality in men's unconscious. She is the archetype of life itself and serves as a bridge to the unconscious. The anima appears in dreams and fantasies as a woman and has four developmental stages: Eve, Helen, Mary, and Sophia.",
    quote: "The anima is the archetype of life itself.",
  },
  {
    name: "The Animus",
    symbol: "☉",
    description:
      "The masculine inner personality in women's unconscious. He represents the Logos principle—meaning, reason, and action. Like the anima, the animus develops through stages, from physical power to word/meaning to action to spiritual wisdom.",
    quote: "The animus is rather like an assembly of fathers or dignitaries who lay down incontestable, rational judgments.",
  },
  {
    name: "The Persona",
    symbol: "◯",
    description:
      "The social mask we wear in public—the compromise between who we truly are and what society expects. While necessary for social functioning, over-identification with the persona leads to a shallow existence disconnected from the deeper Self.",
    quote: "The persona is that which in reality one is not, but which oneself as well as others think one is.",
  },
  {
    name: "The Wise Old Man",
    symbol: "✦",
    description:
      "The archetype of meaning and wisdom. He appears in dreams, myths, and fairy tales as a magician, doctor, priest, teacher, professor, or any authority figure who offers guidance. He represents insight, knowledge, and moral qualities.",
    quote: "The figure of the wise old man can appear so plastically that it takes the shape of a living person.",
  },
]

export function ArchetypesSection() {
  const [selectedArchetype, setSelectedArchetype] = useState(archetypes[0])

  return (
    <section id="archetypes" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">The Collective Unconscious</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Primary Archetypes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Archetypes are universal, archaic patterns and images that derive from the collective 
            unconscious. They are inherited potentials which are actualized when they enter consciousness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Archetype Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {archetypes.map((archetype) => (
              <button
                key={archetype.name}
                onClick={() => setSelectedArchetype(archetype)}
                className={`p-6 rounded-sm text-left transition-all ${
                  selectedArchetype.name === archetype.name
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                <span className="text-3xl block mb-3">{archetype.symbol}</span>
                <span className="font-serif text-lg">{archetype.name}</span>
              </button>
            ))}
          </div>

          {/* Archetype Details */}
          <div className="bg-card border border-border rounded-sm p-8">
            <span className="text-6xl block mb-6">{selectedArchetype.symbol}</span>
            <h3 className="font-serif text-3xl mb-4">{selectedArchetype.name}</h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              {selectedArchetype.description}
            </p>
            <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
              {'"'}{selectedArchetype.quote}{'"'}
              <cite className="block mt-2 text-sm not-italic text-primary">— Carl Jung</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
