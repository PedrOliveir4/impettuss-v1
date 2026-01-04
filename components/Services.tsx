import React from 'react';
import { ShoppingCart, Users, Repeat, Share2 } from 'lucide-react';

const ServiceCard: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}> = ({ icon: Icon, title, description, features }) => (
  <div className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full group">
    <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary rounded-xl flex items-center justify-center mb-5 md:mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
      <Icon size={28} className="md:w-8 md:h-8" />
    </div>
    <h3 className="text-xl md:text-2xl font-bold mb-3 text-card-foreground">{title}</h3>
    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{description}</p>
    <ul className="space-y-2 mt-auto">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="como-funciona" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Como a Impetuss trabalha</h2>
          <p className="text-muted-foreground px-4">Cobertura total em todas as redes para levar o cliente ao fechamento.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          <ServiceCard 
            icon={ShoppingCart}
            title="Recuperação de Vendas"
            description="Não deixe dinheiro na mesa. Abordamos clientes que abandonaram o carrinho, geraram boleto ou PIX e não pagaram."
            features={[
              "Recuperação de Carrinho Abandonado",
              "Conversão de Boletos não pagos",
              "Scripts de alta conversão para WhatsApp",
              "Foco total em fechar a venda agora"
            ]}
          />
          <ServiceCard 
            icon={Users}
            title="Pós-Venda & Onboarding"
            description="A venda não acaba no pagamento. Transforme clientes em fãs com um pós-venda impecável e automático."
            features={[
              "Boas-vindas imediatas no WhatsApp",
              "Envio de dados de acesso por Email",
              "Pesquisa de satisfação (NPS)",
              "Resolução de dúvidas frequentes"
            ]}
          />
          <ServiceCard 
            icon={Repeat}
            title="LTV & Venda Recorrente"
            description="Venda novamente para quem já confia em você. Nosso sistema identifica o momento certo para ofertar novos produtos."
            features={[
              "Ofertas de Upsell e Cross-sell",
              "Campanhas para base de clientes",
              "Reativação de clientes inativos",
              "Aumento do Ticket Médio"
            ]}
          />
          <ServiceCard 
            icon={Share2}
            title="Ecossistema Completo"
            description="Integramos todos os pontos de contato do seu cliente para uma comunicação unificada e persuasiva."
            features={[
              "Direct do Instagram & Facebook",
              "Grupos e Canais VIP no Telegram",
              "E-mail Marketing Estratégico",
              "WhatsApp API Oficial"
            ]}
          />
        </div>
      </div>
    </section>
  );
};