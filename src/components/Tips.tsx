import * as LucideIcons from 'lucide-react';
import { dynamicEcoTips } from '../data';

export default function Tips() {
  return (
    <section id="ai-tips" className="py-20 px-4 md:px-8 bg-forest-medium/10 border-t border-forest-light/20 relative">
      <div id="tips-shade-1" className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-lime-accent/5 blur-[120px] pointer-events-none" />
      
      <div id="tips-wrapper" className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div id="tips-header" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-lime-accent font-mono text-xs tracking-widest uppercase font-bold">
            Daily Habits Optimizer
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mt-3 font-normal leading-tight">
            Personalized Ecological Recommendations
          </h2>
          <p className="text-cream-muted text-sm sm:text-base mt-4">
            Small workflow optimizations at home yield immediate compounding offsets. Here are core high-impact practices calculated by our sorting experts.
          </p>
        </div>

        {/* Tips Bento Grid */}
        <div id="tips-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dynamicEcoTips.map((tip, index) => {
            // Dynamically load the Lucide icon from iconName
            const IconComponent = (LucideIcons as any)[tip.iconName] || LucideIcons.Lightbulb;
            
            return (
              <div 
                id={`eco-tip-card-${index}`}
                key={tip.id} 
                className="flex gap-5 p-6 rounded-2xl glass border border-white/10 hover:border-lime-accent/25 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 group hover:shadow-lg hover:shadow-lime-accent/5 cursor-pointer"
              >
                {/* Accent Icon column */}
                <div id={`eco-tip-icon-container-${index}`} className="shrink-0">
                  <div className="p-3.5 bg-forest-dark rounded-xl text-lime-accent group-hover:bg-lime-accent group-hover:text-forest-dark transition-all duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>

                {/* Content Column */}
                <div id={`eco-tip-desc-container-${index}`} className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug group-hover:text-lime-accent transition-colors">
                      {tip.title}
                    </h3>
                    <p className="text-cream-muted text-xs sm:text-sm leading-relaxed mb-4">
                      {tip.description}
                    </p>
                  </div>

                  {/* Impact Tag Line */}
                  <div id={`eco-tip-impact-line-${index}`} className="flex items-center gap-2 pt-2 border-t border-forest-light/10 mt-auto">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-lime-accent font-extrabold bg-lime-accent/10 px-2 py-1 rounded">
                      Quantified Benefit
                    </span>
                    <span className="text-xs font-semibold text-cream-text font-sans italic">
                      {tip.impact}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer-styled interactive callout banner */}
        <div 
          id="tips-promo-card"
          className="mt-12 p-6 md:p-8 rounded-3xl glass border border-lime-accent/25 flex flex-col md:flex-row items-center justify-between gap-6 bg-lime-accent/[0.02]"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-white mb-2 font-normal leading-tight">
              Have other waste types needing classifications?
            </h4>
            <p className="text-cream-muted text-xs sm:text-sm">
              Use our vision scanner at the top of the interface! We analyze wood fibers, toxic packaging, obsolete server chips, and composite metals in seconds.
            </p>
          </div>
          
          <button
            id="tips-promo-top-btn"
            onClick={() => {
              const element = document.getElementById('ai-scanner-section');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 px-6 py-3 bg-lime-accent text-forest-dark font-sans font-bold hover:bg-lime-hover duration-200 rounded-xl transition-all hover:scale-105 active:scale-95 cursor-pointer text-sm"
          >
            Scan Waste Now
          </button>
        </div>

      </div>
    </section>
  );
}
