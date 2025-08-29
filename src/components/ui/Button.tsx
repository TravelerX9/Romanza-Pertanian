import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
};
const Button = ({
  children,
  href = '#',
  variant = 'primary',
  className = '',
}: ButtonProps) => (
  <Link
    href={href}
    className={
      `inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors ` +
      (variant === 'primary'
        ? 'bg-[#1f8f2e] text-white hover:bg-[#187624]'
        : 'border border-[#123872] bg-white text-[#123872] hover:bg-[#f4f7ff]') +
      ` ${className}`
    }
  >
    {children}
  </Link>
);

export default Button;
