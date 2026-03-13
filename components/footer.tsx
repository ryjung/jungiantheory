export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="font-serif text-2xl text-primary mb-4 block">C.G. Jung</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              An educational resource dedicated to preserving and sharing the psychological 
              theories and wisdom of Carl Gustav Jung.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Explore</h4>
            <nav className="space-y-2">
              <a href="#theories" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Major Theories
              </a>
              <a href="#archetypes" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Archetypes
              </a>
              <a href="#works" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Bibliography
              </a>
              <a href="#biography" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Biography
              </a>
              <a href="#legacy" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Legacy
              </a>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4">Further Reading</h4>
            <nav className="space-y-2">
              <a 
                href="https://www.junginstitute.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                C.G. Jung Institute Zürich
              </a>
              <a 
                href="https://philemonfoundation.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Philemon Foundation
              </a>
              <a 
                href="https://iaap.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                International Association for Analytical Psychology
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            Educational resource. Not affiliated with the Jung estate.
          </p>
          <p className="text-muted-foreground text-sm">
            1875 — 1961
          </p>
        </div>
      </div>
    </footer>
  )
}
