import type { ReactNode } from 'react';

const Title = ({ children }: { children: ReactNode }) => (
  <h2 className='text-center text-[22px] font-extrabold tracking-tight text-[#123872] md:text-2xl lg:text-4xl'>
    {children}
  </h2>
);

export default Title;
