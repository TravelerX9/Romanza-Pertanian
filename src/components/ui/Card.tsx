import type { ReactNode } from 'react';

type CardProps = { children: ReactNode; className?: string };
const Card = ({ children, className = '' }: CardProps) => (
  <div className={`rounded-lg border-gray-200 bg-white ${className}`}>
    {children}
  </div>
);

export default Card;
