import { motion } from 'motion/react';
import { Shield, Lock, Terminal, Cpu, Network, Database, Bug, Search, Eye, Activity } from 'lucide-react';

const expertises = [
  {
    title: "IT Infrastructure",
    icon: Database,
    description: "Managing and monitoring storage systems, network devices, and complex server environments. Specialized in high-availability enterprise setups.",
    skills: ["Networking", "Firewalls", "VPN"],
    level: 95
  },
  {
    title: "Web Development",
    icon: Shield,
    description: "Full-stack capabilities with a focus on intuitive UI/UX and secure back-ends. Experienced in building responsive, high-performance web applications.",
    skills: ["Javascript", "HTML/CSS", "React"],
    level: 92
  },
  {
    title: "AI & Data Science",
    icon: Cpu,
    description: "Leveraging modern AI frameworks and data science methodologies to drive insights and automated decision-making processes.",
    skills: ["Data Analysis", "AI Models", "Predictive Analytics"],
    level: 88
  }
];

export const ExpertiseHub = () => {
  return (
    <section id="expertise" className="py-32 px-4 bg-black relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#f43f5e 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4">
               <div className="flex items-center gap-2 text-rose-500 font-mono text-xs uppercase tracking-[0.4em]">
                  <Terminal size={14} />
                  <span>CORE_COMPETENCIES_ENUM</span>
               </div>
               <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
                  EXPERT <span className="text-rose-500 italic">SYSTEMS</span>
               </h2>
               <div className="w-32 h-2 bg-rose-500" />
          </div>
          <p className="max-w-md text-zinc-500 font-light text-lg leading-relaxed text-left md:text-right">
             Deep-spectrum technical coverage across the entire security lifecycle. 
             From initial reconnaissance to final recovery and hardening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {expertises.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                rotateX: -10, 
                rotateY: 10,
                translateZ: 60,
                scale: 1.05,
                boxShadow: "0 30px 60px -12px rgba(244, 63, 94, 0.3)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 250,
                damping: 15
              }}
              viewport={{ once: true }}
              className="perspective-1000"
            >
              <div className="group p-10 bg-zinc-900/40 cyber-border border-white/5 hover:border-rose-500/40 transition-all duration-500 flex flex-col h-full preserve-3d shadow-2xl">
                <div className="flex items-center justify-between mb-10" style={{ transform: 'translateZ(80px)' }}>
                   <div className="p-5 bg-rose-500/10 rounded group-hover:bg-rose-500/20 group-hover:scale-110 transition-all duration-500 border border-rose-500/20 shadow-[0_0_30px_rgba(244,63,94,0.2)]">
                      <item.icon className="text-rose-500" size={36} />
                   </div>
                   <span className="text-5xl font-black text-white/5 group-hover:text-rose-500/10 transition-colors font-display italic">
                      0{i+1}
                   </span>
                </div>

                <div style={{ transform: 'translateZ(50px)' }}>
                  <h3 className="text-3xl font-display font-black text-white uppercase mb-4 tracking-tight group-hover:text-rose-400 transition-colors leading-none">
                    {item.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed mb-10 flex-grow font-light">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-8 mt-auto" style={{ transform: 'translateZ(40px)' }}>
                   <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, j) => (
                         <span key={j} className="text-[10px] font-mono border border-white/10 px-3 py-1 rounded bg-black text-zinc-500 uppercase tracking-widest font-bold group-hover:border-rose-500/40 group-hover:text-rose-500 transition-all shadow-sm">
                            {skill}
                         </span>
                      ))}
                   </div>
                   
                   <div className="space-y-3">
                      <div className="flex justify-between items-center text-[10px] font-mono text-zinc-600 font-bold tracking-widest">
                         <span>CALIBRATION</span>
                         <span className="text-rose-500">{item.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 overflow-hidden rounded-full">
                         <motion.div 
                            className="h-full bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.6)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                         />
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
