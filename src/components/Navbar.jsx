import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Instagram, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const sections = ['about', 'skills', 'projects', 'education', 'achievements', 'terminal', 'contact'];
      const scrollPos = window.scrollY + 200;
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Highlights', href: '#achievements' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-950/85 backdrop-blur-xl border-b border-crimson-500/20 shadow-lg shadow-black/50 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Harsh Sanjit Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-dark-900 border border-crimson-500/40 flex items-center justify-center font-mono font-bold text-lg text-white shadow-md shadow-crimson-900/30 group-hover:border-crimson-400 group-hover:box-glow-red transition-all duration-300">
              <span className="text-crimson-500 font-extrabold group-hover:text-white transition-colors">H</span>
              <span className="text-slate-200">S</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-crimson-500 animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-crimson-500"></span>
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-crimson-400 transition-colors flex items-center gap-1.5">
                Harsh Sanjit
                <span className="text-xs font-mono font-normal text-crimson-500 border border-crimson-500/30 rounded px-1 py-0.2 bg-crimson-950/40">
                  .dev
                </span>
              </span>
              <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                AI/ML Engineer in the Making
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-dark-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-crimson-600/20 text-white border border-crimson-500/40 shadow-sm shadow-crimson-500/30' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-900/80 border border-white/10 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px]">Open to Internships</span>
            </div>

            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:border-crimson-500/50 hover:bg-crimson-950/30 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-crimson-600 to-crimson-700 text-white shadow-md shadow-crimson-900/40 hover:from-crimson-500 hover:to-crimson-600 hover:shadow-crimson-600/30 transition-all active:scale-95"
            >
              <span>Connect</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-900 border border-white/10 text-slate-300"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-dark-900 border border-crimson-500/30 text-slate-200 hover:text-white hover:border-crimson-400 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-crimson-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] border-b border-crimson-500/20 bg-dark-950/95 backdrop-blur-2xl' : 'max-h-0'
        }`}
      >
        <div className="px-5 pt-3 pb-6 space-y-2">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Status: Available for Internships
            </span>
            <span className="text-crimson-400 font-bold">Harsh Sanjit</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium bg-dark-900/60 border border-white/5 text-slate-300 hover:text-white hover:bg-crimson-950/40 hover:border-crimson-500/30 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-crimson-500 opacity-70" />
              </a>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between gap-3 border-t border-white/10">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-crimson-400"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-crimson-400"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-900 border border-white/10 text-slate-300 hover:text-crimson-400"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex-1 py-2 text-center text-xs font-semibold rounded-lg bg-crimson-600 text-white hover:bg-crimson-500 transition-colors shadow-md shadow-crimson-900/50"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
