import { motion } from 'motion/react';
import { Award, CheckCircle2, Brackets, Binary, ShieldCheck } from 'lucide-react';

const certs = [
  { name: "AI & DS", full: "Certified AI & Data Science (North Chiang Mai University)", year: "2025", icon: BuildIcon(Binary) },
  { name: "Web Dev", full: "Certified Web Development and Design (AIMT)", year: "2022", icon: BuildIcon(Brackets) },
  { name: "Network", full: "Certified Networking (SMVTI) & Network Engineering (YUDE)", year: "2021", icon: BuildIcon(ShieldCheck) },
  { name: "Design", full: "Certified Adobe Photoshop, Illustrator & Microsoft Office", year: "2019", icon: BuildIcon(Award) },
];

function BuildIcon(Icon: any) {
  return <Icon className="text-rose-500" size={32} />;
}

export const Certifications = () => {
  return (
    <section id="certifications" className="py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/5 border border-rose-500/20 rounded-full font-mono text-[10px] text-rose-500 font-bold tracking-widest uppercase">
                 <Brackets size={12} />
                 CERTIFIED_INTEGRITY
              </div>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
                VERIFIED <span className="text-rose-500 italic underline decoration-rose-500/20 underline-offset-[12px] decoration-8">CREDENTIALS</span>
              </h2>
            </div>
            
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Maintained through rigorous continuous education and hands-on field validation. 
              My expertise is backed by industry-standard benchmarks.
            </p>
            
            <div className="space-y-8">
              {[
                "Advanced Network Penetration Testing",
                "Incident Response & Digital Forensics",
                "Cloud Security Architecture (AWS/Azure)",
                "Security Information & Event Management (SIEM)",
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group cursor-default"
                >
                  <div className="w-8 h-8 rounded-full border-2 border-rose-500/20 flex items-center justify-center group-hover:border-rose-500 group-hover:bg-rose-500/10 transition-all duration-300">
                    <CheckCircle2 size={16} className="text-rose-500/40 group-hover:text-rose-500 transition-colors" />
                  </div>
                  <span className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors font-bold">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 perspective-1000">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95, rotateY: i % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                whileHover={{ 
                  rotateY: i % 2 === 0 ? 15 : -15, 
                  rotateX: -10, 
                  translateZ: 100,
                  boxShadow: "0 25px 50px -12px rgba(244, 63, 94, 0.4)"
                }}
                whileTap={{
                  scale: 0.95,
                  rotateY: 0,
                  translateZ: 50
                }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.5,
                  rotateY: { type: "spring", stiffness: 150 },
                  rotateX: { type: "spring", stiffness: 150 }
                }}
                className="p-8 md:p-10 bg-zinc-900/40 cyber-border group hover:border-rose-500/40 transition-all duration-500 flex flex-col items-center text-center shadow-2xl border-white/5 preserve-3d"
              >
                <div className="mb-6 md:mb-8 p-5 bg-rose-500/5 rounded-full border border-rose-500/10 group-hover:border-rose-500/30 group-hover:bg-rose-500/10 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-rose-500/10" style={{ transform: 'translateZ(80px)' }}>
                  {cert.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-black text-white group-hover:text-rose-500 mb-2 uppercase tracking-tighter transition-colors" style={{ transform: 'translateZ(60px)' }}>{cert.name}</h3>
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest leading-relaxed mb-4 md:mb-6 h-12 flex items-center justify-center font-bold px-4" style={{ transform: 'translateZ(40px)' }}>
                  {cert.full}
                </p>
                <div className="text-[10px] font-mono text-rose-500/50 border-t border-white/5 pt-6 w-full font-black tracking-widest" style={{ transform: 'translateZ(20px)' }}>
                  VALIDATED: {cert.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
