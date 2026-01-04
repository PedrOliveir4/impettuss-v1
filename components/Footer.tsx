import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <span className="text-xl font-bold tracking-tight text-foreground">impetuss</span>
          </div>
          <div className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Impetuss Automação. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};