import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const questions: FaqItem[] = [
  {
    question: "Preciso ter uma equipe de vendas?",
    answer: "Não necessariamente. A automação da Impetuss lida com a maior parte do processo. Para operações maiores, a automação filtra e qualifica os leads para que sua equipe (se houver) fale apenas com quem está pronto para comprar."
  },
  {
    question: "Funciona para qualquer nicho?",
    answer: "Sim! Funciona perfeitamente para infoprodutos, e-commerce, prestação de serviços e delivery. Se você vende algo e usa a internet, a Impetuss pode acelerar seus resultados."
  },
  {
    question: "Corro risco de ter o WhatsApp bloqueado?",
    answer: "Trabalhamos com estratégias de aquecimento de chip e, preferencialmente, utilizando a API Oficial do WhatsApp (WABA), o que garante segurança total e zero risco de bloqueio por envio em massa."
  },
  {
    question: "Como funciona a recuperação de vendas?",
    answer: "Nosso sistema integra com sua plataforma de pagamento (Hotmart, Eduzz, Kiwify, etc). Assim que um boleto é gerado ou um carrinho é abandonado, o WhatsApp dispara uma sequência de mensagens persuasivas para reverter a venda."
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Dúvidas Frequentes</h2>
        </div>
        
        <div className="space-y-4">
          {questions.map((q, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg overflow-hidden transition-all shadow-sm">
              <button 
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                onClick={() => toggle(idx)}
              >
                <span className="font-semibold text-lg text-card-foreground">{q.question}</span>
                {openIndex === idx ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-muted-foreground" />}
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed border-t border-border animate-fade-in">
                  {q.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};