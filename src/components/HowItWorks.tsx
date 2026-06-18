import { Camera, Brain, Calendar, Award } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: Camera,
      title: "Snap a Photo",
      desc: "Upload an image of an empty product container, dead appliance, or organic scrap on any phone camera."
    },
    {
      num: "02",
      icon: Brain,
      title: "AI Classifies It",
      desc: "Gemini AI instantly catalogs materials, computes custom CO₂ savings, and issues high-fidelity sorting rules."
    },
    {
      num: "03",
      icon: Calendar,
      title: "Book a Pickup",
      desc: "Choose a local certified eco-courier for home container collections or claim GreenCoins rewards and vouchers."
    },
    {
      num: "04",
      icon: Award,
      title: "Track Your Impact",
      desc: "Keep structural digital statements showing cumulative chemical diversion metrics to verify your environmental impact."
    }
  ];

  return (
    <section id="programs-how-works" className="py-20 px-4 md:px-8 bg-forest-medium/20 border-y border-forest-light/30 relative">
      <div id="how-radial-shade-1" className="absolute top-1/2 left-10 w-[250px] h-[250px] rounded-full bg-lime-accent/5 blur-[90px] pointer-events-none" />
      <div id="how-works-container" className="max-w-6xl mx-auto relative z-10">
        
        <div id="how-works-header" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-lime-accent font-mono text-xs tracking-widest uppercase font-bold">
            Circular Recycling Flow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mt-3 leading-tight font-normal">
            Automating Local Clean Disposal in Four Simple Steps
          </h2>
          <p className="text-cream-muted text-sm sm:text-base mt-4">
            Our multi-tier diagnostic loop combines vision neural analysis with regional municipal collections database maps to make zero-waste living incredibly effortless.
          </p>
        </div>

        <div id="steps-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div 
                id={`how-works-step-${index}`}
                key={index} 
                className="relative glass p-6 rounded-2xl border border-white/10 hover:border-lime-accent/20 transition-all duration-300 bg-white/[0.01] hover:bg-white/[0.03] group flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div id={`step-num-icon-${index}`} className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-forest-dark rounded-xl text-lime-accent group-hover:bg-lime-accent group-hover:text-forest-dark transition-all duration-300">
                      <StepIcon className="h-6 w-6" />
                    </div>
                    <span className="font-serif text-3xl font-bold text-forest-light group-hover:text-lime-accent/30 transition-all duration-300 leading-none">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-serif group-hover:text-lime-accent transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-cream-muted text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                
                {/* Decorative bottom glow */}
                <div id={`step-glow-${index}`} className="absolute bottom-0 left-10 right-10 h-[1.5px] bg-gradient-to-r from-transparent via-lime-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
