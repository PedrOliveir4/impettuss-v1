import React, { useState } from 'react';
import { Calculator, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from './Button';

export const RecoverySection: React.FC = () => {
  const [revenue, setRevenue] = useState<number>(50000);
  
  // Logic: Market average is ~70% cart abandonment. 
  // Efficient recovery systems can recover ~20-30% of lost revenue.
  // Formula: If Revenue is X, and X represents the converted sales.
  // Updated calculation: 25% boost on current revenue.
  const lostMoney = revenue * 0.25; 
  const potentialRevenue = revenue + lostMoney;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-sm font-bold mb-2">
              <AlertTriangle size={16} />
              <span className="animate-pulse">Alerta de Prejuízo</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
              Você está deixando <br/>
              <span className="text-red-500">dinheiro na mesa</span> todos os dias.
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Para cada venda realizada, estatisticamente existem <strong>3 a 4 pessoas</strong> que geraram um boleto, iniciaram um PIX ou abandonaram o carrinho e <strong>não compraram</strong>.
            </p>

            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                  <DollarSign size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Resgate Automático</h4>
                  <p className="text-sm text-muted-foreground">Mensagens persuasivas enviadas minutos após o abandono, garantindo o retorno.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Calculator Card */}
          <div className="bg-card border border-border shadow-2xl rounded-3xl p-6 md:p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0" />
             
             <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
               <Calculator className="text-primary" size={24} />
               Calculadora de Desperdício
             </h3>

             <div className="space-y-6 relative z-10">
               <div>
                 <label className="block text-sm font-medium text-muted-foreground mb-2">
                   Qual seu faturamento mensal atual?
                 </label>
                 <div className="flex items-center gap-4">
                   <input 
                     type="range" 
                     min="5000" 
                     max="500000" 
                     step="1000"
                     value={revenue}
                     onChange={(e) => setRevenue(Number(e.target.value))}
                     className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                   />
                 </div>
                 <div className="text-2xl font-bold text-foreground mt-2">
                   {formatCurrency(revenue)}
                 </div>
               </div>

               <div className="p-4 bg-secondary/50 rounded-xl border border-secondary space-y-3">
                 <div className="flex justify-between items-center text-sm">
                   <span className="text-muted-foreground">Potencial de Recuperação (+25%)</span>
                   <span className="font-bold text-green-600">+{formatCurrency(lostMoney)}</span>
                 </div>
                 <div className="w-full h-px bg-border" />
                 <div className="flex justify-between items-center">
                   <span className="font-bold text-foreground">Faturamento Projetado</span>
                   <span className="font-bold text-xl text-primary">{formatCurrency(potentialRevenue)}</span>
                 </div>
               </div>

               <div className="text-xs text-center text-muted-foreground">
                 *Estimativa baseada em taxas médias de recuperação de mercado.
               </div>

               <Button 
                 text="Quero Recuperar esse Dinheiro" 
                 fullWidth 
                 className="mt-2"
               />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};