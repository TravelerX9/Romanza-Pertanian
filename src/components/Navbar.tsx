'use client';

import { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
} from 'react-icons/fa';
import { FiMenu, FiX, FiChevronRight, FiSearch } from 'react-icons/fi';
import Image from 'next/image';

const Navbar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className='fixed top-0 right-0 left-0 z-50 border-b border-gray-100 bg-white shadow-sm'>
      <div className='mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          {/* Left: Logos */}
          <div className='flex flex-shrink-0 items-center'>
            <Image
              src='/icons/logo-saprotan.svg'
              alt='Saprotan Utama'
              width={120}
              height={60}
              priority
              className='h-auto w-20 sm:w-[120px]'
            />
            <div className='mx-2 h-10' aria-hidden>
              <div className='h-full w-px bg-gray-300' />
            </div>
            <div className='relative'>
              {/* Keep intrinsic width/height constant; control visual size with CSS only */}
              <Image
                src='/icons/pak-tani.svg'
                alt='Saprotan Utama'
                width={90}
                height={90}
                priority
                className='h-auto w-15 sm:w-[90px]'
              />
            </div>
          </div>

          {/* Desktop: Nav links */}
          <div className='hidden lg:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              <a
                href='/'
                className='py-2 text-sm font-medium text-blue-900 hover:text-blue-600'
              >
                Beranda
              </a>

              <div className='relative'>
                <button
                  onClick={() => setIsProductOpen(!isProductOpen)}
                  className='flex items-center py-2 text-sm font-medium text-blue-900 hover:text-blue-600'
                >
                  Produk
                  <FaChevronDown className='ml-1 text-xs' />
                </button>
                {isProductOpen && (
                  <div className='absolute z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg'>
                    <a
                      href='/'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    >
                      Produk 1
                    </a>
                    <a
                      href='/'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    >
                      Produk 2
                    </a>
                  </div>
                )}
              </div>

              <div className='relative'>
                <button
                  onClick={() => setIsBrochureOpen(!isBrochureOpen)}
                  className='flex items-center py-2 text-sm font-medium text-blue-900 hover:text-blue-600'
                >
                  Brosur
                  <FaChevronDown className='ml-1 text-xs' />
                </button>
                {isBrochureOpen && (
                  <div className='absolute z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg'>
                    <a
                      href='/'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    >
                      Brosur 1
                    </a>
                    <a
                      href='/'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    >
                      Brosur 2
                    </a>
                  </div>
                )}
              </div>

              <a
                href='/'
                className='py-2 text-sm font-medium text-blue-900 hover:text-blue-600'
              >
                Testimonial
              </a>
              <a
                href='/'
                className='py-2 text-sm font-medium text-blue-900 hover:text-blue-600'
              >
                Cerita Pak Tani
              </a>
              <a
                href='/'
                className='py-2 text-sm font-medium text-blue-900 hover:text-blue-600'
              >
                Tentang Kami
              </a>
            </div>
          </div>

          {/* Right: Search + Socials + Mobile Menu */}
          <div className='flex items-center space-x-4'>
            {/* Search button */}
            <button
              className='text-gray-600 hover:text-gray-800'
              aria-label='Search'
              onClick={() => setIsSearchOpen((v) => !v)}
            >
              <FiSearch className='h-6 w-6' />
            </button>
            {/* Social Media Icons */}
            <div className='flex items-center space-x-3'>
              <a
                href='/'
                className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700'
              >
                <FaFacebookF className='text-sm' />
              </a>
              <a
                href='/'
                className='flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-white hover:opacity-90'
              >
                <FaInstagram className='text-sm' />
              </a>
              <a
                href='/'
                className='flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700'
              >
                <FaYoutube className='text-sm' />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className='flex lg:hidden'>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className='flex flex-col items-center justify-center text-gray-600 hover:text-gray-800'
                aria-label='Open menu'
              >
                <FiMenu className='h-8 w-8' />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search bar under navbar */}
      {isSearchOpen && (
        <div className='fixed top-20 right-0 left-0 z-20 border-b border-gray-200 bg-white'>
          <div className='mx-auto flex max-w-[1600px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8'>
            <FiSearch className='h-5 w-5 text-gray-500' />
            <input
              type='text'
              placeholder='Cari produk, brosur, artikel...'
              className='flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400'
            />
            <button
              aria-label='Close search'
              onClick={() => setIsSearchOpen(false)}
              className='text-gray-500 hover:text-gray-700'
            >
              <FiX className='h-5 w-5' />
            </button>
          </div>
        </div>
      )}

      {/* Mobile/Tablet full-screen menu */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 z-20 bg-white lg:hidden'>
          {/* Header */}
          <div className='flex h-20 items-center justify-between border-b border-gray-200 px-4'>
            <Image
              src='/icons/logo-saprotan.svg'
              alt='Saprotan Utama'
              width={120}
              height={60}
              className='h-auto w-20'
            />
            <div className='flex items-center space-x-4'>
              <button
                className='text-gray-600'
                aria-label='Close menu'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiX className='h-7 w-7' />
              </button>
            </div>
          </div>

          {/* Menu items */}
          <div className='px-4 py-4'>
            <ul className='space-y-4'>
              <li>
                <a className='flex items-center justify-between font-semibold text-blue-900'>
                  Beranda
                </a>
              </li>
              <li>
                <button className='flex w-full items-center justify-between font-semibold text-blue-900'>
                  <span>Produk</span>
                  <FiChevronRight className='text-gray-400' />
                </button>
              </li>
              <li>
                <button className='flex w-full items-center justify-between font-semibold text-blue-900'>
                  <span>Brosur</span>
                  <FiChevronRight className='text-gray-400' />
                </button>
              </li>
              <li>
                <a className='flex items-center justify-between font-semibold text-blue-900'>
                  Testimonial
                </a>
              </li>
              <li>
                <a className='flex items-center justify-between font-semibold text-blue-900'>
                  Cerita Pak Tani
                </a>
              </li>
              <li>
                <a className='flex items-center justify-between font-semibold text-blue-900'>
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
