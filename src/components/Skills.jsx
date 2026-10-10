import React, { useState } from 'react';
import { 
  Code, 
  Coffee, 
  Cpu, 
  Database, 
  Globe, 
  Layout, 
  Brain, 
  Eye, 
  Crosshair, 
  Scan, 
  Radio, 
  Layers, 
  GitBranch, 
  Github, 
  Terminal, 
  Box, 
  Sparkles,
  CheckCircle,
  Wrench
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Icon resolver map
const iconMap = {
  Code,
  Coffee,
  Cpu,
  Database,
  Globe,
  Layout,
  Brain,
  Eye,
  Crosshair,
  Scan,
  Radio,
  Layers,
  GitBranch,
  Github,
  Terminal,
  Box
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const displayedSkills = activeCategory === 'All'
    ? skillsData.flatMap((cat) => cat.skills.map((s) => ({ ...s, category: cat.category })))
    : skillsData.find((cat) => cat.category === activeCategory)?.skills.map((s) => ({ ...s, category: activeCategory })) || [];

  return (
    <section id="skills" className="relative py-24 bg-dark-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-crimson-600/10 blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-red-950/20 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-950/50 border border-crimson-500/30 text-xs font-mono text-crimson-400">
            <Wrench className="w-3.5 h-3.5" />
            <span>02 // CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Technical <span className="gradient-text-red">Stack & Skills</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            An engineered repertoire spanning low-level computing, modern high-level machine vision, and physical IoT hardware.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-crimson-600 text-white shadow-lg shadow-crimson-900/40 border border-crimson-400'
                    : 'bg-dark-900/80 text-slate-300 border border-white/5 hover:border-crimson-500/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {displayedSkills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-crimson-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-dark-900 border border-crimson-500/20 group-hover:border-crimson-400 group-hover:bg-crimson-950/40 flex items-center justify-center text-crimson-400 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-crimson-400 bg-crimson-950/50 border border-crimson-500/30 px-2 py-0.5 rounded">
                        {skill.level}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 mt-1">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-crimson-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed font-light">
                    {skill.highlight}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    Verified Project Use
                  </span>
                  <span className="text-crimson-400 group-hover:translate-x-0.5 transition-transform">
                    ●
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner: Hands-on Competence */}
        <div className="mt-14 glass-panel rounded-2xl p-6 sm:p-8 border border-crimson-500/20 bg-gradient-to-r from-dark-900 via-crimson-950/20 to-dark-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-crimson-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Engineering Philosophy
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Strong Foundations in Math, Algorithms & Physical Hardware
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Proficient in building end-to-end applications: from algorithmic complexity analysis in Java/C to computer vision pipelines with OpenCV & MediaPipe, and hardware interfaces using Arduino and Linux.
              </p>
            </div>

            <div className="flex md:justify-end">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white text-xs font-bold transition-all shadow-lg shadow-crimson-950"
              >
                <span>See Applied Projects</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
