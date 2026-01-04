import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyWhatsapp } from './components/WhyWhatsapp';
import { LTVSection } from './components/LTVSection';
import { RecoverySection } from './components/RecoverySection';
import { Footer } from './components/Footer';
import { Button } from './components/Button';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Seção 1: Vender no WhatsApp (Benefícios e Conversão) */}
        <WhyWhatsapp />
        
        {/* Seção 2: Recuperação de Vendas (Com Calculadora) */}
        <RecoverySection />
        
        {/* Seção 3: Pós-Venda Customizado (LTV e CAC) */}
        <LTVSection />
        
        {/* Simple CTA Band */}
        <section className="py-12 md:py-20 bg-primary/5 border-y border-border">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Pronto para escalar sua operação?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base px-2">
              Não deixe mais dinheiro na mesa. Comece a recuperar vendas e fidelizar clientes hoje mesmo com a Impetuss.
            </p>
            <Button text="Agendar Consultoria Gratuita" className="text-base md:text-lg px-6 py-3 md:px-8 md:py-4 w-full md:w-auto" />
          </div>
        </section>

      </main>

      <Footer />
      
    </div>
  );
};

export default App;