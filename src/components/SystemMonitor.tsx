import { motion } from 'motion/react';
import { Activity, ShieldAlert, Cpu, Server, Wifi } from 'lucide-react';
import { useState, useEffect } from 'react';

const mockLogs = [
  "[INFO] Established encrypted link to HK-7 NODE",
  "[WARN] Unusual traffic pattern detected on Port 443",
  "[INFO] Integrity check: MD5 100% MATCH",
  "[SECURITY] Blocked SQL injection attempt from 192.168.1.104",
  "[INFO] System hardening protocol updated",
  "[INFO] Neural net scanning for lateral movement...",
  "[ALERT] Unauthorized decryption attempt on /etc/shadow",
  "[INFO] Secure handshake successful with SOC-PRIMARY",
];

export const SystemMonitor = () => {
  const [activeLogs, setActiveLogs] = useState<string[]>([]);
  const [stats, setStats] = useState({
    threats: 1420,
    uptime: "99.999%",
    load: 14.2
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const nextLog = mockLogs[Math.floor(Math.random() * mockLogs.length)];
      setActiveLogs(prev => [nextLog, ...prev].slice(0, 10));
      
      setStats(prev => ({
        ...prev,
        load: Number((Math.random() * 15 + 8).toFixed(1)),
        threats: prev.threats + (Math.random() > 0.7 ? 1 : 0)
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stats" className="py-32 px-4 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Real-time stats */}
          <div className="lg:col-span-2 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
                VITALITY <span className="text-rose-500 italic underline decoration-rose-500/20 underline-offset-8 decoration-4">METRICS</span>
              </h2>
              <div className="flex items-center gap-3 text-rose-500 font-mono text-[10px] mb-2 px-4 py-1.5 bg-rose-500/5 border border-rose-500/20 rounded-full font-black tracking-widest">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_#f43f5e]" />
                TELEMETRY_TX:ACTIVE
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: ShieldAlert, label: "Threats Blocked", value: stats.threats.toLocaleString(), unit: "IDS" },
                { icon: Activity, label: "Uptime (24h)", value: stats.uptime, unit: "NET" },
                { icon: Cpu, label: "Kernel Utilization", value: `${stats.load}%`, unit: "OPS" },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-zinc-900/40 cyber-border flex flex-col gap-6 hover:border-rose-500/30 transition-all duration-500 shadow-2xl"
                >
                  <div className="flex justify-between items-center">
                    <div className="p-2 bg-rose-500/10 rounded border border-rose-500/20">
                       <stat.icon className="text-rose-500" size={20} />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-700 font-black tracking-widest">MT_{stat.unit}_0{i+1}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-4xl font-display font-black text-rose-500 glow-text tracking-tighter">{stat.value}</span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 font-bold">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Simulated graph */}
            <div className="bg-black cyber-border border-rose-500/10 p-10 h-80 relative overflow-hidden flex items-end gap-1.5 px-6 group">
              {[...Array(60)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [`${15 + Math.random() * 65}%`, `${35 + Math.random() * 55}%`, `${15 + Math.random() * 65}%`] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.04 }}
                  className="flex-grow bg-rose-500/5 group-hover:bg-rose-500/20 transition-all duration-700 cursor-crosshair min-w-[2px] shadow-[0_0_10px_rgba(244,63,94,0)] group-hover:shadow-[0_0_10px_rgba(244,63,94,0.1)]"
                />
              ))}
              <div className="absolute top-6 left-6 flex gap-6 text-[10px] font-mono text-zinc-600 font-bold tracking-widest">
                <div className="flex items-center gap-2 px-3 py-1 bg-rose-500/5 border border-rose-500/10 rounded-sm">
                   <span className="w-1.5 h-1.5 bg-rose-500 rounded-full" /> 
                   HEURISTIC_STABLE
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-orange-500/5 border border-orange-500/10 rounded-sm">
                   <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" /> 
                   VECTOR_SCAN_ACTIVE
                </div>
              </div>
              
              <div className="absolute top-6 right-6 opacity-40 group-hover:opacity-100 transition-opacity">
                 <Activity size={24} className="text-rose-500" />
              </div>
            </div>
          </div>

          {/* Activity Logs */}
          <div className="bg-zinc-950 border border-white/5 p-8 rounded-sm flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
              <div className="flex items-center gap-3 text-sm font-display font-black text-white uppercase tracking-[0.2em]">
                <Server size={18} className="text-rose-500" />
                <span>LOG_TERMINAL</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
            </div>
            
            <div className="flex-grow space-y-5 font-mono text-[10px] overflow-hidden">
              {activeLogs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1 - (i * 0.08), x: 0 }}
                  className={`${log.includes('SECURITY') || log.includes('ALERT') ? 'text-rose-500 font-black flex gap-2' : 'text-zinc-600 flex gap-2'}`}
                >
                  <span className="opacity-40 tracking-tighter">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                  <span>{log}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-700 font-bold">
              <div className="flex items-center gap-3">
                <Wifi size={14} className="text-rose-500/50" />
                <span className="tracking-widest">SIGNAL_SNR:42dB</span>
              </div>
              <span className="tracking-widest uppercase">Kernel_v4.4.2_LTS</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
