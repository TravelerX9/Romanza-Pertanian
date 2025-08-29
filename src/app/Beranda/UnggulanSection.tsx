import Section from '../../components/ui/Section';
import Title from '../../components/ui/Title';
import Pagination from './pagination';
import React from 'react';

const PRODUCTS = [
  {
    img: '/images/pupuk1.webp',
    alt: 'Fertiphos',
    title: 'Fertiphos',
    desc: 'Pupuk Phosphate yang berasal dari bahan alami dan dilengkapi dengan unsur makro dan mikro',
  },
  {
    img: '/images/pupuk2.webp',
    alt: 'Kozima 50 SC',
    title: 'Kozima 50 SC',
    desc: 'Insektisida sistemik untuk mengendalikan hama penggerek batang padi kuning, wereng batang coklat.',
  },
  {
    img: '/images/pupuk3.webp',
    alt: 'MKP Pak Tani',
    title: 'MKP Pak Tani',
    desc: 'Pupuk Mono Potassium Phosphate berbentuk kristal yang mudah larut dalam air',
  },
  {
    img: '/images/pupuk4.webp',
    alt: 'Oxar 100/50 SC',
    title: 'Oxar 100/50 SC',
    desc: 'Insektisida racun kontak dan lambung berbentuk pekatan suspensi untuk mengendalikan segala jenis ulat.',
  },
  {
    img: '/images/pupuk5.webp',
    alt: 'ZN Urecote',
    title: 'ZN Urecote',
    desc: 'Mengandung Urea + Argon untuk menghemat dosis pemakaian dan juga meningkatkan hasil tanaman Anda.',
  },
  {
    img: '/images/pupuk6.webp',
    alt: 'Media Tanam Klasmann',
    title: 'Media Tanam Klasmann',
    desc: 'Peat Moss adalah media pembibitan tanaman tahunan dan tanaman semusim..',
  },
];

const UnggulanSection = () => {
  const [page, setPage] = React.useState(1);
  const perPage = 3;
  const totalPages = Math.ceil(PRODUCTS.length / perPage);
  const visibleProducts = PRODUCTS.slice((page - 1) * perPage, page * perPage);

  return (
    <Section id='produk' className='bg-[#5fc05f]'>
      <div className='mx-auto max-w-[1600px] px-4 py-12 sm:px-6 md:py-14 lg:px-8'>
        <Title>
          <span className='text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.05)]'>
            Produk Unggulan Pak Tani
          </span>
        </Title>
        <p className='text-md mt-2 text-center text-white/90'>
          Produk unggulan ini sudah terbukti secara nyata membantu hasil panen
          banyak petani di nusantara karena kandungannya diformulasi khusus.
        </p>

        <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
          {visibleProducts.map((product, idx) => (
            <div
              key={idx}
              className='group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-8 shadow'
            >
              <img
                src={product.img}
                alt={product.alt}
                className='mb-4 h-70 md:h-30 lg:h-70'
              />
              <h3 className='mb-2 text-lg font-bold text-[#1a3772]'>
                {product.title}
              </h3>
              <p className='mb-4 text-center text-base text-gray-600'>
                {product.desc}
              </p>
              <hr className='mb-3 w-full border-t border-gray-200' />
              <a
                href='#'
                className='flex cursor-pointer items-center gap-1 rounded-lg border border-gray-200 bg-white px-10 py-2 font-semibold text-[#1a3772] shadow transition-all group-hover:bg-blue-500 group-hover:text-white hover:bg-blue-500 hover:text-white md:px-2 lg:px-10'
              >
                Lihat Detail Produk <span className='text-lg'>›</span>
              </a>
            </div>
          ))}
        </div>
        <Pagination current={page} total={totalPages} onChange={setPage} />

        <div className='mt-6 text-center'>
          <button
            type='button'
            className='rounded-lg border border-blue-500 bg-blue-500 px-6 py-2 font-semibold text-white shadow transition-all hover:bg-green-600'
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
          >
            Lihat Produk Lengkap
          </button>
        </div>
      </div>
    </Section>
  );
};

export default UnggulanSection;
