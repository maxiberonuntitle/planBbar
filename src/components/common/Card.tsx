import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return <div className={`rounded-[32px] border border-white/10 bg-black/70 p-6 ${className}`}>{children}</div>;
}
