import React, { useRef, useState, useEffect } from 'react';
import { 
  RotateCcw, 
  Eye, 
  Crosshair
} from 'lucide-react';

export default function AirCanvasDemo() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#ef4444'); // Crimson default
  const [lineWidth, setLineWidth] = useState(4);
  const [brushMode, setBrushMode] = useState('draw'); // 'draw' or 'erase'
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [strokesCount, setStrokesCount] = useState(0);

  const colors = [
    { name: 'Crimson Glow', hex: '#ef4444' },
    { name: 'Cyber Cyan', hex: '#06b6d4' },
    { name: 'Matrix Emerald', hex: '#10b981' },
    { name: 'Neon Amber', hex: '#f59e0b' },
    { name: 'Ghost White', hex: '#f8fafc' },
  ];

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Set high-DPI resolution
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);
    
    // Draw initial HUD graphics
    drawGrid(ctx, rect.width, rect.height);
  }, []);

  const drawGrid = (ctx, w, h) => {
    ctx.fillStyle = '#0a0a12';
    ctx.fillRect(0, 0, w, h);

    // Subtle Grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    const step = 30;
    for (let x = 0; x < w; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Default welcome watermark
    ctx.font = '13px monospace';
    ctx.fillStyle = 'rgba(239, 68, 68, 0.4)';
    ctx.fillText('// AIRCANVAS SIMULATOR: DRAG / TOUCH TO DRAW IN 3D SPACE', 20, 30);
  };

  const getCanvasCoords = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDrawing = (e) => {
    const { x, y } = getCanvasCoords(e);
    setIsDrawing(true);
    setCoords({ x: Math.round(x), y: Math.round(y) });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = brushMode === 'erase' ? '#0a0a12' : color;
    ctx.lineWidth = brushMode === 'erase' ? 24 : lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  const draw = (e) => {
    const { x, y } = getCanvasCoords(e);
    setCoords({ x: Math.round(x), y: Math.round(y) });

    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      setStrokesCount((c) => c + 1);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    drawGrid(ctx, rect.width, rect.height);
    setStrokesCount(0);
  };

  return (
    <div className="glass-panel rounded-2xl p-5 border border-crimson-500/30 bg-dark-900/90 shadow-2xl">
      
      {/* Demo Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-crimson-950/70 text-crimson-400 border border-crimson-500/40">
            <Eye className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-white">AirCanvas Interactive Playground</h4>
              <span className="text-[10px] font-mono uppercase bg-crimson-600/30 text-crimson-400 border border-crimson-500/40 px-2 py-0.5 rounded">
                Live Simulation
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Interactive preview of Harsh&apos;s MediaPipe touchless drawing pipeline
            </p>
          </div>
        </div>

        {/* Live Coordinate Telemetry */}
        <div className="hidden sm:flex items-center gap-3 font-mono text-[11px] text-slate-400 bg-dark-950 px-3 py-1.5 rounded-lg border border-white/5">
          <span className="flex items-center gap-1">
            <Crosshair className="w-3 h-3 text-crimson-400" />
            X: <span className="text-white">{coords.x}</span>
          </span>
          <span>
            Y: <span className="text-white">{coords.y}</span>
          </span>
          <span className="text-crimson-400">
            Strokes: <span className="text-white">{strokesCount}</span>
          </span>
        </div>
      </div>

      {/* Control Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 py-3">
        {/* Colors */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-mono text-slate-400 mr-1">Palette:</span>
          {colors.map((c) => (
            <button
              key={c.hex}
              onClick={() => {
                setColor(c.hex);
                setBrushMode('draw');
              }}
              className={`w-6 h-6 rounded-full transition-transform ${
                color === c.hex && brushMode === 'draw'
                  ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-dark-900'
                  : 'hover:scale-110 opacity-80 hover:opacity-100'
              }`}
              style={{ backgroundColor: c.hex }}
              title={c.name}
              aria-label={`Select ${c.name} color`}
            />
          ))}
        </div>

        {/* Brush Size / Eraser */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setBrushMode(brushMode === 'erase' ? 'draw' : 'erase')}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
              brushMode === 'erase'
                ? 'bg-crimson-600 text-white font-bold'
                : 'bg-dark-950 text-slate-300 border border-white/10 hover:text-white'
            }`}
          >
            {brushMode === 'erase' ? 'Eraser Mode (Active)' : 'Eraser'}
          </button>

          <button
            onClick={clearCanvas}
            className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-mono bg-dark-950 text-slate-300 border border-white/10 hover:border-crimson-500/40 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3 h-3 text-crimson-400" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Drawing Canvas Box */}
      <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-crimson-500/20 cursor-crosshair">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-full block"
        />

        {/* Simulated Hand Tracking Landmark Overlay Pill */}
        <div className="absolute bottom-2 left-2 pointer-events-none bg-dark-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[10px] font-mono text-slate-300 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Landmark Index #8 [Fingertip] Activated</span>
        </div>
      </div>

    </div>
  );
}
