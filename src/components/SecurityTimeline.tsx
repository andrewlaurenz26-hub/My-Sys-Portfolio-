import { motion } from 'motion/react';
import { Shield, Target, Zap, Lock, Search, Activity } from 'lucide-react';

const events = [
  {
    date: "2023 - PRESENT",
    title: "IT Infra Executive & Full Step Web Developer",
    company: "IELTS Ivy, Broadway Education, Mindspire Coaching",
    description: "Multi-year engagement managing full IT infrastructure and web development. Responsible for domain setup, hosting, coding, firewall/VPN implementation, and periodic security audits.",
    icon: Shield,
    tags: ["Infrastructure", "Full Stack", "Security"]
  },
  {
    date: "2022 - 2023",
    title: "Front-End Web Developer",
    company: "Lyrion Innovation Co.LTD",
    description: "Collaborated with design teams to create intuitive interfaces. Conducted thorough testing and debugging of frontend code to ensure high-performance production standards.",
    icon: Target,
    tags: ["UI/UX", "Frontend", "Debugging"]
  },
  {
    date: "2021 - 2022",
    title: "IT Technician & Pearson Administrator",
    company: "Crown Education And Royal Academic Institute",
    description: "Managed IT infrastructure and Pearson VUE test center operations. Handled complex hardware/software troubleshooting and maintained student/candidate delivery systems.",
    icon: Search,
    tags: ["Tech Support", "IT Ops", "Admin"]
  }
];

export const SecurityTimeline = () => {
  return (
    <section id="timeline" className="py-32 px-4 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-rose-500/5 border border-rose-500/20 rounded-full font-mono text-[10px] text-rose-500 font-black tracking-widest uppercase">
             <Activity size={12} />
             MISSION_CHRONOLOGY
          </div>
          <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-6">
            OPERATIONAL <span className="text-rose-500 italic underline decoration-rose-500/20 underline-offset-8 decoration-4">TIMELINE</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />
        </div>

          <div className="relative border-l-2 border-rose-500/20 ml-4 md:ml-0 md:left-1/2 perspective-1000">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ 
                rotateX: i % 2 === 0 ? 5 : -5,
                rotateY: i % 2 === 0 ? 10 : -10,
                translateZ: 50,
                scale: 1.02,
                boxShadow: "0 30px 60px -15px rgba(244, 63, 94, 0.3)"
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1, 
                ease: "easeOut",
                rotateX: { type: "spring", stiffness: 200 },
                rotateY: { type: "spring", stiffness: 200 }
              }}
              className={`relative mb-24 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right ml-10 md:ml-0' : 'md:pl-16 md:ml-auto md:text-left ml-10 md:ml-0'} preserve-3d`}
            >
              {/* Dot on line */}
              <div className="absolute top-0 w-4 h-4 rounded-full bg-black border-4 border-rose-500 -left-[37px] md:left-auto md:right-[-8px] md:translate-x-0 z-10 shadow-[0_0_15px_#f43f5e]" style={{ transform: 'translateZ(100px)' }} />
              {i % 2 !== 0 && <div className="hidden md:block absolute top-0 w-4 h-4 rounded-full bg-black border-4 border-rose-500 left-[-8px] z-10 shadow-[0_0_15px_#f43f5e]" style={{ transform: 'translateZ(100px)' }} />}

              <div className="cyber-border bg-glass p-8 md:p-12 hover:border-rose-500/40 transition-all duration-500 shadow-2xl group flex flex-col h-full border-white/5 preserve-3d">
                <div className={`flex items-start gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`} style={{ transform: 'translateZ(60px)' }}>
                  <div className="p-4 bg-rose-500/10 rounded border border-rose-500/20 group-hover:bg-rose-500/20 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(244,63,94,0.1)]">
                    <event.icon className="text-rose-500" size={32} />
                  </div>
                  <div className={i % 2 === 0 ? 'md:text-right' : 'text-left'}>
                    <span className="text-[10px] font-mono text-rose-500/60 tracking-[0.3em] font-black uppercase mb-1 block">{event.date}</span>
                    <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase group-hover:text-rose-400 transition-colors tracking-tight leading-none">{event.title}</h3>
                  </div>
                </div>

                <div className="mb-4 text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] font-black" style={{ transform: 'translateZ(40px)' }}>{event.company}</div>
                <p className="text-zinc-400 text-base leading-relaxed mb-10 font-light" style={{ transform: 'translateZ(30px)' }}>
                  {event.description}
                </p>

                <div className={`mt-auto flex flex-wrap gap-3 ${i % 2 === 0 ? 'md:justify-end' : 'justify-start'}`} style={{ transform: 'translateZ(50px)' }}>
                  {event.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-mono border border-rose-500/20 px-3 py-1.5 rounded-sm text-rose-500/60 uppercase font-bold hover:bg-rose-500/10 transition-colors">
                      #{tag}
                    </span>
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
