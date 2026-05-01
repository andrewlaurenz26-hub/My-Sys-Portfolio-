import { motion } from 'motion/react';
import { Github, ExternalLink, Shield, Cpu, Lock, Globe } from 'lucide-react';

const projects = [
  {
    title: "VULN-SCANNER PRO",
    description: "Multi-threaded network scanner with integrated CVE lookup and automated risk scoring using machine learning models.",
    impact: "Impact: Secured 20k+ endpoints across 3 major networks.",
    tech: ["Python", "Nmap", "TensorFlow", "Scapy"],
    stats: "98.4% Accuracy",
    icon: Shield,
    link: "https://github.com/ZinMyoAung17",
    color: "from-blue-500/20 to-blue-600/5",
    accent: "bg-blue-500"
  },
  {
    title: "SECURE-AUTH MODULE",
    description: "OAuth2 / OIDC middleware implementing hardware-based MFA and anomaly detection for session hijacking prevention.",
    impact: "Impact: Zero unauthorized logins recorded post-deployment.",
    tech: ["Rust", "WASM", "WebAuthn", "Redis"],
    stats: "mfa_ready_v3",
    icon: Lock,
    link: "https://github.com/ZinMyoAung17",
    color: "from-purple-500/20 to-purple-600/5",
    accent: "bg-purple-500"
  },
  {
    title: "SENTINEL IDS",
    description: "Deep packet inspection engine capable of identifying 0-day signatures through behavioral analysis and pattern matching.",
    impact: "Impact: Identified 12 zero-day threats in first month of prod.",
    tech: ["Go", "eBPF", "Kubernetes", "Prometheus"],
    stats: "latency < 5ms",
    icon: Cpu,
    link: "https://github.com/ZinMyoAung17",
    color: "from-emerald-500/20 to-emerald-600/5",
    accent: "bg-emerald-500"
  },
  {
    title: "GLOBAL THREAT MAP",
    description: "Real-time visualization of global honey-pot activity and DDoS vectors using D3.js and distributed agent network.",
    impact: "Impact: Visualized 1M+ attack vectors in live production.",
    tech: ["React", "D3.js", "WebSockets", "Node.js"],
    stats: "live_sync_v2",
    icon: Globe,
    link: "https://github.com/ZinMyoAung17",
    color: "from-cyan-500/20 to-cyan-600/5",
    accent: "bg-cyan-500"
  }
];

export const ProjectGrid = () => {
  return (
    <section id="projects" className="py-32 px-4 bg-black/60 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
              DEPLOYED <span className="text-rose-500 italic underline decoration-rose-500/20 underline-offset-8 decoration-4">PROJECTS</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[10px] max-w-xl border-l border-rose-500/30 pl-4 py-1 uppercase tracking-[0.3em] font-bold">
              Production-grade security modules and defensive infrastructure. 
              All systems verified against ISO/IEC 27001 standards.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-zinc-700 font-mono text-[10px] tracking-widest font-black">
             <span>ARCHIVE_ACCESSIBLE</span>
             <ExternalLink size={14} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 perspective-1000">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, rotateY: i % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              whileHover={{ 
                rotateX: -10, 
                rotateY: i % 2 === 0 ? 10 : -10,
                translateZ: 80,
                scale: 1.05,
                boxShadow: "0 40px 80px -20px rgba(244, 63, 94, 0.4)"
              }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                rotateX: { type: "spring", stiffness: 150 },
                rotateY: { type: "spring", stiffness: 150 }
              }}
              viewport={{ once: true }}
              className={`group cyber-border bg-glass overflow-hidden flex flex-col h-full shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-rose-500/10 transition-all duration-500 border-white/5 hover:border-rose-500/30 preserve-3d`}
            >
              <div className={`p-8 md:p-12 flex-grow flex flex-col preserve-3d`}>
                <div className="flex items-start justify-between mb-10" style={{ transform: 'translateZ(100px)' }}>
                  <div className={`p-5 bg-black/60 rounded border border-white/5 text-white group-hover:border-rose-500/30 group-hover:bg-rose-500/10 group-hover:text-rose-500 transition-all duration-500 shadow-xl`}>
                    <project.icon size={32} className="group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="flex flex-col items-end gap-1">
                     <div className="flex gap-6">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-rose-500 transition-all hover:scale-110">
                        <Github size={22} />
                        </a>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-rose-500 transition-all hover:scale-110">
                        <ExternalLink size={22} />
                        </a>
                     </div>
                     <span className="text-[10px] font-mono text-rose-500/40 mt-6 uppercase tracking-[0.3em] font-bold">{project.stats}</span>
                  </div>
                </div>

                <div style={{ transform: 'translateZ(70px)' }}>
                  <h3 className="text-3xl md:text-4xl font-display font-black mb-6 tracking-tighter group-hover:text-rose-400 transition-colors uppercase leading-none text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm md:text-base mb-10 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto space-y-8" style={{ transform: 'translateZ(50px)' }}>
                  <div className="bg-rose-500/5 border border-rose-500/10 p-4 rounded-sm shadow-inner">
                    <div className="text-[10px] font-mono text-rose-500 uppercase flex items-center gap-3 font-bold tracking-widest">
                        <Shield size={14} className="min-w-[14px]" />
                        <span className="truncate">{project.impact}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-[10px] font-mono uppercase tracking-widest px-4 py-1.5 bg-black/60 border border-white/5 rounded text-zinc-500 group-hover:border-rose-500/30 group-hover:text-rose-500 transition-all duration-500 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-1.5 w-full bg-white/5 group-hover:bg-rose-500 transition-all duration-700 shadow-[0_0_15px_rgba(244,63,94,0)] group-hover:shadow-[0_0_15px_rgba(244,63,94,0.5)]" style={{ transform: 'translateZ(2px)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
