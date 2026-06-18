import { Recycle, ArrowUp, Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="global-footer" className="bg-forest-dark border-t border-forest-light/35 pt-16 pb-8 px-4 md:px-8 relative overflow-hidden">
      <div id="footer-radial-shade" className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-lime-accent/5 blur-[120px] pointer-events-none" />
      
      <div id="footer-wrapper" className="max-w-6xl mx-auto relative z-10">
        
        {/* Upper footer grid */}
        <div id="footer-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 mb-12">
          
          {/* Logo & Blurb Column */}
          <div id="footer-col-brand" className="lg:col-span-4 space-y-4">
            <div id="footer-logo" className="flex items-center gap-2 cursor-pointer" onClick={handleScrollTop}>
              <div className="h-9 w-9 bg-lime-accent rounded-xl flex items-center justify-center text-forest-dark font-black">
                <Recycle className="h-5 w-5" />
              </div>
              <span className="font-serif text-2xl tracking-tight text-white font-normal">
                Green<span className="text-lime-accent italic font-black">Bin</span>
              </span>
            </div>
            
            <p className="text-cream-muted text-xs sm:text-sm leading-relaxed max-w-sm">
              An AI-powered environmental waste management ecosystem connecting smart photo classification models directly with municipal circular logistics corridors.
            </p>

            {/* Social icons */}
            <div id="footer-socials" className="flex items-center gap-3 pt-2">
              <a 
                href="#footer"
                aria-label="LinkedIn profile link" 
                className="p-1.5 rounded-lg bg-forest-medium/50 hover:bg-lime-accent text-cream-muted hover:text-forest-dark transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#footer"
                aria-label="GitHub profile link" 
                className="p-1.5 rounded-lg bg-forest-medium/50 hover:bg-lime-accent text-cream-muted hover:text-forest-dark transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <button 
                onClick={handleScrollTop} 
                aria-label="Scroll to top of page button"
                className="p-1.5 rounded-lg bg-forest-medium/50 hover:bg-lime-accent text-cream-muted hover:text-forest-dark transition-colors"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* sitemap product column */}
          <div id="footer-col-product" className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-lime-accent mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#ai-scanner-section" className="text-cream-muted hover:text-white transition-colors">AI Waste Classifier</a></li>
              <li><a href="#booking-section" className="text-cream-muted hover:text-white transition-colors">Door Pickup Services</a></li>
              <li><a href="#global-footer" className="text-cream-muted hover:text-white transition-colors">Enterprise Digesters</a></li>
              <li><a href="#global-footer" className="text-cream-muted hover:text-white transition-colors">Developer Sandbox</a></li>
            </ul>
          </div>

          {/* sitemap company column */}
          <div id="footer-col-company" className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-lime-accent mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#programs-how-works" className="text-cream-muted hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#programs" className="text-cream-muted hover:text-white transition-colors">Eco Programs</a></li>
              <li><a href="#global-footer" className="text-cream-muted hover:text-white transition-colors">Carbon Ledger</a></li>
              <li><a href="#global-footer" className="text-cream-muted hover:text-white transition-colors">Press Material</a></li>
            </ul>
          </div>

          {/* sitemap support column */}
          <div id="footer-col-support" className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-lime-accent mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#global-footer" className="text-cream-muted hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#global-footer" className="text-cream-muted hover:text-white transition-colors">API Keys</a></li>
              <li><a href="#global-footer" className="text-cream-muted hover:text-white transition-colors">Secured Secrets</a></li>
              <li><a href="#global-footer" className="text-cream-muted hover:text-white transition-colors">Contact Agents</a></li>
            </ul>
          </div>

        </div>

        {/* Lower footer copyright & tagline */}
        <div id="footer-bottom" className="pt-8 border-t border-forest-light/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-cream-muted">
          <div>
            &copy; {currentYear} GreenBin Inc. Certified ISO 14001 Waste Intelligence Partner.
          </div>
          
          <div className="flex items-center gap-1">
            <span>Designed for circular futures with</span>
            <Heart className="h-3 w-3 text-lime-accent fill-lime-accent animate-pulse" />
            <span>in Bangalore and Globally.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
