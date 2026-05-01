import { motion } from 'motion/react';
import { Shield, Brain, Zap, Fingerprint, Map, Globe } from 'lucide-react';

export const IntelligencePanel = () => {
  return (
    <section id="intelligence" className="py-24 px-4 bg-black/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic">
            TACTICAL <span className="text-sky-500">INTELLIGENCE</span>
          </h2>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">Neural Scanning & Threat Vector Analysis</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Intelligence Card 1 */}
          <div className="cyber-border p-8 bg-glass group overflow-hidden relative">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Brain size={120} />
             </div>
             <div className="flex items-center gap-4 mb-8 text-white">
                <div className="p-3 bg-sky-500/10 rounded border border-sky-500/30">
                    <Fingerprint className="text-sky-500" size={24} />
                </div>
                <h3 className="text-xl font-display font-black uppercase">Neural Defense</h3>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed mb-10 relative z-10">
                Implementation of AI-driven anomaly detection systems that reduce false positives in high-traffic enterprise environments by 40%.
             </p>
             <div className="flex gap-4 items-end justify-between font-mono">
                <div className="text-xs text-slate-600">CONFIDENCE: <span className="text-sky-500">98%</span></div>
                <div className="text-[10px] text-slate-700">LVL_04 SECURE</div>
             </div>
          </div>

          {/* Intelligence Card 2 */}
          <div className="cyber-border p-8 bg-glass group overflow-hidden relative text-white">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Map size={120} />
             </div>
             <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-sky-500/10 rounded border border-sky-500/30">
                    <Globe className="text-sky-500" size={24} />
                </div>
                <h3 className="text-xl font-display font-black uppercase">Geographic Auditing</h3>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed mb-10 relative z-10">
                Managed threat intelligence feeds mapping adversary infrastructure across 12 distinct geographic clusters for early warning detection.
             </p>
             <div className="flex gap-4 items-end justify-between font-mono">
                <div className="text-xs text-slate-600">ACTIVE NODES: <span className="text-sky-500">1.4K+</span></div>
                <div className="text-[10px] text-slate-700">DISTRIBUTED_NET</div>
             </div>
          </div>

          {/* Intelligence Card 3 */}
          <div className="cyber-border p-8 bg-glass group overflow-hidden relative text-white">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={120} />
             </div>
             <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-sky-500/10 rounded border border-sky-500/30">
                    <Shield className="text-sky-500" size={24} />
                </div>
                <h3 className="text-xl font-display font-black uppercase">Rapid Hardening</h3>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed mb-10 relative z-10">
                Automated patch management and configuration drift remediation scripts that ensure continuous compliance with NIST/SOC2 frameworks.
             </p>
             <div className="flex gap-4 items-end justify-between font-mono">
                <div className="text-xs text-slate-600">REACTION: <span className="text-sky-500">{"< 120ms"}</span></div>
                <div className="text-[10px] text-slate-700">AUTO_PILOT</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
