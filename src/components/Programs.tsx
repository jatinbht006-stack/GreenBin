import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Users, CalendarDays, Filter } from 'lucide-react';
import { Program } from '../types';
import { awarenessPrograms } from '../data';

interface ProgramsProps {
  onJoinProgram: (programTitle: string) => void;
}

export default function Programs({ onJoinProgram }: ProgramsProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Government' | 'NGO' | 'Private'>('All');

  const filteredPrograms = awarenessPrograms.filter(prog => 
    activeFilter === 'All' ? true : prog.type === activeFilter
  );

  const filters: ('All' | 'Government' | 'NGO' | 'Private')[] = ['All', 'Government', 'NGO', 'Private'];

  return (
    <section id="programs" className="py-20 px-4 md:px-8 bg-forest-dark relative">
      <div id="prog-light-accent-1" className="absolute top-1/3 right-10 w-[300px] h-[300px] rounded-full bg-lime-accent/5 blur-[120px] pointer-events-none" />
      
      <div id="programs-wrapper" className="max-w-6xl mx-auto relative z-10 animate-fade-in">
        
        {/* Section Header */}
        <div id="programs-intro" className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-lime-accent font-mono text-xs tracking-widest uppercase font-bold">
              Collective Action Dashboard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mt-3 font-normal leading-tight">
              Community Circularity Awareness Programs
            </h2>
            <p className="text-cream-muted text-sm sm:text-base mt-3">
              Explore national and localized initiatives. Team up with certified environmental NGOs and governmental bodies to earn verified digital GreenCoin rewards.
            </p>
          </div>

          {/* Filtering Controls */}
          <div id="filters-container" className="flex flex-wrap items-center gap-2 p-1.5 bg-forest-medium/60 rounded-xl border border-forest-light/50 w-full sm:w-auto">
            <div className="px-2 text-lime-accent text-xs font-mono uppercase font-bold flex items-center gap-1.5 hidden sm:flex">
              <Filter className="h-3 w-3" />
              Filter:
            </div>
            {filters.map((filter) => (
              <button
                id={`filter-btn-${filter}`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-mono uppercase tracking-widest rounded-lg font-bold duration-200 transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-lime-accent text-forest-dark font-black shadow-md'
                    : 'text-cream-muted hover:text-white hover:bg-forest-light/45'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <motion.div 
          layout 
          id="programs-cards-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((prog) => (
              <motion.div
                id={`program-card-${prog.id}`}
                layout
                key={prog.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className={`group flex flex-col justify-between overflow-hidden rounded-2xl border transition-all hover:shadow-xl hover:shadow-lime-accent/5 backdrop-blur-sm ${
                  prog.featured 
                    ? 'glass border-lime-accent/30 bg-lime-accent/[0.03] shadow-md ring-1 ring-lime-accent/20' 
                    : 'glass border-white/10 bg-white/[0.01]'
                }`}
              >
                {/* Banner / Header */}
                <div>
                  <div id={`program-emoji-banner-${prog.id}`} className="relative h-28 bg-forest-light/80 flex items-center justify-center border-b border-forest-light/40 group-hover:bg-forest-light/40 transition-colors">
                    <span className="text-5xl select-none filter drop-shadow animate-bounce-slow">
                      {prog.emoji}
                    </span>
                    
                    {/* Featured status tag */}
                    {prog.featured && (
                      <span className="absolute top-3 right-3 px-2 py-1 bg-lime-accent text-forest-dark font-mono text-[9px] uppercase tracking-wider font-extrabold rounded-md flex items-center gap-1">
                        <ShieldCheck className="h-2.5 w-2.5" /> High Impact
                      </span>
                    )}
                  </div>

                  {/* Body Copy */}
                  <div id={`program-body-${prog.id}`} className="p-6">
                    <div id={`program-meta-${prog.id}`} className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs text-lime-accent font-mono tracking-wide max-w-[140px] truncate block">
                        {prog.organizer}
                      </span>
                      
                      {/* Organization Type Badging */}
                      <span className={`px-2 py-0.5 text-[10px] uppercase font-mono tracking-widest rounded-full font-bold border ${
                        prog.type === 'Government' 
                          ? 'border-sky-500/30 bg-sky-950/20 text-sky-400'
                          : prog.type === 'NGO'
                          ? 'border-indigo-500/30 bg-indigo-950/20 text-indigo-400'
                          : 'border-yellow-500/30 bg-yellow-950/20 text-yellow-500'
                      }`}>
                        {prog.type}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white mb-2 leading-tight group-hover:text-lime-accent transition-colors">
                      {prog.title}
                    </h3>
                    
                    <p className="text-cream-muted text-xs leading-relaxed line-clamp-3">
                      {prog.description}
                    </p>
                  </div>
                </div>

                {/* Footer Controls */}
                <div id={`program-footer-${prog.id}`} className="p-6 pt-0 border-t border-forest-light/10 mt-auto">
                  <div className="flex items-center justify-between gap-4 mt-4 text-xs font-mono">
                    <div className="flex items-center gap-1.5 text-cream-muted">
                      <CalendarDays className="h-3.5 w-3.5 text-lime-accent" />
                      <span className="text-[11px] font-medium leading-none max-w-[120px] truncate">
                        {prog.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-[11px] text-cream-muted font-bold">
                      <Users className="h-3.5 w-3.5 text-lime-accent" />
                      {(prog.joinedCount).toLocaleString()} Joined
                    </div>
                  </div>

                  <button
                    id={`join-program-btn-${prog.id}`}
                    onClick={() => onJoinProgram(prog.title)}
                    className="w-full mt-6 py-2.5 px-4 bg-forest-light hover:bg-lime-accent text-lime-accent hover:text-forest-dark border border-lime-accent/20 hover:border-transparent rounded-xl text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer text-center"
                  >
                    Join Campaign
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
