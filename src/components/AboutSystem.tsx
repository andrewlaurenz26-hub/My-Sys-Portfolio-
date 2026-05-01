import { motion } from 'motion/react';
import { User, Shield, Terminal, Zap, Cpu, Lock, Globe, Server } from 'lucide-react';

export const AboutSystem = () => {
  return (
    <section id="about" className="py-32 px-4 overflow-hidden relative bg-black">
      {/* Decorative large text in background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[25vw] font-black uppercase leading-none text-rose-500">SYSTEM_OP</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -50, rotateY: 30 }}
           whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="lg:col-span-5 relative perspective-1000"
        >
          <div className="aspect-square cyber-border p-6 bg-black/60 overflow-hidden group max-w-md mx-auto lg:max-w-none shadow-[0_0_100px_rgba(0,0,0,0.8)] preserve-3d hover:rotate-y-12 transition-transform duration-700">
            <div className="w-full h-full bg-rose-500/5 flex items-center justify-center relative border border-rose-500/10 preserve-3d">
               <Shield size={200} className="text-rose-500/10 group-hover:text-rose-500/20 group-hover:scale-110 transition-all duration-1000 drop-shadow-[0_0_30px_rgba(244,63,94,0.2)]" />
               
               <div className="absolute inset-0 flex flex-col justify-between p-6 preserve-3d">
                  <div className="flex justify-between items-start" style={{ transform: 'translateZ(100px)' }}>
                     <div className="font-mono text-[10px] text-rose-500/50 font-bold bg-black/60 px-3 py-1 border border-rose-500/20 shadow-lg">SECURE_KERNEL_LTS</div>
                     <div className="w-10 h-10 border-t-2 border-r-2 border-rose-500/40" />
                  </div>
                  <div className="flex justify-center" style={{ transform: 'translateZ(150px)' }}>
                     <motion.div 
                        animate={{ 
                           y: [0, -15, 0],
                           rotateZ: [0, 5, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="p-10 bg-rose-500/10 rounded-full border border-rose-500/30 shadow-[0_0_40px_rgba(244,63,94,0.3)] backdrop-blur-sm"
                     >
                        <Lock size={64} className="text-rose-500 drop-shadow-[0_0_10px_#f43f5e]" />
                     </motion.div>
                  </div>
                  <div className="flex justify-between items-end" style={{ transform: 'translateZ(80px)' }}>
                     <div className="w-10 h-10 border-b-2 border-l-2 border-rose-500/40" />
                     <div className="font-mono text-[10px] text-rose-500/50 italic font-bold bg-black/60 px-3 py-1 border border-rose-500/20">DNA_VERIFIED_ANDREW</div>
                  </div>
               </div>
            </div>
          </div>

          <motion.div 
            style={{ transform: 'translateZ(200px)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-8 -right-8 p-10 bg-zinc-950/80 cyber-border backdrop-blur-3xl shadow-2xl hidden md:block border-rose-500/30"
          >
             <div className="space-y-5">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
                   <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-black">Active Sentry Status</span>
                </div>
                <div className="text-5xl font-black text-rose-500 leading-none glow-text">99.8%</div>
                <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest font-bold leading-relaxed max-w-[160px]">
                   Autonomous defense enabled. Vector mapping active.
                </p>
             </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-7 space-y-12"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-2 group cursor-default">
              <User className="text-rose-500 group-hover:scale-110 transition-transform" size={16} />
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.4em] font-black">OPERATOR_PROFILE_V2.0</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
               OPTIMIZING THE <span className="text-rose-500 italic underline decoration-rose-500/20 decoration-8 underline-offset-8">STACK</span>
            </h2>
            
            <div className="space-y-8 text-zinc-400 leading-relaxed font-light text-lg md:text-xl max-w-2xl">
              <p>
                I am <span className="text-white font-black underline decoration-rose-500/50 underline-offset-4 decoration-2">ANDREW</span>, a passionate technologist focused on driving organizational growth through IT optimization. I bridge the gap between complex infrastructure and user-centric web applications.
              </p>
              <p>
                With a background ranging from IT Infrastructure Executive to Front-End development, I bring a holistic view to every project, ensuring performance, security, and scalability are baked into the foundation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "4+", label: "Field Years", sub: "TOTAL_EXP" },
              { val: "10+", label: "Certs Earned", sub: "TECHNICAL_VERIFIED" },
              { val: "50+", label: "Projects Built", sub: "DEPLOYED_APPS" },
              { val: "100%", label: "Uptime Focus", sub: "SYSTEM_RELIABILITY" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2 group">
                <div className="text-3xl md:text-4xl font-display font-black text-white group-hover:text-rose-500 transition-colors leading-none">{stat.val}</div>
                <div className="text-[10px] font-mono uppercase tracking-[0.1em] text-zinc-500 font-bold">{stat.label}</div>
                <div className="w-8 h-[1px] bg-rose-500/50 group-hover:w-full transition-all duration-500" />
                <div className="text-[8px] font-mono text-zinc-700 uppercase tracking-tighter font-bold">{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
             {[
               { icon: Globe, label: "GLOBAL_OPS" },
               { icon: Server, label: "METAL_SEC" },
               { icon: Zap, label: "RAPID_MITIGATION" }
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-3 px-6 py-3 bg-zinc-900/40 border border-white/5 rounded hover:border-rose-500/20 transition-all cursor-default group">
                  <item.icon className="text-rose-500/40 group-hover:text-rose-500 transition-colors" size={16} />
                  <span className="font-mono text-[10px] text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase tracking-widest font-bold">{item.label}</span>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
