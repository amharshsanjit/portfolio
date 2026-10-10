import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  CornerDownLeft, 
  Trash2, 
  Copy, 
  Check
} from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { 
      type: 'system', 
      text: 'HARSH OS v2.4 (x86_64-linux-gnu)\nType "help" to view available developer commands, or click any quick command chip below.' 
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const terminalBottomRef = useRef(null);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output = terminalCommands[trimmed] || `Command not found: "${trimmed}". Type "help" to see available commands.`;

    setHistory((prev) => [
      ...prev,
      { type: 'user', text: `harsh@guest:~$ ${cmd}` },
      { type: 'output', text: output }
    ]);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  const quickChips = ['help', 'about', 'skills', 'projects', 'education', 'contact', 'clear'];

  const copyTerminalOutput = () => {
    const textToCopy = history.map((h) => h.text).join('\n\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="relative py-24 bg-dark-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-crimson-600/5 blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-950/50 border border-crimson-500/30 text-xs font-mono text-crimson-400">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>06 // INTERACTIVE CLI</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Developer <span className="gradient-text-red">Terminal Playground</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl font-light">
            Interact with Harsh&apos;s system directly through a simulated Linux terminal environment.
          </p>

          {/* Quick Command Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            <span className="text-xs font-mono text-slate-400 mr-1">Try running:</span>
            {quickChips.map((chip) => (
              <button
                key={chip}
                onClick={() => handleCommand(chip)}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-900 border border-crimson-500/30 text-slate-300 hover:text-white hover:border-crimson-400 hover:bg-crimson-950/40 transition-all active:scale-95"
              >
                ${chip}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl border border-crimson-500/30 bg-dark-900/95 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-dark-950 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-crimson-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="text-slate-400 text-xs ml-2">bash - harshsanjit.dev</span>
            </div>

            <div className="flex items-center gap-3 text-slate-400 text-xs">
              <button
                onClick={copyTerminalOutput}
                className="hover:text-white transition-colors flex items-center gap-1"
                title="Copy terminal session"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={() => handleCommand('clear')}
                className="hover:text-crimson-400 transition-colors flex items-center gap-1"
                title="Clear screen"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 min-h-[300px] max-h-[460px] overflow-y-auto space-y-3.5 bg-dark-950/70">
            {history.map((entry, idx) => (
              <div key={idx} className="space-y-1">
                {entry.type === 'user' && (
                  <div className="text-crimson-400 font-semibold">{entry.text}</div>
                )}
                {entry.type === 'system' && (
                  <div className="text-slate-400 leading-relaxed whitespace-pre-wrap">{entry.text}</div>
                )}
                {entry.type === 'output' && (
                  <div className="text-slate-200 leading-relaxed whitespace-pre-wrap pl-2 border-l border-crimson-500/40 bg-dark-900/40 p-2 rounded">
                    {entry.text}
                  </div>
                )}
              </div>
            ))}
            <div ref={terminalBottomRef} />
          </div>

          {/* Terminal Input Bar */}
          <form 
            onSubmit={handleSubmit}
            className="flex items-center gap-2 p-3 bg-dark-950 border-t border-white/10"
          >
            <span className="text-crimson-500 font-bold pl-2">harsh@guest:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type command (e.g. 'projects' or 'about')..."
              className="flex-1 bg-transparent border-none text-slate-100 focus:outline-none text-xs sm:text-sm font-mono placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-crimson-600/80 hover:bg-crimson-600 text-white transition-colors"
              aria-label="Submit command"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
