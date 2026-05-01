import { motion } from 'motion/react';

export const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Dark background */}
      <div className="absolute inset-0 bg-cyber-bg" />
      
      {/* Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(var(--color-cyber-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-cyber-accent) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Radial glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] -translate-y-1/2 opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-rose-600/5 rounded-full blur-[150px] translate-y-1/2 opacity-20" />

      {/* Ping dots */}
      {[...Array(8)].map((_, i) => (
        <PingDot key={i} />
      ))}
    </div>
  );
};

const PingDot = () => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomDelay = Math.random() * 10;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [0, 2, 0],
        opacity: [0, 0.3, 0]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        delay: randomDelay,
        ease: "easeInOut"
      }}
      className="absolute w-1 h-1 bg-rose-500 rounded-full blur-[1px]"
      style={{ left: `${randomX}%`, top: `${randomY}%` }}
    />
  );
};
