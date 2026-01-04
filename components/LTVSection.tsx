import React from 'react';
import { Gift, TrendingUp, Users, RefreshCw } from 'lucide-react';
import { Button } from './Button';

export const LTVSection: React.FC = () => {
  const cards = [
    {
        icon: <Gift size={28} />,
        colorBg: "bg-pink-100",
        colorText: "text-pink-600",
        title: "Experiência VIP",
        desc: "Mensagens automáticas de aniversário e datas comemorativas com cupons exclusivos. O cliente se sente especial."
    },
    {
        icon: <TrendingUp size={28} />,
        colorBg: "bg-green-100",
        colorText: "text-green-600",
        title: "CAC Zero",
        desc: "Venda novos produtos (Upsell/Cross-sell) para sua base atual sem gastar 1 centavo com anúncios."
    },
    {
        icon: <RefreshCw size={28} />,
        colorBg: "bg-blue-100",
        colorText: "text-blue-600",
        title: "Ciclo de Recompra",
        desc: "Nosso sistema identifica quando o produto do cliente está acabando e oferece a reposição no momento exato."
    },
    {
        icon: <Users size={28} />,
        colorBg: "bg-orange-100",
        colorText: "text-orange-600",
        title: "Onboarding Automático",
        desc: "Após a compra, o cliente recebe tutoriais e boas-vindas. Cliente educado usa mais o produto e pede menos reembolso."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative bg-primary/5 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        /* Pause on hover/touch for readability */
        .animate-marquee:hover, .animate-marquee:active {
            animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground mb-4">
                Pós-Venda Customizado
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transforme compradores ocasionais em fãs leais. Reduza seu Custo de Aquisição (CAC) vendendo para quem já confia em você.
            </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, idx) => (
                <div key={idx} className="bg-card p-6 rounded-md border border-border shadow-sm flex flex-col items-center text-center h-full hover:-translate-y-1 transition-transform duration-300">
                    <div className={`w-14 h-14 ${card.colorBg} ${card.colorText} rounded-md flex items-center justify-center mb-4`}>
                        {card.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">
                        {card.desc}
                    </p>
                </div>
            ))}
        </div>

        {/* Mobile Moving Carousel (Marquee) */}
        <div className="md:hidden w-full overflow-hidden">
            <div className="flex w-max animate-marquee">
                {/* First Set */}
                {cards.map((card, idx) => (
                    <div key={`a-${idx}`} className="px-2 flex-shrink-0" style={{ width: '85vw' }}>
                        <div className="bg-card p-6 rounded-md border border-border shadow-sm flex flex-col items-center text-center h-full">
                            <div className={`w-14 h-14 ${card.colorBg} ${card.colorText} rounded-md flex items-center justify-center mb-4`}>
                                {card.icon}
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-foreground">{card.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {card.desc}
                            </p>
                        </div>
                    </div>
                ))}
                {/* Duplicated Set for infinite loop */}
                {cards.map((card, idx) => (
                    <div key={`b-${idx}`} className="px-2 flex-shrink-0" style={{ width: '85vw' }}>
                        <div className="bg-card p-6 rounded-md border border-border shadow-sm flex flex-col items-center text-center h-full">
                            <div className={`w-14 h-14 ${card.colorBg} ${card.colorText} rounded-md flex items-center justify-center mb-4`}>
                                {card.icon}
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-foreground">{card.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {card.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-12 text-center">
            <div className="inline-block bg-card border border-primary/20 rounded-md p-6 max-w-3xl shadow-lg relative mx-4 md:mx-0">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-md text-xs font-bold">
                    O Poder do LTV
                </div>
                <p className="text-lg md:text-xl font-medium text-foreground italic">
                    "Adquirir um novo cliente custa de <span className="text-primary font-bold">5 a 7 vezes mais</span> do que manter um atual. Nosso pós-venda coloca esse lucro no seu bolso."
                </p>
                <div className="mt-6">
                    <Button text="Quero Fidelizar meus Clientes" variant="primary" />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};