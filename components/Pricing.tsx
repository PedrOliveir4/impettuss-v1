import React from 'react';
import { Check, Rocket } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="precos" className="py-12 md:py-20 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Modelo de Parceria <span className="text-primary">Win-Win</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            Nosso sucesso é atrelado ao seu. Temos um custo fixo baixo para manutenção das ferramentas e ganhamos comissão sobre o resultado que geramos.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-card border-2 border-primary/20 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-xl font-bold text-sm">
                Oferta Exclusiva
            </div>
            
            <div className="p-6 md:p-8 text-center border-b border-border">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 text-primary">
                    <Rocket size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Acelerador de Vendas</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-foreground">R$ 590</span>
                    <span className="text-muted-foreground text-sm self-end mb-1">/mês</span>
                </div>
                <div className="text-lg md:text-xl font-bold text-primary">+ 10% de comissão</div>
                <p className="text-muted-foreground text-sm mt-4">
                    Taxa fixa para setup e ferramentas + comissão sobre vendas recuperadas ou geradas.
                </p>
            </div>

            <div className="p-6 md:p-8 bg-muted/20">
                <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-sm text-foreground">
                        <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0"><Check size={12} /></span>
                        Gestão de WhatsApp, Instagram, Face e Telegram
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                        <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0"><Check size={12} /></span>
                        Recuperação de Carrinhos e Boletos
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                        <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0"><Check size={12} /></span>
                        E-mail Marketing incluso
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                        <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0"><Check size={12} /></span>
                        Relatórios semanais de performance
                    </li>
                    <li className="flex items-center gap-3 text-sm text-foreground">
                        <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0"><Check size={12} /></span>
                        Sem fidelidade (Cancele quando quiser)
                    </li>
                </ul>
                <Button text="Quero essa Parceria" fullWidth variant="primary" />
                <p className="text-center text-xs text-muted-foreground mt-4">
                    Vagas limitadas para garantir qualidade de atendimento.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};