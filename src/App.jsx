import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Zap, X, Activity, Cpu, Code2, Globe2, ShieldAlert, ChevronRight, Binary, Scan } from 'lucide-react';

// --- 🕸️ THE NEURAL WEB ENGINE (BEYOND NEXT LEVEL) ---
const NeuralWeb = ({ mouse }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];
    
    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = [];
      for(let i = 0; i < 120; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#010204';
      ctx.fillRect(0, 0, w, h);
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if(p.x < 0 || p.x > w) p.vx *= -1;
        if(p.y < 0 || p.y > h) p.vy *= -1;

        // Mouse Attraction
        const mDist = Math.sqrt((mouse.x - p.x)**2 + (mouse.y - p.y)**2);
        if(mDist < 200) {
          p.x += (mouse.x - p.x) * 0.02;
          p.y += (mouse.y - p.y) * 0.02;
        }

        ctx.fillStyle = 'rgba(34, 211, 238, 0.8)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Line Connections
        for(let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.sqrt((p.x - p2.x)**2 + (p.y - p2.y)**2);
          if(dist < 150) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${1 - dist/150})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(draw);
    };

    init(); draw();
    window.addEventListener('resize', init);
    return () => window.removeEventListener('resize', init);
  }, [mouse]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default function ArchitectVoid() {
  const [showVault, setShowVault] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [activeId, setActiveId] = useState(null);

  const projects = [
    { name: "INFINITE-WIKI", id: "01", tag: "//DATA_MINING", color: "#22d3ee", link: "https://codedbykiran.github.io/Infinite-Wki/" },
    { name: "STEP-COUNTER", id: "02", tag: "//BIO_RECON", color: "#f472b6", link: "https://codedbykiran.github.io/live-Step-Counter/" },
    { name: "FITNESS-LOG", id: "03", tag: "//VITAL_LOG", color: "#a78bfa", link: "https://codedbykiran.github.io/Fitness-Progress-Visualizer/" },
    { name: "PEXEL-PERFECT", id: "04", tag: "//OPTIC_SYNTH", color: "#fbbf24", link: "https://codedbykiran.github.io/PexelPerfect---Photo-Editor/" }
  ];

  return (
    <div 
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
      className="h-screen w-screen bg-[#010204] text-white overflow-hidden relative font-mono cursor-none"
    >
      <NeuralWeb mouse={mouse} />
      
      {/* BACKGROUND DATA STREAM */}
      <div className="absolute top-0 right-0 p-10 opacity-10 text-[8px] leading-tight select-none pointer-events-none">
        {Array(20).fill(0).map((_, i) => (
          <div key={i}>0x{Math.random().toString(16).slice(2, 10).toUpperCase()} - SYNC_OK</div>
        ))}
      </div>

      <div className="relative z-10 h-full w-full flex flex-col justify-between p-10">
        
        {/* HEADER */}
        <header className="flex justify-between items-start">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
               <Binary className="text-cyan-500" size={16} />
               <span className="text-[10px] tracking-[10px] font-black uppercase">Architect_Kiran_v9.0</span>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500 to-transparent opacity-30" />
          </div>
          <div className="flex gap-4 items-center border border-white/10 px-4 py-2 bg-black/50 backdrop-blur-md">
             <Scan size={14} className="animate-pulse text-red-500" />
             <span className="text-[9px] tracking-[4px] uppercase">Secure_Session_Active</span>
          </div>
        </header>

        {/* CENTER MONOLITH */}
        <main className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-start"
          >
            <h2 className="text-cyan-500 text-[10px] tracking-[20px] uppercase font-black mb-6 pl-2 border-l-2 border-cyan-500">
              Developer & Architect
            </h2>
            <h1 className="text-[12vw] font-black leading-none tracking-tighter uppercase mb-4 group relative">
              <span className="relative z-10">KIRAN</span>
              <span className="absolute inset-0 text-cyan-500 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity">KIRAN</span>
              <br />
              <span className="italic opacity-50">CHARHATE</span>
            </h1>
            
            <div className="flex gap-8 mt-12 items-center">
               <motion.button
                 onClick={() => setShowVault(true)}
                 whileHover={{ scale: 1.05 }}
                 className="bg-white text-black px-10 py-5 font-black text-[11px] tracking-[8px] uppercase flex items-center gap-4 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all"
               >
                 Open_Vault <Zap size={14} fill="black" />
               </motion.button>
               <span className="text-[9px] max-w-[200px] opacity-30 leading-relaxed italic uppercase">
                 Decrypting the boundary between reality and digital art.
               </span>
            </div>
          </motion.div>
        </main>

        {/* FOOTER STATS */}
        <footer className="flex justify-between items-end border-t border-white/5 pt-8 text-[8px] tracking-[6px] uppercase opacity-40">
           <div className="space-y-1">
              <p>Loc: 18.5204° N, 73.8567° E</p>
              <p>Status: All Systems Functional</p>
           </div>
           <div className="text-right">
              <p>Built with Neural Engines</p>
              <p>© 2025_CORE_ACCESS</p>
           </div>
        </footer>
      </div>

      {/* --- DIMENSIONAL OVERLAY (THE VAULT) --- */}
      <AnimatePresence>
        {showVault && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(30px)' }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] bg-black/90 flex flex-col p-10 md:p-24"
          >
            <div className="flex justify-between items-center mb-20">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-[2px] bg-cyan-500" />
                  <h2 className="text-5xl font-black italic tracking-tighter uppercase">Memory_Sectors</h2>
               </div>
               <X onClick={() => setShowVault(false)} className="cursor-pointer hover:rotate-90 transition-all text-white border border-white/20 p-5 rounded-full" size={60} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {projects.map((p, idx) => (
                 <motion.div 
                   key={idx}
                   onMouseEnter={() => setActiveId(p.id)}
                   onMouseLeave={() => setActiveId(null)}
                   onClick={() => window.open(p.link, '_blank')}
                   whileHover={{ y: -15, scale: 1.02 }}
                   className="relative h-[450px] border border-white/10 bg-white/[0.02] p-10 flex flex-col justify-between cursor-pointer group transition-all duration-500"
                 >
                    <div className="flex justify-between items-start overflow-hidden h-12">
                       <span className="text-6xl font-black text-white/5 group-hover:text-white/20 transition-all italic">{p.id}</span>
                       <Activity size={20} className={`transition-all duration-500 ${activeId === p.id ? 'opacity-100' : 'opacity-0'}`} style={{ color: p.color }} />
                    </div>
                    
                    <div>
                       <h3 className="text-3xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors uppercase italic leading-none">{p.name}</h3>
                       <p className="text-[10px] font-bold tracking-[4px] text-white/20 uppercase">{p.tag}</p>
                    </div>

                    <div className="h-1 w-full bg-white/5 overflow-hidden">
                       <motion.div 
                         initial={{ x: '-100%' }}
                         animate={activeId === p.id ? { x: '0%' } : { x: '-100%' }}
                         className="h-full w-full"
                         style={{ backgroundColor: p.color }}
                       />
                    </div>
                 </motion.div>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CUSTOM NEURAL CURSOR --- */}
      <motion.div 
        animate={{ x: mouse.x - 10, y: mouse.y - 10 }}
        className="fixed w-5 h-5 border border-cyan-500 z-[9999] pointer-events-none mix-blend-difference flex items-center justify-center"
      >
         <div className="w-1 h-1 bg-white rounded-full animate-ping" />
      </motion.div>
    </div>
  );
}