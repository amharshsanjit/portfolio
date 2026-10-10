import React, { useEffect } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Zap
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-crimson-500/40 bg-dark-900 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono uppercase bg-crimson-950 text-crimson-400 border border-crimson-500/30 px-2 py-0.5 rounded">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {project.badge}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {project.title}
            </h3>
            <p className="text-sm text-crimson-400 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-dark-950 text-slate-400 hover:text-white hover:bg-crimson-950/60 border border-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Long Description */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            System Overview & Architecture
          </h4>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            {project.longDesc}
          </p>
        </div>

        {/* Data Flow / Pipeline diagram */}
        {project.architecture && (
          <div className="p-4 rounded-xl bg-dark-950 border border-crimson-500/20 space-y-2">
            <div className="text-xs font-mono text-crimson-400 flex items-center gap-1.5 uppercase">
              <Zap className="w-3.5 h-3.5" />
              Execution Flow Pipeline
            </div>
            <p className="text-xs font-mono text-slate-300 leading-relaxed break-words bg-dark-900/60 p-2.5 rounded border border-white/5">
              {project.architecture}
            </p>
          </div>
        )}

        {/* Features Checklist */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Key Engineering Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-dark-950/50 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-crimson-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Technologies & Libraries
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-950 border border-crimson-500/30 text-crimson-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-slate-400">
            Source maintained by <span className="text-white font-medium">Harsh Sanjit</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-semibold text-xs transition-all shadow-lg shadow-crimson-950"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-300 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
