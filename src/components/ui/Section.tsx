import type { ReactNode } from 'react';

type SectionProps = { children: ReactNode; className?: string; id?: string };
const Section = ({ children, className = '', id }: SectionProps) => (
  <section id={id} className={`w-full ${className}`}>
    {children}
  </section>
);

export default Section;
