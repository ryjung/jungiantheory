import { HeroSection } from "@/components/hero-section"
import { TheoriesSection } from "@/components/theories-section"
import { ArchetypesSection } from "@/components/archetypes-section"
import { WorksSection } from "@/components/works-section"
import { BiographySection } from "@/components/biography-section"
import { LegacySection } from "@/components/legacy-section"
import { QuotesSection } from "@/components/quotes-section"
import { Footer } from "@/components/footer"

export default function JungPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <TheoriesSection />
      <ArchetypesSection />
      <BiographySection />
      <WorksSection />
      <QuotesSection />
      <LegacySection />
      <Footer />
    </main>
  )
}
