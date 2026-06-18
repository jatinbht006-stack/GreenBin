import { motion } from 'motion/react';
import { ArrowDown, HelpCircle, Sparkles, Building2, Leaf, BarChart3, Recycle } from 'lucide-react';
import { statsData } from '../data';

interface HeroProps {
  onScanClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onScanClick, onExploreClick }: HeroProps) {
  return (
    <section 
      id="hero-section" 
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-radial from-forest-medium to-forest-dark"
    >
      {/* Abstract geometric background accents */}
      <div id="hero-radial-shade" className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-lime-accent/5 blur-[120px] pointer-events-none" />
      <div id="hero-leaf-shade" className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-forest-light/10 blur-[80px] pointer-events-none" />

      <div id="hero-content-wrapper" className="max-w-5xl w-full text-center z-10 flex flex-col items-center">
        {/* Eyebrow Label with decorative side lines */}
        <motion.div 
          id="hero-eyebrow-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-[1px] w-6 bg-lime-accent/50" />
          <span className="text-lime-accent font-mono text-xs tracking-widest uppercase flex items-center gap-1.5 font-bold">
            <Sparkles className="h-3 w-3 animate-spin text-lime-accent" />
            AI-Powered Waste Intelligence
          </span>
          <div className="h-[1px] w-6 bg-lime-accent/50" />
        </motion.div>

        {/* Serif Headline with highlighted lime line */}
        <motion.h1 
          id="hero-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white tracking-tight max-w-4xl font-normal"
        >
          Transforming waste with high-precision <br />
          <span className="text-lime-accent italic underline underline-offset-8 decoration-lime-accent font-bold">
            Real-time Environmental AI
          </span>
        </motion.h1>

        {/* Subtitle explaining the cycle (photo -> AI -> pickup) */}
        <motion.p 
          id="hero-subheading"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-cream-muted text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed text-balance"
        >
          Simply snap a photo of any waste item. Our AI instantly classifies its chemical grouping, calculates CO₂ diversion savings, and generates digital booking slots with certified local circular handlers.
        </motion.p>

        {/* CTA Button Actions */}
        <motion.div 
          id="hero-cta-buttons"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <button
            id="hero-btn-scan"
            onClick={onScanClick}
            className="w-full sm:w-auto px-8 py-4 bg-lime-accent text-forest-dark hover:bg-lime-hover font-semibold rounded-full duration-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-lime-accent/15 cursor-pointer hover:scale-105 active:scale-95"
          >
            <Recycle className="h-5 w-5" />
            Scan Waste Now
          </button>
          
          <button
            id="hero-btn-explore"
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 bg-forest-light border border-lime-accent/20 text-lime-accent hover:bg-forest-medium font-semibold rounded-full duration-200 transition-all flex items-center justify-center gap-2 hover:border-lime-accent/50 cursor-pointer"
          >
            Explore Mud Campaign Programs
          </button>
        </motion.div>

        {/* Stat Row Grid with Bento styling */}
        <motion.div 
          id="hero-stats-panel"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-16 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 px-2"
        >
          {statsData.map((stat, i) => {
            const icons = [Recycle, Building2, Leaf, BarChart3];
            const StatIcon = icons[i % icons.length];
            
            return (
              <div 
                id={`stat-box-${i}`}
                key={i} 
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-forest-medium/45 border border-forest-light/60 hover:border-lime-accent/20 transition-all group backdrop-blur-sm"
              >
                <div id={`stat-icon-${i}`} className="p-2.5 rounded-lg bg-forest-light mb-2 text-lime-accent">
                  <StatIcon className="h-5 w-5 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
                </div>
                <div id={`stat-val-${i}`} className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {stat.value}
                </div>
                <div id={`stat-lbl-${i}`} className="text-xs text-lime-accent font-mono uppercase tracking-wider mt-1 text-center font-bold">
                  {stat.label}
                </div>
                <div id={`stat-dtl-${i}`} className="text-[10px] text-cream-muted mt-0.5 text-center px-1">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Floating scroll down indicator */}
        <motion.div 
          id="hero-scroll-indicator"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-16 text-cream-muted flex flex-col items-center gap-1.5 cursor-pointer group"
          onClick={onScanClick}
        >
          <span className="text-xs font-mono tracking-widest text-lime-accent uppercase opacity-80 group-hover:opacity-100">
            Scroll To Analyze
          </span>
          <ArrowDown className="h-4 w-4 text-lime-accent" />
        </motion.div>
      </div>
    </section>
  );
}
