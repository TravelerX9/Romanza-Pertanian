import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Title from '../../components/ui/Title';
import React from 'react';

const AlasanSection = () => (
  <Section className='bg-white'>
    <div className='mx-auto mt-10 h-470 max-w-[1600px] px-4 py-10 md:h-220 md:py-5 lg:h-180 lg:px-20'>
      <Title>Alasan Memilih Saprotan Utama?.</Title>
      <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-3'>
        {/* Card 1: Formula Khusus */}
        <Card className='relative top-[0%] px-5 pt-5 pb-6 text-center md:top-[10%] lg:top-[10%]'>
          <div className='flex justify-center'>
            <div className='relative h-74 w-74'>
              <img
                src='/images/utama1.png'
                alt='Formula Khusus'
                className='h-full w-full object-contain'
              />
            </div>
          </div>
          <h3 className='mt-6 text-xl font-bold text-[#1a3772]'>
            Formula Khusus
          </h3>
          <p className='mt-2 text-base text-gray-600'>
            Pupuk Pak Tani dirancang dengan formula khusus. dimana kandungan
            disesuaikan dengan unsur hara yang dibutuhkan masing-masing jenis
            tanaman budidaya.
          </p>
        </Card>
        {/* Card 2: Layanan Pak Tani */}
        <Card className='relative top-[0%] px-5 pt-5 pb-6 text-center md:-top-[5%] lg:-top-[5%]'>
          <div className='flex justify-center'>
            <div className='relative h-74 w-74'>
              <img
                src='/images/utama2.png'
                alt='Layanan Pak Tani'
                className='h-full w-full object-contain'
              />
            </div>
          </div>
          <h3 className='mt-6 text-xl font-bold text-[#1a3772]'>
            Layanan Pak Tani.
          </h3>
          <p className='mt-2 text-base text-gray-600'>
            Sejak 1978, Saprotan Utama selalu mengutamakan kepuasan pelanggan
            melalui produk dan pelayanan yang bermutu tinggi serta konsisten.
          </p>
          <a
            href='#'
            className='mt-4 flex items-center justify-center gap-2 rounded-full bg-[#5fc05f] px-6 py-2 font-semibold text-white shadow transition-all hover:bg-[#4ea94e]'
            style={{ display: 'inline-flex' }}
          >
            <img
              src='/images/konsultasi.svg'
              alt=''
              className='absolute -right-[3%] h-22 w-22 md:-right-[10%] lg:right-[10%]'
            />
            Yuk Tanya Pak Tani Sekarang!
          </a>
        </Card>
        {/* Card 3: Produk Terlengkap */}
        <Card className='relative top-[0%] px-5 pt-5 pb-6 text-center md:top-[10%] lg:top-[10%]'>
          <div className='flex justify-center'>
            <div className='relative h-74 w-74'>
              <img
                src='/images/utama3.png'
                alt='Produk Terlengkap'
                className='h-full w-full object-contain'
              />
            </div>
          </div>
          <h3 className='mt-6 text-xl font-bold text-[#1a3772]'>
            Produk Terlengkap
          </h3>
          <p className='mt-2 text-base text-gray-600'>
            Untuk menjawab berbagai kebutuhan akan masalah pertanian di
            Indonesia, Saprotan Utama terus berinovasi untuk menghadirkan produk
            yang lengkap.
          </p>
        </Card>
      </div>
    </div>
  </Section>
);

export default AlasanSection;
