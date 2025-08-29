import Section from '../../components/ui/Section';
import React from 'react';
import Title from '../../components/ui/Title';

const TANAMAN = [
  { label: 'Bawang', img: '/images/bawang.webp' },
  { label: 'Cabai', img: '/images/cabai.webp' },
  { label: 'Jagung', img: '/images/jagung.webp' },
  { label: 'Kentang', img: '/images/kentang.webp' },
  { label: 'Padi', img: '/images/padi.webp' },
  { label: 'Semangka', img: '/images/semangka.webp' },
  { label: 'Tomat', img: '/images/tomat.webp' },
];

const PilihSection = () => {
  const [start, setStart] = React.useState(0);
  const perPage = 6;
  const canPrev = start > 0;
  const canNext = start + perPage < TANAMAN.length;
  const visible = TANAMAN.slice(start, start + perPage);

  // Touch & mouse drag logic
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const pos = React.useRef({ x: 0, scrollLeft: 0, dragging: false });

  // Mouse events
  React.useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onMouseDown = (e: MouseEvent) => {
      pos.current.dragging = true;
      pos.current.x = e.pageX - slider.offsetLeft;
      pos.current.scrollLeft = slider.scrollLeft;
      slider.classList.add('cursor-grabbing');
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!pos.current.dragging) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - pos.current.x;
      slider.scrollLeft = pos.current.scrollLeft - walk;
    };
    const onMouseUp = () => {
      pos.current.dragging = false;
      slider.classList.remove('cursor-grabbing');
    };
    slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('mousemove', onMouseMove);
    slider.addEventListener('mouseleave', onMouseUp);
    slider.addEventListener('mouseup', onMouseUp);
    return () => {
      slider.removeEventListener('mousedown', onMouseDown);
      slider.removeEventListener('mousemove', onMouseMove);
      slider.removeEventListener('mouseleave', onMouseUp);
      slider.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  // Touch events
  React.useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const onTouchStart = (e: TouchEvent) => {
      pos.current.dragging = true;
      pos.current.x = e.touches[0].pageX - slider.offsetLeft;
      pos.current.scrollLeft = slider.scrollLeft;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!pos.current.dragging) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = x - pos.current.x;
      slider.scrollLeft = pos.current.scrollLeft - walk;
    };
    const onTouchEnd = () => {
      pos.current.dragging = false;
    };
    slider.addEventListener('touchstart', onTouchStart);
    slider.addEventListener('touchmove', onTouchMove);
    slider.addEventListener('touchend', onTouchEnd);
    return () => {
      slider.removeEventListener('touchstart', onTouchStart);
      slider.removeEventListener('touchmove', onTouchMove);
      slider.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <Section className='h-150 bg-[#f5f7fa]'>
      <Title>
        <span className='block pt-24 text-center text-2xl font-bold text-[#1a3772] md:text-3xl'>
          Atau pilih sesuai kebutuhan anda
        </span>
      </Title>
      <div className='mx-auto max-w-[1380px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8'>
        <div className='flex items-center'>
          <button
            aria-label='Sebelumnya'
            onClick={() => setStart(Math.max(0, start - perPage))}
            disabled={!canPrev}
            className='mr-2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white shadow transition hover:bg-blue-500 disabled:opacity-40'
          >
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='20'
                cy='20'
                r='19'
                stroke='#BDBDBD'
                strokeWidth='2'
                fill='white'
              />
              <path
                d='M24 27L17 20L24 13'
                stroke='#616161'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <div
            ref={sliderRef}
            className='scrollbar-hide flex w-full cursor-grab gap-4 overflow-x-auto active:cursor-grabbing'
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {visible.map((item, i) => (
              <div
                key={i}
                className='flex w-48 min-w-[180px] flex-col items-center rounded-xl bg-white pb-2 shadow-md'
                style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className='h-45 w-full rounded-t-lg object-cover'
                />
                <div className='mt-2 text-center text-base font-semibold text-gray-700'>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <button
            aria-label='Berikutnya'
            onClick={() =>
              setStart(Math.min(TANAMAN.length - perPage, start + perPage))
            }
            disabled={!canNext}
            className='ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white shadow transition hover:bg-blue-500 disabled:opacity-40'
          >
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='20'
                cy='20'
                r='19'
                stroke='#BDBDBD'
                strokeWidth='2'
                fill='white'
              />
              <path
                d='M16 13L23 20L16 27'
                stroke='#616161'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
        <div className='mt-15 flex justify-center'>
          <button
            type='button'
            className='rounded-lg bg-[#5fc05f] px-8 py-3 text-sm font-semibold shadow transition-all hover:bg-[#4ea94e]'
          >
            Lihat Semua Tanaman
          </button>
        </div>
      </div>
    </Section>
  );
};

export default PilihSection;
