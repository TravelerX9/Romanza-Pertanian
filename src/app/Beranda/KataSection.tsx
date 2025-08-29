import Section from '../../components/ui/Section';
import React from 'react';

const TESTIMONI = [
  {
    img: '/images/abdul.webp',
    name: 'Abdul Malik',
    job: 'Petani Bawang Merah',
    location: 'Kendal',
    quote:
      'Untuk mengatasi ulat, saya menggunakan insektisida Tumagon Plus dan Starmek. Hasilnya terlihat baik! Daunnya halus, tidak ada serangan ulat bahkan telur ulat tidak bisa menetas dan berkembang di tanaman bawang merah saya. Semoga Anda dapat mencoba apa yang saya sudah buktikan. Produk Saprotan Utama sudah teruji dan bukan rekayasa!',
  },
  {
    img: '/images/Aceng.webp',
    name: 'Aceng Kadu',
    job: 'Petani Mangga',
    location: 'Sumedang',
    quote:
      'Setelah dilakukan pemupukan 1 bulan sebelumnya, kemudian saya menggunakan POSTON dikocor dengan konsentrasi 5 ml/liter. Dalam jangka waktu 2 bulan tanaman mangga saya sudah berbunga. Dibandingkan dengan produk lain efek dari POSTON lebih cepat. Saya menyarankan kepada semua petani mangga agar memakai POSTON',
    highlight: ['POSTON'],
  },
  {
    img: '/images/ahmad.webp',
    name: 'Ahmad',
    job: 'Petani Kentang',
    location: 'Dieng',
    quote:
      'Saya sudah menanam kentang 10 tahun, alhamdulilah, ketika memakai produk Saprotan Utama, hasil panen saya meningkat drastis dibanding sebelumnya. Selain itu, memakai produk Saprotan Utama juga memangkas biaya sekitar 25% dari biasanya!',
  },
];

const KataSection = () => (
  <Section className='bg-white'>
    <div className='mx-auto max-w-[1200px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8'>
      <h2 className='mb-2 text-center text-3xl font-bold text-[#1a3772] md:text-4xl'>
        Apa Kata Bapak dan Ibu Tani?
      </h2>
      <div className='mb-10 text-center text-lg text-gray-600'>
        Bersama kami menciptakan komoditas pangan yang ramah lingkungan dan
        berkualitas tinggi.
      </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        {TESTIMONI.map((t, i) => (
          <div key={i} className='flex flex-col items-start'>
            <div className='mb-4 w-full'>
              <span className='font-serif text-4xl font-bold text-[#5fc05f] select-none'>
                “
              </span>
              <span className='block text-base leading-relaxed whitespace-pre-line text-gray-700'>
                {t.quote.split(/(POSTON)/g).map((part, idx) =>
                  t.highlight && t.highlight.includes(part) ? (
                    <span key={idx} className='font-bold'>
                      {part}
                    </span>
                  ) : (
                    <React.Fragment key={idx}>{part}</React.Fragment>
                  )
                )}
              </span>
            </div>
            <div className='mt-2 flex items-center gap-3'>
              <img
                src={t.img}
                alt={t.name}
                className='h-24 w-24 rounded-lg object-cover'
              />
              <div>
                <div className='text-base font-bold text-[#1a3772]'>
                  {t.name}
                </div>
                <div className='text-sm text-gray-700'>{t.job}</div>
                <div className='text-sm text-gray-500'>{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-14 flex justify-center'>
        <button
          type='button'
          className='rounded-lg bg-[#5fc05f] px-8 py-3 text-sm font-semibold text-white shadow transition-all hover:bg-[#4ea94e]'
        >
          Lihat Testimoni Lainnya
        </button>
      </div>
    </div>
  </Section>
);

export default KataSection;
