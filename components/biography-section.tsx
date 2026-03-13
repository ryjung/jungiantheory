const timeline = [
  {
    year: "1875",
    event: "Born on July 26 in Kesswil, Switzerland",
  },
  {
    year: "1895",
    event: "Begins medical studies at the University of Basel",
  },
  {
    year: "1900",
    event: "Joins the Burghölzli psychiatric hospital under Eugen Bleuler",
  },
  {
    year: "1903",
    event: "Marries Emma Rauschenbach",
  },
  {
    year: "1906",
    event: "Begins correspondence with Sigmund Freud",
  },
  {
    year: "1912",
    event: "Publishes 'Psychology of the Unconscious', breaking with Freud",
  },
  {
    year: "1914",
    event: "Begins 'confrontation with the unconscious' documented in The Red Book",
  },
  {
    year: "1921",
    event: "Publishes 'Psychological Types'",
  },
  {
    year: "1928",
    event: "Begins study of alchemy as symbolic representation of individuation",
  },
  {
    year: "1944",
    event: "Near-death experience following heart attack",
  },
  {
    year: "1961",
    event: "Dies on June 6 in Küsnacht, Switzerland",
  },
]

export function BiographySection() {
  return (
    <section id="biography" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Life & Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Biography</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Carl Gustav Jung lived a life devoted to understanding the depths of the human psyche, 
            leaving behind a revolutionary body of work that continues to influence psychology, 
            philosophy, and spirituality.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-3 w-4 h-4 rounded-full bg-primary border-4 border-background md:left-1/2 md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <span className="text-primary font-serif text-2xl">{item.year}</span>
                  <p className="text-foreground/80 mt-1">{item.event}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
