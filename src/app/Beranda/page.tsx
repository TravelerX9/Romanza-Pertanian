'use client';
import HeroSection from './HeroSection';
import React, { type ReactNode } from 'react';
import AlasanSection from './AlasanSection';
import UnggulanSection from './UnggulanSection';
import PilihSection from './PilihSection';
import KataSection from './KataSection';
import CeritaSection from './CeritaSection';

const IconCircle = ({ children }: { children: ReactNode }) => (
  <div className='mx-auto -mt-16 flex h-28 w-28 items-center justify-center rounded-full border border-gray-100 bg-white shadow sm:h-32 sm:w-32'>
    {children}
  </div>
);

const BerandaPage = () => {
  return (
    <main className='w-full'>
      {/* HERO */}
      <HeroSection />

      {/* ALASAN MEMILIH */}
      <AlasanSection />

      {/* PRODUK UNGGULAN */}
      <UnggulanSection />

      {/* PILIH SESUAI KEBUTUHAN */}
      <PilihSection />

      {/* TESTIMONIALS */}
      <KataSection />

      {/* CERITA PAK TANI + EVENT */}
      <CeritaSection />
    </main>
  );
};

export default BerandaPage;
