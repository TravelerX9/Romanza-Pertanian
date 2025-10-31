import Section from '../../components/ui/Section';
import React from 'react';
import Button from '../../components/ui/Button';

const FILTERS = [
  { label: 'Semua Cerita', active: true },
  { label: 'Belajar Pak Tani' },
  { label: 'Kabar Pak Tani' },
  { label: 'Liputan Pak Tani' },
];

const STORIES = [
  {
    img: '/images/mangga.webp',
    category: 'Belajar Pak Tani',
    date: 'Desember 14, 2022',
    title: 'Menanam Mangga Tabulampot, Ini Caranya!',
    excerpt:
      'Banyak jenis mangga yang dapat ditanam dalam tabulampot contohnya ialah arum manis, manalagi, dan mangga apel. Semua jenis mangga ini bisa memberikan hasil yang bagus meski ditanam dalam pot...',
    link: '#',
  },
  {
    img: '/images/drone.webp',
    category: 'Liputan Pak Tani',
    date: 'Desember 6, 2022',
    title: 'Rekomendasi Drone Pertanian Saprotan Utama',
    excerpt:
      'Drone pertanian di Indonesia sudah mulai dikembangkan dan mulai populer sejak tahun 2015. Pada dasarnya, drone pertanian ialah drone dengan kerangka besar yang mampu membawa pestisida, pupuk dan air untuk...',
    link: '#',
  },
  {
    img: '/images/hamapadi.webp',
    category: 'Belajar Pak Tani',
    date: 'November 28, 2022',
    title: 'Mengatasi Penggerek Batang Padi Terkini!',
    excerpt:
      'Mengatasi penggerek batang padi perlu dilakukan dengan cara terkini agar hasil panen padi tetap terjaga. Penggerek batang padi adalah salah satu hama yang paling sering menyerang tanaman padi dengan intensitas...',
    link: '#',
  },
];

const CeritaSection = () => (
  <Section className='bg-white'>
    <div className='mx-auto grid max-w-[1600px] grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:py-14 lg:grid-cols-[1fr_400px] lg:px-8'>
      <div>
        <h2 className='mb-4 text-center text-3xl font-bold text-[#1a3772] md:text-4xl'>
          Cerita Pak Tani
        </h2>
        <div className='mb-8 flex flex-wrap justify-center gap-3'>
          {FILTERS.map((f, i) => (
            <button
              key={f.label}
              type='button'
              className={`rounded-lg px-5 py-2 text-sm font-semibold shadow ${
                f.active
                  ? 'bg-[#5fc05f] text-white'
                  : 'border border-gray-300 bg-white text-[#1a3772]'
              } transition`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className='flex flex-col gap-7'>
          {STORIES.map((s, i) => (
            <div
              key={i}
              className='flex flex-col gap-0 overflow-hidden rounded-xl bg-white shadow-md md:flex-row md:gap-5'
            >
              <img
                src={s.img}
                alt={s.title}
                className='w-full rounded-t-xl object-cover md:h-55 md:w-70 md:rounded-t-none md:rounded-l-xl lg:h-50 lg:w-100'
              />
              <div className='flex w-full flex-col justify-between p-4 md:py-3 md:pr-4'>
                <div>
                  <div className='mb-1 text-xs font-semibold text-[#5fc05f]'>
                    {s.category}{' '}
                    <span className='font-normal text-gray-500'>
                      | {s.date}
                    </span>
                  </div>
                  <div className='mb-1 text-lg font-bold text-[#1a3772]'>
                    {s.title}
                  </div>
                  <div className='mb-2 text-sm text-gray-700'>{s.excerpt}</div>
                </div>
                <a
                  href={s.link}
                  className='mt-2 flex items-center gap-1 text-sm font-semibold text-[#5fc05f] hover:underline'
                >
                  Baca Selengkapnya <span className='text-lg'>›</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside>
        <div className='relative flex h-full flex-col justify-between rounded-xl bg-[#5fc05f] p-6'>
          <div>
            <div className='mb-3 text-lg font-bold text-white'>
              Event Pak Tani
            </div>
            <div className='mb-6 rounded-lg bg-white p-4 shadow'>
              <img
                src='/images/bus.webp'
                alt='Bus Tour Saprotan Utama'
                className='mb-3 h-90 w-full rounded-md object-cover md:h-170 lg:h-90'
              />
              <span className='mb-2 inline-block rounded bg-[#1a3772] px-3 py-1 text-xs font-semibold text-white'>
                Offline
              </span>
              <div className='mb-1 text-base font-bold text-[#1a3772]'>
                Bus Tour Saprotan Utama
              </div>
              <div className='mb-1 flex items-center gap-2 text-sm text-gray-700'>
                <svg width='16' height='16' fill='none' viewBox='0 0 24 24'>
                  <path
                    stroke='#5fc05f'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 19c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-4v-4m0 0V7m0 4h4m-4 0H8'
                  />
                </svg>
                Jawa Tengah & Jawa Timur
              </div>
              <div className='mb-1 flex items-center gap-2 text-sm text-gray-700'>
                <svg width='16' height='16' fill='none' viewBox='0 0 24 24'>
                  <path
                    stroke='#5fc05f'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8 7v4l3 2 3-2V7'
                  />
                </svg>
                1-31 Desember 2020
              </div>
              <a
                href='#'
                className='flex items-center gap-1 text-sm font-semibold text-[#5fc05f] hover:underline'
              >
                Info Pendaftaran <span className='text-lg'>›</span>
              </a>
            </div>
          </div>
          <button
            type='button'
            className='mt-2 w-full rounded-lg bg-[#1a3772] px-8 py-3 text-lg font-semibold text-white shadow transition-all hover:bg-[#123872]'
          >
            Lihat Semua Event
          </button>
        </div>
        {/* CTA bottom */}
      </aside>
    </div>
    <Section className='bg-white'>
      <div className='mx-auto max-w-[1600px] px-4 pb-12 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <Button className='rounded-lg bg-[#5fc05f] px-8 py-3 text-sm font-semibold text-white shadow transition-all hover:bg-[#4ea94e]'>
            Lihat Semua Cerita
          </Button>
        </div>
      </div>
    </Section>
  </Section>
);

export default CeritaSection;
