import React from 'react';
import { 
  Eye, 
  Cpu, 
  GraduationCap, 
  Compass, 
  Code2, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      title: "Artificial Intelligence & Computer Vision",
      icon: Eye,
      description: "Developing intelligent perceptual systems that process live camera streams, detect facial movements, and recognize touchless hand gestures via OpenCV and MediaPipe.",
      tech: ["OpenCV", "MediaPipe", "Python", "Gesture HCI", "NumPy"]
    },
    {
      title: "Core Software & Algorithmic Foundations",
      icon: Code2,
      description: "Writing clean, structured software with a strong grasp of Object-Oriented principles in Java, memory fundamentals in C, and rapid automation in Python.",
      tech: ["Python", "Java", "C", "SQL", "OOP / DSA"]
    },
    {
      title: "IoT & Physical Computing",
      icon: Cpu,
      description: "Connecting code with the real world using Arduino microcontrollers, ultrasonic distance meters, PIR motion detectors, and hardware security actuators.",
      tech: ["Arduino", "Sensors", "Embedded C++", "VaultGuard", "Automation"]
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-dark-950/60 overflow-hidden">
      {/* Background Subtle Red Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-crimson-600/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-red-950/20 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-950/50 border border-crimson-500/30 text-xs font-mono text-crimson-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // WHO AM I</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            About <span className="gradient-text-red">Harsh Sanjit</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            An engineering undergraduate driven by the curiosity to build intelligent software and physical embedded systems that solve real problems.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story Narrative Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-crimson-950/60 border border-crimson-500/30 text-crimson-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">The Engineering Journey</h3>
                  <p className="text-xs font-mono text-slate-400">B.Tech CSE (AI & ML) @ Rungta International Skills University</p>
                </div>
              </div>

              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  I am a Computer Science Engineering student with an active specialization in <span className="text-white font-medium">Artificial Intelligence & Machine Learning</span> at Rungta International Skills University. My passion lies in building practical software that combines computer vision, voice automation, and embedded hardware.
                </p>
                <p>
                  Rather than just studying theory, I learn by crafting real systems: from building <span className="text-crimson-400 font-medium">Jarvis AI Assistant</span> in Python for voice task automation, to inventing touchless interaction via <span className="text-crimson-400 font-medium">AirCanvas</span> using MediaPipe, to assembling physical security sensors for the <span className="text-crimson-400 font-medium">VaultGuard System</span> on Arduino.
                </p>
                <p>
                  I write code primarily in <span className="text-white font-medium">Python, Java, and C</span>, with solid database management in <span className="text-white font-medium">SQL</span>, version control using <span className="text-white font-medium">Git & GitHub</span>, and deployment experience in Linux and containerized environments.
                </p>
              </div>
            </div>

            {/* Core Values / Mindset */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-crimson-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Applied Engineering</h4>
                  <p className="text-xs text-slate-400">Transforming conceptual math & algorithms into deployable code.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-crimson-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Hardware & Vision Intersect</h4>
                  <p className="text-xs text-slate-400">Bridging digital computer vision with real-world microcontrollers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Academic & Student Snapshot */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            <div className="glass-panel rounded-2xl p-6 border border-crimson-500/20 bg-dark-900/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-crimson-400 mb-3 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" />
                Academic Snapshot
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start justify-between pb-2 border-b border-white/5">
                  <span className="text-slate-400">Institution:</span>
                  <span className="text-white font-medium text-right">Rungta Intl. Skills Univ.</span>
                </li>
                <li className="flex items-start justify-between pb-2 border-b border-white/5">
                  <span className="text-slate-400">Degree:</span>
                  <span className="text-white font-medium text-right">B.Tech Computer Science</span>
                </li>
                <li className="flex items-start justify-between pb-2 border-b border-white/5">
                  <span className="text-slate-400">Specialization:</span>
                  <span className="text-crimson-300 font-semibold text-right">AI & Machine Learning</span>
                </li>
                <li className="flex items-start justify-between pb-2 border-b border-white/5">
                  <span className="text-slate-400">Target Roles:</span>
                  <span className="text-white font-medium text-right">AI/ML Engineer, SDE Intern</span>
                </li>
                <li className="flex items-start justify-between">
                  <span className="text-slate-400">Primary Languages:</span>
                  <span className="text-crimson-400 font-mono font-medium">Python, Java, C</span>
                </li>
              </ul>
            </div>

            {/* Quick Interactive Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-crimson-950/40 via-dark-900 to-dark-950 border border-crimson-500/30 flex items-center justify-between">
              <div>
                <p className="text-xs font-mono text-crimson-400 uppercase tracking-wider">Looking for talent?</p>
                <h4 className="text-sm font-bold text-white mt-0.5">Eager to contribute to forward-thinking teams.</h4>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg bg-crimson-600 hover:bg-crimson-500 text-white text-xs font-bold transition-all shadow-md shadow-crimson-950 shrink-0 ml-3"
              >
                Let&apos;s Talk
              </a>
            </div>

          </div>

        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-dark-900 border border-crimson-500/30 group-hover:border-crimson-400 flex items-center justify-center text-crimson-400 group-hover:text-white group-hover:bg-crimson-600 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-crimson-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {pillar.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-900 border border-white/10 text-slate-400 group-hover:text-crimson-300 group-hover:border-crimson-500/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
