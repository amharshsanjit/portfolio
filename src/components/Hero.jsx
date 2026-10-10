import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin,
  Instagram,
  Mail, 
  Terminal as TerminalIcon, 
  Eye, 
  Cpu, 
  Brain, 
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  const roles = personalInfo.roles;

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayedText !== currentRole) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(45);
      }, 2200);
    } else if (isDeleting && displayedText !== '') {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(85);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-crimson-600/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[20rem] h-[20rem] rounded-full bg-red-900/15 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[18rem] h-[18rem] rounded-full bg-crimson-500/10 blur-[110px] pointer-events-none"></div>

      {/* Cyber Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      
      {/* Horizontal Ambient Line */}
      <div className="cyber-scanline"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Persona & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-crimson-500/30 text-xs font-mono text-slate-300 shadow-sm shadow-crimson-950">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson-500"></span>
              </span>
              <span className="text-crimson-400 font-semibold tracking-wider uppercase text-[10px] sm:text-xs">
                Undergraduate Student // Rungta International Skills University
              </span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white font-display">
                Hello, I&apos;m <br />
                <span className="gradient-text-red inline-block drop-shadow-sm">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Dynamic Animated Role */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="font-mono text-lg sm:text-2xl lg:text-3xl font-semibold text-crimson-400 tracking-wide flex items-center">
                  <span className="text-slate-400 mr-2">&gt;</span>
                  {displayedText}
                  <span className="terminal-cursor ml-1"></span>
                </span>
              </div>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              B.Tech Computer Science Engineering student specializing in <span className="text-white font-medium">AI & ML</span> at{' '}
              <span className="text-white font-medium">Rungta International Skills University</span>. Aspiring AI/ML Engineer, Java & Python Developer, and IoT enthusiast passionate about transforming computer vision and intelligent algorithms into practical solutions.
            </p>

            {/* Quick Tech Highlights Badge Row */}
            <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
              <span className="text-xs font-mono text-slate-400 mr-1">Focus Areas:</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-900 border border-white/10 text-xs font-mono text-slate-300">
                <Brain className="w-3 h-3 text-crimson-400" /> AI/ML
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-900 border border-white/10 text-xs font-mono text-slate-300">
                <Eye className="w-3 h-3 text-crimson-400" /> Computer Vision
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-900 border border-white/10 text-xs font-mono text-slate-300">
                <Cpu className="w-3 h-3 text-crimson-400" /> Python & Java
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-900 border border-white/10 text-xs font-mono text-slate-300">
                <TerminalIcon className="w-3 h-3 text-crimson-400" /> IoT & Arduino
              </span>
            </div>

            {/* Action Buttons & Social Links: View Projects, Contact Me, and Socials */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              {/* View Projects Button */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-crimson-600 via-crimson-500 to-red-600 text-white font-semibold text-sm shadow-lg shadow-crimson-900/50 hover:shadow-crimson-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-dark-900/90 hover:bg-dark-800 border border-crimson-500/30 hover:border-crimson-400 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4 text-crimson-400" />
                <span>Contact Me</span>
              </a>

              {/* Social Channels in Hero */}
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-dark-900/70 hover:bg-dark-800 border border-white/10 hover:border-crimson-500/40 text-slate-300 hover:text-white transition-all shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-dark-900/70 hover:bg-dark-800 border border-white/10 hover:border-crimson-500/40 text-slate-300 hover:text-blue-400 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-dark-900/70 hover:bg-dark-800 border border-white/10 hover:border-crimson-500/40 text-slate-300 hover:text-rose-400 transition-all shadow-sm"
                  aria-label="Instagram Profile"
                  title="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 w-full">
              {personalInfo.metrics.map((metric, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-dark-900/40 border border-white/5">
                  <div className="font-display font-bold text-xl sm:text-2xl text-white flex items-baseline gap-0.5">
                    <span className="text-crimson-400">{metric.value}</span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: High-Tech Cyber Terminal & System Specs HUD */}
          <div className="lg:col-span-5 relative">
            
            {/* Glowing Backdrop Border */}
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-crimson-500/40 via-red-900/20 to-transparent shadow-2xl shadow-crimson-950/60">
              
              <div className="rounded-2xl bg-dark-900/95 backdrop-blur-xl p-5 sm:p-6 border border-white/10 space-y-4">
                
                {/* Window Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-crimson-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/70"></div>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <TerminalIcon className="w-3.5 h-3.5 text-crimson-400" />
                      harsh@ai-system:~$
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-crimson-400 bg-crimson-950/70 px-2 py-0.5 rounded border border-crimson-500/30">
                    LIVE TELEMETRY
                  </span>
                </div>

                {/* System Specs Readout */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-start justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">ENGINEER:</span>
                    <span className="text-white font-semibold">Harsh Sanjit</span>
                  </div>
                  <div className="flex items-start justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">DEGREE:</span>
                    <span className="text-crimson-300 text-right">B.Tech CSE (AI & ML)</span>
                  </div>
                  <div className="flex items-start justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">INSTITUTE:</span>
                    <span className="text-slate-200 text-right text-[11px]">Rungta Intl. Skills Univ.</span>
                  </div>
                  <div className="flex items-start justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">PRIMARY TOOLS:</span>
                    <span className="text-white">Python • Java • C • SQL</span>
                  </div>
                  <div className="flex items-start justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">VISION STACK:</span>
                    <span className="text-crimson-400 font-semibold">OpenCV • MediaPipe</span>
                  </div>
                  <div className="flex items-start justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">HARDWARE / IOT:</span>
                    <span className="text-emerald-400 font-semibold">Arduino • Sensors</span>
                  </div>
                  <div className="flex items-start justify-between py-1">
                    <span className="text-slate-400">STATUS:</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Ready for Next Challenge
                    </span>
                  </div>
                </div>

                {/* Flagship Projects Quick-Access Cards */}
                <div className="pt-2 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
                    ACTIVE PROJECT PIPELINE:
                  </div>

                  <a 
                    href="#projects"
                    className="block p-2.5 rounded-xl bg-dark-950/70 border border-crimson-500/20 hover:border-crimson-400/50 hover:bg-dark-950 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-crimson-500"></span>
                        <span className="text-xs font-semibold text-white group-hover:text-crimson-400 transition-colors">
                          AirCanvas Gesture HCI
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-crimson-400 bg-crimson-950/60 px-1.5 py-0.5 rounded">
                        MediaPipe
                      </span>
                    </div>
                  </a>

                  <a 
                    href="#projects"
                    className="block p-2.5 rounded-xl bg-dark-950/70 border border-white/10 hover:border-crimson-400/50 hover:bg-dark-950 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="text-xs font-semibold text-white group-hover:text-crimson-400 transition-colors">
                          Jarvis AI Assistant
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-dark-800 px-1.5 py-0.5 rounded">
                        Python Voice
                      </span>
                    </div>
                  </a>

                  <a 
                    href="#projects"
                    className="block p-2.5 rounded-xl bg-dark-950/70 border border-white/10 hover:border-crimson-400/50 hover:bg-dark-950 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span className="text-xs font-semibold text-white group-hover:text-crimson-400 transition-colors">
                          VaultGuard IoT Security
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-dark-800 px-1.5 py-0.5 rounded">
                        Arduino C++
                      </span>
                    </div>
                  </a>
                </div>

                {/* Bottom interactive hint */}
                <div className="pt-2 text-center">
                  <a 
                    href="#terminal"
                    className="text-[11px] font-mono text-slate-400 hover:text-crimson-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Click here to launch Interactive CLI Terminal</span>
                    <span>→</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Decorative Floating Badges */}
            <div className="hidden sm:flex items-center gap-2 absolute -bottom-5 -right-2 px-3 py-1.5 rounded-lg bg-dark-950 border border-crimson-500/40 text-xs font-mono text-slate-200 shadow-xl shadow-crimson-950">
              <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse"></span>
              <span>OpenCV & MediaPipe Ready</span>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 pb-4 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-crimson-400 transition-colors"
            aria-label="Scroll down to About"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">Explore Portfolio</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-crimson-500" />
          </a>
        </div>

      </div>
    </section>
  );
}
