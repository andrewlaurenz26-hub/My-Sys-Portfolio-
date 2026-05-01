import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Shield, Cpu, Activity, Database, Lock, Terminal as TerminalIcon } from 'lucide-react';

const lines = [
  { text: "INITIALIZING_SYSTEM_FOR_ANDREW", delay: 0 },
  { text: "ROLE: FULL_STACK_DEV // IT_INFRA_EXECUTIVE", delay: 1000 },
  { text: "LOCATION: THAILAND // STATUS: READY", delay: 2000 },
];

export const HeroTerminal = () => {
  const [text, setText] = useState('');
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => setVisibleLines(v => v + 1), 1200);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-20 px-4 relative overflow-hidden bg-cyber-bg">
      <div className="scanline" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Title */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-rose-500/5 border border-rose-500/20 rounded-sm"
            >
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_#f43f5e]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-rose-500 font-bold">
                Operational Status: Full Spectrum Engagement
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-[18vw] sm:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
                ANDREW<br />
                <span className="text-rose-500 italic glow-text">PORTFOLIO</span>
              </h1>
              <p className="max-w-2xl text-zinc-500 text-base md:text-xl font-light leading-relaxed mx-auto lg:mx-0 px-4 md:px-0">
                Extensive experience in overseeing complex IT projects and implementing innovative web solutions. 
                Specialized in IT Infrastructure management, Full Stack development, and emerging AI technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4"
            >
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="cyber-border-btn px-12 py-5 bg-transparent text-white font-mono text-xs uppercase tracking-[0.2em] group"
              >
                <span className="relative z-10 flex items-center gap-2 font-bold">
                  <Shield size={16} />
                  Initiate_Protocol
                </span>
              </button>
              <button 
                onClick={() => document.querySelector('#expertise')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 border border-white/10 hover:bg-white/5 text-zinc-400 hover:text-white transition-all font-mono text-xs uppercase tracking-[0.2em] flex items-center gap-2 font-bold"
              >
                <TerminalIcon size={14} />
                View_Capabilities
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visual Terminal */}
          <div className="lg:col-span-12 xl:col-span-5 hidden lg:block perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: -10 }}
              transition={{ delay: 0.4, duration: 1.5 }}
              whileHover={{ rotateY: 0, scale: 1.02 }}
              className="relative preserve-3d"
            >
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-rose-500/30" style={{ transform: 'translateZ(50px)' }} />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-rose-500/30" style={{ transform: 'translateZ(50px)' }} />

              <div className="bg-black/80 backdrop-blur-3xl border border-rose-500/20 rounded-sm shadow-[0_0_80px_rgba(244,63,94,0.15)] overflow-hidden preserve-3d">
                <div className="bg-white/5 px-6 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-500/50" />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest font-bold">root@andrew_sys:~ /main_stack</span>
                </div>
                
                <div className="p-10 font-mono text-xs space-y-6" style={{ transform: 'translateZ(20px)' }}>
                  <div className="space-y-4">
                    {lines.slice(0, visibleLines).map((line, i) => (
                      <div key={i} className="flex gap-3 items-start animate-in fade-in slide-in-from-left-2 duration-300">
                        <span className="text-rose-500 text-[10px] bg-rose-500/10 px-1 font-bold">#</span>
                        <span className={i === lines.length - 1 ? 'text-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'text-zinc-500'}>{line.text}</span>
                      </div>
                    ))}
                    {visibleLines < lines.length && (
                      <div className="animate-pulse w-2 h-4 bg-rose-500 ml-6" />
                    )}
                  </div>

                  <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/5">
                    <div className="space-y-2">
                       <div className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">System_Load</div>
                       <div className="flex items-end gap-2 text-rose-400 font-black text-2xl tracking-tighter">
                          2.4<span className="text-[10px] mb-1">GHZ</span>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <div className="text-[9px] uppercase tracking-widest text-zinc-600 font-bold">Latency</div>
                       <div className="flex items-end gap-2 text-emerald-500 font-black text-2xl tracking-tighter">
                          12<span className="text-[10px] mb-1">MS</span>
                       </div>
                    </div>
                  </div>

                  <div className="pt-6">
                     <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">Core Sync</span>
                        <span className="text-[9px] text-rose-500">94%</span>
                     </div>
                     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '94%' }}
                          transition={{ duration: 1.5, delay: 2.5 }}
                          className="h-full bg-gradient-to-r from-rose-600 to-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.3)]"
                        />
                     </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 30, translateZ: 100 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -10, 0],
                  translateZ: 100
                }}
                transition={{ 
                  opacity: { delay: 0.6 },
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                }}
                className="absolute -bottom-12 -left-12 p-8 bg-glass cyber-border rounded-sm backdrop-blur-3xl shadow-2xl preserve-3d"
              >
                 <div className="flex items-center gap-6" style={{ transform: 'translateZ(40px)' }}>
                    <div className="text-right">
                       <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] font-bold mb-1">Authorization</div>
                       <div className="text-3xl font-black text-rose-500 glow-text leading-none font-display uppercase italic">Level-7</div>
                    </div>
                    <div className="w-12 h-12 bg-rose-600 rounded-sm flex items-center justify-center shadow-lg shadow-rose-600/30">
                       <Shield size={20} className="text-black" />
                    </div>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
