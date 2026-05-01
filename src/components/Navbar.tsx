import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { name: "Console", href: "#hero" },
  { name: "Expertise", href: "#expertise" },
  { name: "Skills", href: "#skills" },
  { name: "Intelligence", href: "#threats" },
  { name: "Timeline", href: "#timeline" },
  { name: "Projects", href: "#projects" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-2xl border-b border-rose-500/10 py-3 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="p-2 bg-rose-600 rounded-sm shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all group-hover:scale-110">
            <Shield size={20} className="text-black" />
          </div>
          <span className="font-display font-black text-2xl tracking-tighter uppercase text-white">
            ANDREW<span className="text-rose-500 group-hover:glow-text">.SYS</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-rose-500 transition-all hover:translate-y-[-1px] font-bold"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-white/10" />

          <div className="flex items-center gap-5">
            <a href="https://github.com/ZinMyoAung17" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <button 
              onClick={() => document.querySelector('#expertise')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-rose-600 text-white px-6 py-2 rounded-sm font-display font-black text-[10px] uppercase tracking-widest hover:bg-rose-500 transition-all shadow-xl active:scale-95 border border-rose-400/20"
            >
              BREACH_PROTOCOL
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-3 bg-white/5 border border-white/10 rounded-sm active:scale-90 transition-transform"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/98 border-b border-rose-500/20 overflow-hidden backdrop-blur-3xl"
          >
            <div className="flex flex-col p-10 gap-10">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display font-black text-5xl uppercase tracking-tighter text-zinc-500 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/5" />
              <div className="flex justify-between items-center gap-4">
                <div className="flex gap-8">
                  <Github className="text-zinc-500 hover:text-white transition-colors" size={24} />
                  <Linkedin className="text-zinc-500 hover:text-white transition-colors" size={24} />
                  <Mail className="text-zinc-500 hover:text-white transition-colors" size={24} />
                </div>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.querySelector('#threats')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-rose-500 text-black px-6 py-4 rounded-sm font-display font-black text-xs uppercase tracking-widest shadow-xl shadow-rose-500/30 active:scale-95 transition-transform"
                >
                  SECURE_COMMS
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
