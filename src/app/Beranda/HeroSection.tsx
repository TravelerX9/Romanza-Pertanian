'use client';
import Slide from './slide';
import Button from '../../components/ui/Button';

const HeroSection = () => (
  <section className='relative h-150 w-full bg-cover bg-center md:h-120 lg:h-180 lg:bg-right 2xl:h-220'>
    <Slide
      images={['/images/image1.jpg', '/images/image2.webp']}
      height='100%'
      renderText={(current) => {
        const texts = [
          {
            title: 'Pupuk Unggulan Petani Indonesia',
            desc: 'Dengan formula khusus Pak Tani yang mendukung setiap fase pertumbuhan tanaman',
          },
          {
            title: 'Solusi Nutrisi Tanaman Modern',
            desc: 'Teknologi terbaru untuk hasil panen maksimal dan tahan penyakit',
          },
        ];
        const { title, desc } = texts[current % texts.length];
        return (
          <div className='text-white'>
            <h1
              className='text-3xl leading-tight font-extrabold drop-shadow-[0_2px_2px_rgba(107,114,128,0.7)] md:text-5xl lg:text-6xl 2xl:text-7xl'
              style={{ WebkitTextStroke: '0.5px #555961' }}
            >
              {title}
            </h1>
            <p
              className='mt-3 text-sm font-bold text-white drop-shadow-[0_1px_1px_rgba(107,114,128,0.7)] md:text-2xl lg:text-xl 2xl:text-2xl'
              style={{ WebkitTextStroke: '0.2px #555961' }}
            >
              {desc}
            </p>
            <Button className='mt-6' href='#produk'>
              Lihat Produk.
            </Button>
          </div>
        );
      }}
      className='absolute inset-0 h-full w-full'
    />
    <div className='relative mx-auto max-w-[1600px] px-4 pt-16 pb-10 sm:px-6 sm:pt-20 sm:pb-14 lg:px-8'>
      <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10'>
        <div className='relative z-0 text-white'>
          {/* Text is rendered by Slide */}
        </div>
        <div className='h-48 sm:h-64 lg:h-72' />
      </div>
    </div>
  </section>
);

export default HeroSection;
