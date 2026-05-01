import React from 'react';
import { motion } from 'motion/react';
import { Database, ShieldCheck, Code, GitBranch } from 'lucide-react';

const skills = [
  { 
    category: "Development",
    icon: Code,
    accent: "text-rose-500",
    items: [
      { name: "Javascript", lvl: 92 },
      { name: "HTML / CSS", lvl: 95 },
      { name: "React", lvl: 88 },
      { name: "UI Design (Figma)", lvl: 85 }
    ]
  },
  { 
    category: "Infrastructure",
    icon: ShieldCheck,
    accent: "text-rose-500",
    items: [
      { name: "Networking", lvl: 92 },
      { name: "VPN / Firewall", lvl: 85 },
      { name: "Project Management", lvl: 88 },
      { name: "Hardware", lvl: 95 }
    ]
  },
  { 
    category: "Tools",
    icon: GitBranch,
    accent: "text-rose-500",
    items: [
      { name: "Git / Github", lvl: 90 },
      { name: "Photoshop", lvl: 85 },
      { name: "Illustrator", lvl: 80 },
      { name: "Terminal / Bash", lvl: 88 }
    ]
  },
  { 
    category: "Emerging Tech",
    icon: Database,
    accent: "text-rose-500",
    items: [
      { name: "Data Science", lvl: 75 },
      { name: "AI Integration", lvl: 80 },
      { name: "Cloud Deployment", lvl: 82 },
      { name: "Security Audit", lvl: 85 }
    ]
  }
];

export const SkillGrid = () => {
  return (
    <section id="skills" className="py-32 px-4 bg-black/40 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-24">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic whitespace-nowrap">
            TECH <span className="text-rose-500 underline decoration-rose-500/20 underline-offset-8 decoration-4">MATRIX</span>
          </h2>
          <div className="h-[2px] w-full bg-gradient-to-r from-rose-500 to-transparent opacity-20" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                rotateX: 12, 
                rotateY: -12,
                translateZ: 80,
                scale: 1.05,
                boxShadow: "0 30px 60px -15px rgba(244, 63, 94, 0.4)"
              }}
              whileTap={{
                scale: 0.98,
                rotateX: 5,
                rotateY: -5,
                translateZ: 40
              }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 10
              }}
              viewport={{ once: true }}
              className="perspective-1000"
            >
              <div className="p-8 md:p-10 cyber-border bg-glass hover:border-rose-500/40 transition-all duration-500 group relative shadow-2xl preserve-3d border-white/5">
                <div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-700 font-bold tracking-widest" style={{ transform: 'translateZ(100px)' }}>NODE_0{i+1}</div>

                <div className="flex items-center gap-5 mb-8 md:mb-12" style={{ transform: 'translateZ(70px)' }}>
                  <div className={`p-4 bg-rose-500/10 rounded group-hover:bg-rose-500/30 group-hover:scale-110 transition-all duration-500 border border-rose-500/20 shadow-[0_0_25px_rgba(244,63,94,0.15)]`}>
                    <skill.icon className="text-rose-500" size={32} />
                  </div>
                  <h3 className="font-display font-black uppercase text-sm tracking-[0.2em] leading-tight text-white">{skill.category}</h3>
                </div>

                <div className="space-y-8" style={{ transform: 'translateZ(50px)' }}>
                  {skill.items.map((item, j) => (
                    <div key={j} className="space-y-3 group/item">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-500 font-mono tracking-tight group-hover/item:text-white transition-colors font-bold">
                          {item.name}
                        </span>
                        <span className={`text-[10px] font-mono text-rose-500 group-hover/item:text-white transition-colors font-black`}>{item.lvl}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${item.lvl}%` }}
                           transition={{ duration: 1.5, delay: 0.5 + (j * 0.1) }}
                           className={`h-full bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)]`}
                         />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
