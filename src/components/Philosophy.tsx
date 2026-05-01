import { motion } from 'motion/react';
import { Target, Zap, Shield, AlertTriangle } from 'lucide-react';

const principles = [
  {
    title: "Think Like an Adversary",
    icon: Target,
    desc: "Defensive measures are only as strong as your understanding of the attacker's toolkit. I spend my time understanding the 'how' and 'why' of exploits to build better gates.",
    color: "rose"
  },
  {
    title: "Automation by Default",
    icon: Zap,
    desc: "Human error is the leading cause of security breaches. My philosophy is to automate security validation, patch deployment, and drift remediation into every pipeline.",
    color: "amber"
  },
  {
    title: "Simplicity is Security",
    icon: Shield,
    desc: "Complexity is the enemy of security. I focus on creating lean, transparent security systems that are easy to audit and impossible to misconfigure.",
    color: "rose"
  }
];

export const Philosophy = () => {
  return (
    <section className="py-24 px-4 bg-black border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-500 text-[10px] font-mono mb-6 uppercase tracking-widest">
                <AlertTriangle size={12} />
                OPERATIONAL_CODE
             </div>
             <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                MY <span className="text-rose-500 underline decoration-rose-500/30 underline-offset-8">PHILOSOPHY</span>
             </h2>
             <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-light">
                Cybersecurity isn't just a technical challenge—it's a mindset. In an ever-evolving threat landscape, 
                stagnation is equivalent to defeat. I approach every project with the rigor of a researcher and the 
                instincts of a defender.
             </p>
             <div className="flex gap-4">
                <button className="px-8 py-3 bg-rose-600 text-white font-mono text-xs uppercase tracking-widest hover:bg-rose-500 transition-all">
                   INITIATE_CONTACT
                </button>
                <button className="px-8 py-3 border border-white/10 text-white font-mono text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
                   DOWNLOAD_DOSSIER
                </button>
             </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-6">
             {principles.map((p, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-8 bg-zinc-900/40 border border-white/5 hover:border-rose-500/20 transition-all group flex gap-8 items-start"
               >
                 <div className="p-4 bg-black/60 rounded border border-white/5 group-hover:border-rose-500/30 transition-all shrink-0">
                    <p.icon className="text-rose-500" size={28} />
                 </div>
                 <div>
                    <h3 className="text-xl font-display font-black text-white uppercase mb-3 tracking-tight group-hover:text-rose-400 transition-colors">
                       {p.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light">
                       {p.desc}
                    </p>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};
