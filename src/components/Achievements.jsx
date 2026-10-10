import React from 'react';
import { 
  Trophy, 
  Rocket, 
  Eye, 
  Cpu, 
  GitBranch, 
  CheckCircle
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const iconMap = {
  Rocket,
  Eye,
  Cpu,
  GitBranch
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 bg-dark-950/70 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-crimson-600/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-950/50 border border-crimson-500/30 text-xs font-mono text-crimson-400">
            <Trophy className="w-3.5 h-3.5" />
            <span>05 // HIGHLIGHTS & MILESTONES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Key Engineering <span className="gradient-text-red">Milestones</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            Hands-on achievements and demonstrable engineering progress built on dedication, coding experiments, and practical prototypes.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <div
                key={item.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-dark-900 border border-crimson-500/30 group-hover:border-crimson-400 group-hover:bg-crimson-950/50 flex items-center justify-center text-crimson-400 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-crimson-400 bg-crimson-950/60 border border-crimson-500/30 px-2.5 py-1 rounded">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-crimson-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-crimson-400" />
                    Verified Work
                  </span>
                  <span className="text-crimson-400 font-semibold">
                    0{item.id} // 04
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Growth Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-dark-900/40 border border-white/5 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            <span className="text-crimson-400 font-semibold">&gt; Ongoing Focus:</span> Deepening knowledge in neural vision architectures, distributed AI pipelines, and high-performance embedded systems.
          </p>
        </div>

      </div>
    </section>
  );
}
