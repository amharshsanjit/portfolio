import React from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  ChevronUp
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-950 border-t border-crimson-500/20 pt-16 pb-12 overflow-hidden">
      {/* Background cyber accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-crimson-500/60 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-dark-900 border border-crimson-500/40 flex items-center justify-center font-mono font-bold text-white shadow-md shadow-crimson-950">
                <span className="text-crimson-500">H</span>
                <span>S</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Harsh Sanjit
                <span className="text-xs font-mono font-normal text-crimson-400 ml-1.5 border border-crimson-500/30 rounded px-1.5 py-0.5 bg-crimson-950/40">
                  .dev
                </span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md leading-relaxed">
              B.Tech Computer Science Engineering student specializing in AI & ML at{' '}
              <span className="text-slate-200">Rungta International Skills University</span>. Aspiring AI/ML Engineer, Java & Python Developer, and IoT enthusiast.
            </p>

            <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Summer Internships & Technical Projects</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li>
                <a href="#about" className="hover:text-crimson-400 transition-colors">
                  &gt; About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-crimson-400 transition-colors">
                  &gt; Tech Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-crimson-400 transition-colors">
                  &gt; Flagship Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-crimson-400 transition-colors">
                  &gt; Education
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-crimson-400 transition-colors">
                  &gt; Highlights
                </a>
              </li>
              <li>
                <a href="#terminal" className="hover:text-crimson-400 transition-colors">
                  &gt; CLI Terminal
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-crimson-400 transition-colors">
                  &gt; Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Connect With Harsh
            </h4>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-crimson-500/40 text-slate-300 hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-crimson-500/40 text-slate-300 hover:text-white transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 border border-white/10 hover:border-crimson-500/40 text-slate-300 hover:text-white transition-all"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-900 hover:bg-dark-850 border border-white/10 hover:border-crimson-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all"
              >
                <ChevronUp className="w-4 h-4 text-crimson-400" />
                <span>Return to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Harsh Sanjit. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5">
            <span>Crafted with React, Tailwind CSS &amp; Passion for AI</span>
          </div>

          <div className="text-[11px] text-slate-400">
            Domain: <span className="text-crimson-400">harshsanjit.dev</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
