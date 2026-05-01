import { Navbar } from './components/Navbar';
import { HeroTerminal } from './components/HeroTerminal';
import { AboutSystem } from './components/AboutSystem';
import { ExpertiseHub } from './components/ExpertiseHub';
import { Philosophy } from './components/Philosophy';
import { SkillGrid } from './components/SkillGrid';
import { VulnerabilityFeed } from './components/VulnerabilityFeed';
import { SecurityTimeline } from './components/SecurityTimeline';
import { ProjectGrid } from './components/ProjectGrid';
import { SystemMonitor } from './components/SystemMonitor';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';
import { BackgroundEffect } from './components/BackgroundEffect';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-rose-500/30 selection:text-white overflow-x-hidden">
      <BackgroundEffect />
      
      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main>
          <HeroTerminal />
          <AboutSystem />
          <ExpertiseHub />
          <Philosophy />
          <SkillGrid />
          <VulnerabilityFeed />
          <SecurityTimeline />
          <ProjectGrid />
          <Certifications />
          <SystemMonitor />
        </main>

        <Footer />
      </div>

      {/* Global Grain/Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
    </div>
  );
}



