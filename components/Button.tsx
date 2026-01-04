import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  variant = 'primary', 
  fullWidth = false, 
  onClick,
  className = ''
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-bold transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border-2 border-primary text-primary hover:bg-primary/5"
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default to WhatsApp open action
      window.open('https://wa.me/?text=Olá, gostaria de saber mais sobre a Impetuss.', '_blank');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <MessageCircle size={20} />
      {text}
    </button>
  );
};