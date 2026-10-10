import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Instagram, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSecondaryEmail, setCopiedSecondaryEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopySecondaryEmail = () => {
    navigator.clipboard.writeText(personalInfo.secondaryEmail);
    setCopiedSecondaryEmail(true);
    setTimeout(() => setCopiedSecondaryEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate sending with glowing success state
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-dark-950 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-crimson-600/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-red-950/20 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-950/50 border border-crimson-500/30 text-xs font-mono text-crimson-400">
            <Mail className="w-3.5 h-3.5" />
            <span>07 // GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Let&apos;s Build <span className="gradient-text-red">Something Exceptional</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            Whether you have an internship opportunity, an AI/ML collaboration, or want to discuss computer vision pipelines — my inbox is open!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels & Social Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-crimson-500/30 bg-dark-900/90 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Direct Communication</h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Fastest response via email, LinkedIn, or GitHub issues. Open for internships, collaborative hackathons, and technical research.
                </p>
              </div>

              {/* Primary Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-dark-950 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-crimson-950/70 border border-crimson-500/30 text-crimson-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Primary Email</div>
                    <a
                      href={`mailto:${personalInfo.email}?subject=Collaboration%20Inquiry%20via%20Portfolio`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-crimson-400 transition-colors block truncate"
                      title={`Send email to ${personalInfo.email}`}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-dark-900 hover:bg-dark-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="Copy Primary Email"
                    aria-label="Copy Primary Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>

                  <a
                    href={`mailto:${personalInfo.email}?subject=Collaboration%20Inquiry%20via%20Portfolio`}
                    className="p-2 rounded-lg bg-crimson-600 hover:bg-crimson-500 text-white transition-colors"
                    title="Send Email Directly"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Secondary Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-dark-950 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-crimson-950/70 border border-crimson-500/30 text-crimson-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Secondary Email</div>
                    <a
                      href={`mailto:${personalInfo.secondaryEmail}?subject=Inquiry%20via%20Portfolio`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-crimson-400 transition-colors block truncate"
                      title={`Send email to ${personalInfo.secondaryEmail}`}
                    >
                      {personalInfo.secondaryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={handleCopySecondaryEmail}
                    className="p-2 rounded-lg bg-dark-900 hover:bg-dark-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="Copy Secondary Email"
                    aria-label="Copy Secondary Email"
                  >
                    {copiedSecondaryEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>

                  <a
                    href={`mailto:${personalInfo.secondaryEmail}?subject=Inquiry%20via%20Portfolio`}
                    className="p-2 rounded-lg bg-crimson-600 hover:bg-crimson-500 text-white transition-colors"
                    title="Send Email Directly"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Status / Availability Pill */}
              <div className="p-4 rounded-xl bg-dark-950/50 border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>OPPORTUNITY STATUS: READY</span>
                </div>
                <p className="text-xs text-slate-300 font-light">
                  Currently seeking AI/ML engineering internships, software developer roles, and embedded systems challenges.
                </p>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Verified Social Channels
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {/* GitHub */}
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-dark-950 border border-white/5 hover:border-crimson-500/30 hover:bg-dark-950/80 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-dark-900 text-slate-300 group-hover:text-white">
                        <Github className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-crimson-400 transition-colors">
                          GitHub
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          github.com/amharshsanjit
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-dark-950 border border-white/5 hover:border-crimson-500/30 hover:bg-dark-950/80 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-dark-900 text-slate-300 group-hover:text-white">
                        <Linkedin className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-crimson-400 transition-colors">
                          LinkedIn
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          linkedin.com/in/harshsanjit
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </a>

                  {/* Instagram */}
                  <a
                    href={personalInfo.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-dark-950 border border-white/5 hover:border-crimson-500/30 hover:bg-dark-950/80 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-dark-900 text-slate-300 group-hover:text-white">
                        <Instagram className="w-4 h-4 text-rose-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-crimson-400 transition-colors">
                          Instagram
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          @harsh_sanjit.cse
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 bg-dark-900/90 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-crimson-950/80 border border-crimson-500 flex items-center justify-center text-crimson-400 box-glow-red animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Transmission Acknowledged!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md font-light leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.name}</span>. Your message has been recorded. You can also send a direct email with one click below:
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hello Harsh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`}
                      className="px-5 py-2.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white text-xs font-bold transition-all shadow-lg shadow-crimson-950"
                    >
                      Open in Mail Client
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-xs text-slate-300 hover:text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-crimson-400" />
                      <h3 className="text-base font-bold text-white">Send Harsh a Direct Message</h3>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      ENCRYPTED TRANSMISSION
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Your Name <span className="text-crimson-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-crimson-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Your Email <span className="text-crimson-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-crimson-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI/ML Internship Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-crimson-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Message <span className="text-crimson-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message, project idea, or invitation..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-crimson-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-crimson-600 via-crimson-500 to-red-600 hover:from-crimson-500 hover:to-crimson-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-crimson-900/50 transition-all active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Harsh</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
