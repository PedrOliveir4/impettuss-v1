import React, { useState, useEffect } from 'react';
import { MessageCircle, BarChart3, Clock, Lock } from 'lucide-react';

export const WhyWhatsapp: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      icon: <BarChart3 size={18} />,
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      title: "Taxas de Conversão Recordes",
      description: "Enquanto o E-commerce tradicional converte de 1% a 2%, vendas assistidas via WhatsApp alcançam taxas de 15% a 30%.",
      extra: (
        <>
          <div className="w-full bg-secondary h-1.5 rounded-md overflow-hidden mt-2">
            <div className="bg-green-500 h-full w-[80%] rounded-md" />
          </div>
          <p className="text-[10px] text-right mt-1 text-muted-foreground">WhatsApp: 80% Abertura</p>
        </>
      )
    },
    {
      icon: <Clock size={18} />,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      title: "Tempo de Resposta Zero",
      description: "O cliente quer comprar AGORA. Nossa automação atende em segundos, 24 horas por dia, 7 dias por semana.",
      extra: (
        <ul className="space-y-1 mt-2">
            <li className="text-[10px] flex items-center gap-2 text-foreground"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Atendimento Instantâneo</li>
            <li className="text-[10px] flex items-center gap-2 text-foreground"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Sem filas de espera</li>
        </ul>
      )
    },
    {
      icon: <Lock size={18} />,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      title: "Confiança e Segurança",
      description: "No WhatsApp, a venda é humana e pessoal. Isso elimina o medo de \"golpe\" e aumenta drasticamente o ticket médio.",
      extra: (
        <div className="flex items-center gap-2 p-1.5 bg-secondary rounded-md mt-2">
            <MessageCircle size={12} className="text-primary" />
            <span className="text-[10px] font-medium text-foreground">"Senti confiança em falar com vocês"</span>
        </div>
      )
    }
  ];

  // Auto-advance logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="py-10 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-foreground">
            A Era da Venda <span className="text-primary">Conversacional</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4 leading-snug">
            O WhatsApp não é apenas um app de mensagens, é a ferramenta de vendas mais poderosa do Brasil.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-card p-6 rounded-md border border-border hover:shadow-lg transition-all duration-300">
              <div className={`w-12 h-12 rounded-md ${card.iconBg} ${card.iconColor} flex items-center justify-center mb-4`}>
                {React.cloneElement(card.icon as React.ReactElement, { size: 24 })}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {card.description}
              </p>
              {card.extra}
            </div>
          ))}
        </div>

        {/* Mobile Carousel View - Ultra Compact */}
        <div className="md:hidden relative max-w-[300px] mx-auto">
           <div className="bg-card p-4 rounded-md border border-border shadow-md min-h-[200px] flex flex-col justify-between transition-opacity duration-500">
              <div>
                <div className={`w-8 h-8 rounded-md ${cards[currentIndex].iconBg} ${cards[currentIndex].iconColor} flex items-center justify-center mb-2`}>
                  {cards[currentIndex].icon}
                </div>
                <h3 className="text-base font-bold mb-1.5 text-foreground leading-tight">{cards[currentIndex].title}</h3>
                <p className="text-muted-foreground text-[11px] leading-snug mb-2">
                  {cards[currentIndex].description}
                </p>
              </div>
              <div>
                 {cards[currentIndex].extra}
              </div>
           </div>

           {/* Dots */}
           <div className="flex justify-center gap-1.5 mt-3">
             {cards.map((_, idx) => (
               <button
                 key={idx}
                 onClick={() => setCurrentIndex(idx)}
                 className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                   idx === currentIndex ? 'bg-primary' : 'bg-border'
                 }`}
                 aria-label={`Ir para slide ${idx + 1}`}
               />
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};