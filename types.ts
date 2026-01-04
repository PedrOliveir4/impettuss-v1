import { LucideIcon } from 'lucide-react';

export interface ServiceProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BenefitProps {
  title: string;
  description: string;
  stat?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}