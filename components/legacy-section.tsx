const influences = [
  {
    area: "Psychology",
    description:
      "Analytical psychology, dream analysis, personality typology, psychotherapy techniques, and the integration of spirituality into psychological practice.",
  },
  {
    area: "Literature & Arts",
    description:
      "Archetypal criticism, creative writing, filmmaking, visual arts, and the understanding of mythological themes in storytelling.",
  },
  {
    area: "Religion & Spirituality",
    description:
      "Comparative religion, depth spirituality, the psychology of religious experience, and East-West philosophical dialogue.",
  },
  {
    area: "Popular Culture",
    description:
      "Myers-Briggs personality assessment, self-help movement, Joseph Campbell's hero's journey, and modern discussions of personal growth.",
  },
]

export function LegacySection() {
  return (
    <section id="legacy" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Enduring Impact</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Legacy</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Jung's influence extends far beyond clinical psychology. His ideas have permeated 
              literature, art, film, religious studies, and popular culture, shaping how we 
              understand ourselves and our place in the world.
            </p>
            <blockquote className="border-l-2 border-primary pl-6">
              <p className="text-xl italic font-serif leading-relaxed">
                "Who looks outside, dreams; who looks inside, awakes."
              </p>
              <cite className="block mt-4 text-sm text-muted-foreground not-italic">
                — Carl Gustav Jung
              </cite>
            </blockquote>
          </div>

          <div className="space-y-6">
            {influences.map((item) => (
              <div
                key={item.area}
                className="bg-card border border-border rounded-sm p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-serif text-xl mb-2 text-primary">{item.area}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
