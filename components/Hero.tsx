import React from 'react';
import { Button } from './Button';
import { Instagram, Facebook, Send, MessageCircle, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 text-center">
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-foreground">
          Venda <span className="text-primary">4,5x mais</span> vendendo<br className="hidden md:block" />
          pelo WhatsApp.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 px-4 md:px-0">
          Esqueça as páginas de vendas frias. Convertemos seus leads onde eles estão: 
          <strong> Instagram, Facebook, Telegram, E-mail</strong> e, principalmente, no <strong>WhatsApp</strong>.
        </p>

        {/* Channel Icons */}
        <div className="flex justify-center flex-wrap gap-4 md:gap-6 mb-8 md:mb-10 text-muted-foreground/60">
           <Instagram size={24} />
           <Facebook size={24} />
           <Send size={24} />
           <Mail size={24} />
           <MessageCircle size={24} className="text-primary" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto px-4 sm:px-0">
          <Button text="Quero Vender 4,5x Mais" className="text-lg px-8 py-4 w-full sm:w-auto" />
        </div>

      </div>
    </section>
  );
};