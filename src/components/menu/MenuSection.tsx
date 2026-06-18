import { ReactNode } from 'react';

type MenuSectionProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function MenuSection({ id, title, description, children }: MenuSectionProps) {
  return (
    <section id={id} className="scroll-mt-32">
      <header className="mb-6 border-b border-white/10 pb-4 sm:mb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">Carta</p>
        <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        {description ? <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">{description}</p> : null}
      </header>
      {children}
    </section>
  );
}
