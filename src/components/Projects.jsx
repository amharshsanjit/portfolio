import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ArrowUpRight
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import AirCanvasDemo from './AirCanvasDemo';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'AI & Automation', 'Computer Vision', 'IoT & Embedded Systems'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || (activeFilter === 'Computer Vision' && (p.category.includes('Vision') || p.category.includes('Interaction'))));

  return (
    <section id="projects" className="relative py-24 bg-dark-950/80 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-crimson-600/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-red-950/25 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-950/50 border border-crimson-500/30 text-xs font-mono text-crimson-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // PORTFOLIO SHOWCASE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Featured <span className="gradient-text-red">Engineering Projects</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            Real-world systems built with Python, OpenCV, MediaPipe, Java, and Arduino microcontrollers.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-crimson-600 text-white shadow-lg shadow-crimson-900/40 border border-crimson-400'
                    : 'bg-dark-900/70 text-slate-400 border border-white/5 hover:border-crimson-500/30 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson-500 to-transparent opacity-40 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Header Tag & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono uppercase bg-crimson-950/80 text-crimson-400 border border-crimson-500/30 px-2.5 py-1 rounded-md font-semibold">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white group-hover:text-crimson-300 transition-colors font-display">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-crimson-400/90 font-mono mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {project.shortDesc}
                </p>

                {/* Mini Features List */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-crimson-500 font-bold">›</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-950 border border-white/10 text-slate-300 group-hover:border-crimson-500/30 group-hover:text-crimson-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-crimson-400 hover:text-crimson-300 py-2 transition-colors group-hover:translate-x-0.5"
                >
                  <span>Inspect Architecture & Specs</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-dark-950 border border-white/10 hover:border-crimson-500/40 text-slate-300 hover:text-white transition-all"
                    aria-label={`View ${project.title} on GitHub`}
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive In-Browser Feature: AirCanvas Live Sandbox */}
        <div className="mt-8">
          <AirCanvasDemo />
        </div>

      </div>

      {/* Project Specs Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
