import { TheoryCard } from "./theory-card"

const theories = [
  {
    title: "The Collective Unconscious",
    subtitle: "The shared ancestral memory of humanity",
    description:
      "Jung proposed that beneath our personal unconscious lies a deeper layer—the collective unconscious—which contains the accumulated experiences of all humanity. This universal substrate of the psyche is inherited and shared across cultures, manifesting through archetypal patterns and symbols that appear in myths, dreams, and religious systems worldwide.",
    details: [
      "Universal layer of the unconscious mind shared by all humans",
      "Contains primordial images and patterns called archetypes",
      "Explains cross-cultural similarities in myths and symbols",
      "Accessed through dreams, active imagination, and analysis",
      "Distinguishes Jungian psychology from Freudian psychoanalysis",
    ],
  },
  {
    title: "Archetypes",
    subtitle: "Universal patterns of the human psyche",
    description:
      "Archetypes are the inherited patterns of thought and imagery that form the content of the collective unconscious. They are not memories, but predispositions—templates for experience that shape how we perceive and respond to life. Major archetypes include the Self, Shadow, Anima/Animus, Persona, and the Great Mother.",
    details: [
      "The Self: the totality of the psyche, the goal of individuation",
      "The Shadow: repressed aspects of personality we reject",
      "Anima/Animus: the feminine in men, the masculine in women",
      "The Persona: the social mask we present to the world",
      "Archetypes manifest differently across cultures but share core patterns",
    ],
  },
  {
    title: "Individuation",
    subtitle: "The journey toward psychological wholeness",
    description:
      "Individuation is the central process of Jungian psychology—the lifelong journey of integrating the conscious and unconscious aspects of the psyche to become a unique, whole individual. It involves confronting one's shadow, integrating the anima/animus, and ultimately achieving a relationship with the Self.",
    details: [
      "The primary goal of human psychological development",
      "Requires confronting and integrating the shadow",
      "Involves withdrawal of projections onto others",
      "Leads to greater self-awareness and authenticity",
      "Not the same as individualism—includes connection to collective",
    ],
  },
  {
    title: "Psychological Types",
    subtitle: "Attitudes and functions of consciousness",
    description:
      "Jung's theory of psychological types describes how individuals differ in their basic orientation toward the world (introversion vs. extraversion) and their preferred ways of processing information through four functions: thinking, feeling, sensation, and intuition. This theory later inspired the Myers-Briggs Type Indicator.",
    details: [
      "Two attitudes: Introversion (inner world) and Extraversion (outer world)",
      "Four functions: Thinking, Feeling, Sensation, Intuition",
      "Each person has a dominant function and auxiliary functions",
      "Foundation for modern personality assessment tools",
      "Helps understand different ways people perceive reality",
    ],
  },
  {
    title: "The Shadow",
    subtitle: "The dark side of personality",
    description:
      "The shadow represents the unconscious aspects of the personality that the conscious ego does not identify with—often consisting of repressed weaknesses, shortcomings, and instincts. Shadow work involves acknowledging, understanding, and integrating these rejected parts of ourselves.",
    details: [
      "Contains traits deemed unacceptable by the conscious mind",
      "Often projected onto others, creating conflict",
      "Integration leads to greater psychological health",
      "Shadow is not inherently evil—contains positive potential too",
      "Confronting the shadow is essential for individuation",
    ],
  },
  {
    title: "Synchronicity",
    subtitle: "Meaningful coincidences",
    description:
      "Synchronicity is Jung's concept of acausal connecting principles—meaningful coincidences that occur with no causal relationship yet seem to be meaningfully related. These events challenge the Western scientific worldview of strict causality and suggest a deeper order underlying reality.",
    details: [
      "Meaningful coincidences without causal connection",
      "Developed in dialogue with physicist Wolfgang Pauli",
      "Challenges purely mechanistic views of the universe",
      "Often experienced during periods of psychological transformation",
      "Suggests connection between psyche and physical world",
    ],
  },
]

export function TheoriesSection() {
  return (
    <section id="theories" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Core Concepts</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Major Theories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Jung developed a comprehensive framework for understanding the human psyche. 
            His theories continue to influence psychology, literature, art, and spirituality.
          </p>
        </div>

        <div className="space-y-0">
          {theories.map((theory, index) => (
            <TheoryCard key={theory.title} {...theory} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
