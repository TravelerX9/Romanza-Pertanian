import React from 'react';

interface PaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  current,
  total,
  onChange,
}) => {
  return (
    <div className='mt-4 flex items-center justify-center gap-2'>
      {[...Array(total)].map((_, i) => (
        <button
          key={i}
          className={`flex h-8 w-8 items-center justify-center rounded-full font-semibold transition ${current === i + 1 ? 'bg-blue-500 text-white' : 'border border-gray-300 bg-white text-gray-700 hover:bg-blue-100'}`}
          onClick={() => onChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      
    </div>
  );
};

export default Pagination;
