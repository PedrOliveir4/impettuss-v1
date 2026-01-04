import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-border shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <span className="text-2xl font-bold tracking-tight text-foreground">impetuss</span>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
           <Button text="Falar com Especialista" variant={scrolled ? 'primary' : 'secondary'} className="px-4 py-2 text-sm" />
        </div>
      </div>
    </nav>
  );
};