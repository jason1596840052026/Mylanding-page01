import { useEffect } from 'react';
import { ThreeBackground } from './components/ThreeBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { StaggeredColumns } from './components/StaggeredColumns';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Add Iconify script
    const script = document.createElement('script');
    script.src = 'https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.body.removeChild(script);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Global grain/noise texture */}
      <div className="grain-overlay" />
      
      {/* Three.js background */}
      <ThreeBackground />
      
      {/* Custom cursor */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <Services />
        <StaggeredColumns />
        <Team />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Vignette effect */}
      <div className="vignette" />
    </div>
  );
}
