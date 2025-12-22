import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ExternalLink, Cpu, Binary, ShieldAlert, FolderOpen, FileCode, Lock, Database, Zap, Activity, BarChart3, Fingerprint, Globe, Code2 } from 'lucide-react';

// --- HEX-DECRYPT COMPONENT (FOR NAME) ---
const DecryptText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "0101X7F#$";
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(text.split("").map((letter, index) => {
        if (index < iteration) return text[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1/3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);
  return <span className="font-bold">{displayText}</span>;
};

// --- TYPEWRITER ENGINE ---
const Typewriter = ({ text, delay = 20 }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);
  return (
    <span>
      {currentText}
      <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-4 bg-cyan-400 ml-1 align-middle shadow-[0_0_8px_#22d3ee]" />
    </span>
  );
};

export default function UltimateHybrid() {
  const [isBooted, setIsBooted] = useState(false);
  const [bootLogs, setBootLogs] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const logs = [
      "INITIALIZING_V8_KERNEL_LOADER...",
      "CHECKING_SYSTEM_INTEGRITY... OK",
      "MOUNTING_LOCAL_FILESYSTEM_SECTOR_07",
      "ALLOCATING_MEMORY_0x7F22A",
      "BYPASSING_PUNE_RELAY_0x7",
      "ESTABLISHING_SECURE_HANDSHAKE",
      "LOADING_CORE_MODULES: [REACT, FRAMER]",
      "DECRYPTING_BIO_METRICS...",
      "OPTIMIZING_V8_ENGINE_PERFORMANCE",
      "SYNCING_NEURAL_INTERFACE_ASSETS",
      "STARTING_TERMINAL_INTERFACE...",
      "WELCOME_BACK_KIRAN_CHARHATE",
      "GOD_MODE_ACTIVE"
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < logs.length) {
        setBootLogs(prev => [...prev, logs[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsBooted(true), 800);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 15, y: (e.clientY / window.innerHeight - 0.5) * 15 });
  };

  const projects = [
    { name: "INFINITE-WIKI", link: "https://codedbykiran.github.io/Infinite-Wki/", tech: "V8_ENGINE" },
    { name: "STEP-COUNTER", link: "https://codedbykiran.github.io/live-Step-Counter/", tech: "NEURAL_SYNC" },
    { name: "FITNESS-LOG", link: "https://codedbykiran.github.io/Fitness-Progress-Visualizer/", tech: "DATA_VAULT" },
    { name: "PEXEL-PERFECT", link: "https://codedbykiran.github.io/PexelPerfect---Photo-Editor/", tech: "VISION_CORE" }
  ];

  return (
    <div onMouseMove={handleMouseMove} className="h-screen w-screen bg-[#020305] text-slate-400 overflow-hidden relative font-mono cursor-crosshair">
      
      <motion.div style={{ x: mousePos.x, y: mousePos.y }} className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #22d3ee 1px, transparent 0)`, backgroundSize: '45px 45px' }} />
      </motion.div>

      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;700&display=swap');
          * { font-family: 'Source Code Pro', monospace !important; }
          .cyber-panel { background: rgba(5, 7, 10, 0.9); border: 1px solid rgba(34, 211, 238, 0.1); border-radius: 4px; backdrop-filter: blur(10px); }
          .glow-cyan { text-shadow: 0 0 10px rgba(34, 211, 238, 0.5); }
        `}
      </style>

      <AnimatePresence>
        {!isBooted ? (
          <motion.div exit={{ opacity: 0, scale: 1.05 }} className="absolute inset-0 z-[100] bg-black p-10 flex flex-col justify-start">
             <div className="mb-6 flex items-center gap-4">
                <div className="h-[2px] w-10 bg-red-600 animate-pulse" />
                <span className="text-red-600 font-bold text-[10px] tracking-[6px] uppercase">Unauthorized_Access_Log</span>
             </div>
             <div className="space-y-1">
               {bootLogs.map((log, idx) => (
                  <div key={idx} className="text-[10px] md:text-[11px] tracking-[2px] uppercase flex gap-4 opacity-60 font-bold">
                    <span className="text-cyan-500 opacity-40">[{new Date().getMilliseconds()}ms]</span>
                    <span className={idx === bootLogs.length - 1 ? "text-white opacity-100 glow-cyan" : ""}>{log}</span>
                  </div>
               ))}
             </div>
             <div className="w-2 h-4 bg-cyan-400 mt-6 animate-pulse" />
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full p-4 flex flex-col gap-4 relative z-10">
            
            <header className="h-14 cyber-panel flex items-center justify-between px-10 border-t-2 border-cyan-500/20">
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-[8px] text-white uppercase">Neural_Uplink_Established</span>
                  <span className="text-[8px] text-cyan-500/50 uppercase tracking-[2px]">Core_V8_Stable</span>
                </div>
              </div>
              <Zap size={18} className="text-cyan-400 animate-pulse" />
            </header>

            <div className="flex-1 flex gap-4 overflow-hidden">
              <aside className="w-64 hidden xl:flex flex-col gap-4">
                <div className="cyber-panel flex-1 p-6 flex flex-col justify-between">
                  <div className="space-y-8">
                    <span className="text-[8px] opacity-30 tracking-[4px] block font-bold uppercase italic">Data_Flow_Matrix</span>
                    <div className="relative h-44 w-full flex items-end gap-1 px-1">
                      {[...Array(14)].map((_, i) => (
                        <motion.div 
                          key={i}
                          animate={{ height: [30, 90, 50, 100, 30].map(h => `${h}%`) }}
                          transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                          className="flex-1 bg-cyan-500/10 border-t border-cyan-500/40 shadow-[0_0_5px_rgba(34,211,238,0.2)]"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/5 flex flex-col items-center gap-2">
                    <Fingerprint size={28} className="text-cyan-500/30" />
                    <span className="text-[7px] opacity-20 tracking-[4px] uppercase font-bold">User_Authorized</span>
                  </div>
                </div>
              </aside>

              <main className="flex-1 flex flex-col gap-4 overflow-hidden">
                <section className="cyber-panel p-10 md:p-14 relative overflow-hidden group border-r-4 border-cyan-500/30">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.02] rotate-12"><Globe size={220} /></div>
                  <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <div className="flex items-center gap-3 mb-6 opacity-30">
                       <Activity size={14} className="text-cyan-500" />
                       <span className="text-[9px] tracking-[6px] font-bold uppercase italic">Active_V8_Session</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white tracking-[12px] uppercase mb-10 glow-cyan">
                       <DecryptText text="KIRAN CHARHATE" />
                    </h1>

                    {/* --- DESCRIPTION WITH LIVE CODE BLOCK --- */}
                    <div className="max-w-4xl bg-black/50 p-6 border-l-2 border-cyan-400/50 rounded-r-lg font-mono relative">
                      <div className="absolute top-2 right-4 text-[8px] opacity-20 flex gap-2">
                        <span className="text-cyan-500">JS_ENGINE</span>
                        <span>v8.4.2</span>
                      </div>
                      <div className="text-[13px] md:text-[14px] text-slate-300 leading-relaxed tracking-[1px]">
                         <span className="text-blue-400">class</span> <span className="text-yellow-400">Architect</span> {'{'} <br/>
                         &nbsp;&nbsp;<span className="text-purple-400 italic">constructor</span>() {'{'} <br/>
                         &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400 italic">this</span>.<span className="text-cyan-400">mission</span> = <span className="text-green-300">"</span>
                         <Typewriter text="engineering high-performance digital ecosystems with core expertise in v8-engine logic. bridging the void between raw architectural data and seamless cinematic experiences." />
                         <span className="text-green-300">"</span>;<br/>
                         &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400 italic">this</span>.<span className="text-cyan-400">status</span> = <span className="text-red-500">"REDACTED"</span>;<br/>
                         &nbsp;&nbsp;{'}'} <br/>
                         {'}'}
                      </div>
                    </div>
                  </motion.div>
                </section>

                <section className="flex-1 cyber-panel p-8 overflow-y-auto scrollbar-hide">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {projects.map((p, idx) => (
                        <motion.div 
                          key={idx}
                          onClick={() => window.open(p.link, '_blank')}
                          whileHover={{ scale: 1.02, x: 5, backgroundColor: 'rgba(34,211,238,0.05)' }}
                          className="group p-6 border border-white/5 bg-white/[0.01] cursor-pointer flex justify-between items-center relative transition-all rounded"
                        >
                          <div className="flex flex-col gap-1 z-10">
                             <span className="text-[8px] text-cyan-500/60 font-bold tracking-[4px]">MODULE_0{idx+1}</span>
                             <span className="text-[18px] text-white font-bold group-hover:text-cyan-400 transition-colors uppercase tracking-[1.5px]">{p.name}</span>
                             <span className="text-[7px] opacity-20 font-bold uppercase mt-2 tracking-[2px]">{p.tech}</span>
                          </div>
                          <ExternalLink size={18} className="text-cyan-500 opacity-20 group-hover:opacity-100 transition-all" />
                        </motion.div>
                      ))}
                   </div>
                </section>
              </main>
            </div>

            <footer className="h-10 cyber-panel flex items-center justify-between px-10 border-b border-cyan-500/20">
               <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                  <span className="text-[9px] font-bold tracking-[8px] text-cyan-400/60 uppercase">System_Active_v8</span>
               </div>
               <div className="text-[9px] opacity-30 flex gap-6 font-bold tracking-[2px]">
                 <span>{new Date().toLocaleTimeString()}</span>
                 <span className="hidden sm:block">MH_PUNE_NODE</span>
               </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}