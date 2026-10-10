import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Award, 
  CheckCircle2, 
  School
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const edu = educationData[0];

  return (
    <section id="education" className="relative py-24 bg-dark-950 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-crimson-600/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-950/50 border border-crimson-500/30 text-xs font-mono text-crimson-400">
            <School className="w-3.5 h-3.5" />
            <span>04 // ACADEMIC BACKGROUND</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Education & <span className="gradient-text-red">Specialization</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            Formal engineering foundations in Computer Science with a targeted specialization in Artificial Intelligence & Machine Learning.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-crimson-500/30 bg-dark-900/90 shadow-2xl relative overflow-hidden">
            
            {/* Top red glow accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson-600 via-crimson-400 to-crimson-600"></div>

            <div className="space-y-6">
              
              {/* Institution Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-crimson-400 bg-crimson-950 px-2.5 py-1 rounded-md border border-crimson-500/30 font-semibold inline-block">
                    {edu.degree}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {edu.field}
                  </h3>

                  <div className="text-crimson-400 font-medium text-base sm:text-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-crimson-500"></span>
                    <span>Specialization: {edu.specialization}</span>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end space-y-1">
                  <div className="text-base font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-crimson-400" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-crimson-500" />
                    <span>{edu.period}</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 mt-1">
                    ● {edu.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {edu.description}
              </p>

              {/* Core Coursework Grid */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-crimson-400" />
                  Key Academic Coursework & Disciplines
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {edu.coreCourses.map((course, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 rounded-xl bg-dark-950/70 border border-white/5 hover:border-crimson-500/30 transition-colors flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 shrink-0"></span>
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Award className="w-4 h-4 text-crimson-400" />
                  Academic Focus & Hands-on Lab Work
                </h4>

                <div className="grid grid-cols-1 gap-2.5">
                  {edu.academicHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-crimson-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
