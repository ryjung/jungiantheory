const works = [
  {
    title: "The Red Book",
    year: "1914–1930",
    description:
      "Jung's legendary illuminated manuscript documenting his confrontation with the unconscious through active imagination. Published in 2009, it reveals the foundation of his later theories.",
  },
  {
    title: "Psychological Types",
    year: "1921",
    description:
      "The seminal work introducing Jung's theory of personality types, including introversion/extraversion and the four psychological functions.",
  },
  {
    title: "Modern Man in Search of a Soul",
    year: "1933",
    description:
      "A collection of essays providing an accessible introduction to Jung's psychology, including discussions of dreams, psychology and religion, and the spiritual problem of modern man.",
  },
  {
    title: "The Archetypes and the Collective Unconscious",
    year: "1959",
    description:
      "A major collection of essays defining Jung's concept of archetypes and the collective unconscious, including the mother archetype and the concept of rebirth.",
  },
  {
    title: "Memories, Dreams, Reflections",
    year: "1961",
    description:
      "Jung's autobiography, recorded and edited by Aniela Jaffé. An intimate account of his inner experiences, visions, and the development of his psychological insights.",
  },
  {
    title: "Man and His Symbols",
    year: "1964",
    description:
      "Jung's final work, written for a general audience, explaining the importance of symbolism and dreams. Published posthumously.",
  },
]

export function WorksSection() {
  return (
    <section id="works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Bibliography</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Major Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Jung was a prolific writer whose collected works span over 20 volumes. 
            These are some of his most influential and accessible books.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <article
              key={work.title}
              className="group bg-card border border-border rounded-sm p-6 hover:border-primary/50 transition-colors"
            >
              <span className="text-primary text-sm font-medium">{work.year}</span>
              <h3 className="font-serif text-xl mt-2 mb-3 group-hover:text-primary transition-colors">
                {work.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {work.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
