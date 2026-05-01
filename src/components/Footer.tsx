import { motion } from 'motion/react';
import { Github, Mail, Twitter, Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-24 px-4 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex items-center gap-4 group cursor-default">
            <div className="p-2.5 bg-rose-600 rounded-sm shadow-lg shadow-rose-600/20">
                <Shield size={24} className="text-black" />
            </div>
            <span className="font-display font-black text-3xl tracking-tighter uppercase text-white transition-all group-hover:tracking-normal">ANDREW<span className="text-rose-500">.SYS</span></span>
          </div>
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] mt-2 text-center md:text-left leading-relaxed font-bold">
            AES-256-GCM // RSA-4096_LTS<br />
            SECURE_KERNEL_RT verified 4.8.0
          </p>
        </div>

        <div className="flex gap-10">
          {[
            { icon: Github, href: "https://github.com/ZinMyoAung17" },
            { icon: Twitter, href: "#" },
            { icon: Mail, href: "mailto:contact@example.com" }
          ].map((social, i) => (
            <a 
              key={i}
              href={social.href}
              className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center text-zinc-500 hover:text-rose-500 hover:border-rose-500/30 transition-all hover:scale-110 bg-zinc-900 shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-rose-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <social.icon size={24} className="relative z-10" />
            </a>
          ))}
        </div>

        <div className="text-[10px] font-mono text-zinc-800 flex flex-col items-center md:items-end uppercase tracking-[0.2em] leading-loose font-black">
          <span>&copy; {new Date().getFullYear()} // ANDREW_LABS</span>
          <span className="mt-1 text-rose-500/10">DEVELOPED_IN_THAILAND_OPS</span>
        </div>
      </div>
    </footer>
  );
};
