'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface SlideProps {
  images: string[];
  interval?: number;
  height?: string;
  renderText?: (current: number) => React.ReactNode;
  className?: string;
}

const Slide: React.FC<SlideProps> = (props) => {
  const [fadingOut, setFadingOut] = useState(false);
  const { images, interval = 8000, height, renderText, className } = props;
  const [showText, setShowText] = useState(false);
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Set a longer interval for slower image change (e.g., 15000ms)
  const slowInterval = interval < 15000 ? 15000 : interval;

  useEffect(() => {
    // Mulai fade out sebelum current index berubah
    setFadingOut(false);
    const fadeOutTimer = setTimeout(() => {
      setFadingOut(true);
    }, slowInterval - 600); // 600ms sebelum slide pindah
    // Pindah slide setelah fade out selesai
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFadingOut(false);
    }, slowInterval);
    // Delay text muncul setelah image
    setShowText(false);
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1800); // 1800ms setelah image muncul (lebih telat dari image)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearTimeout(fadeOutTimer);
      clearTimeout(textTimer);
    };
  }, [current, images.length, slowInterval]);

  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden ${className || ''}`}
      style={height ? { height } : {}}
    >
      {images.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 transition-all duration-[4000ms] ease-in-out ${
            idx === current ? 'z-10 scale-110 opacity-100' : 'z-0 scale-100 opacity-0'
          }`}
        >
          <Image
            src={img}
            alt='slide'
            fill
            sizes='100vw'
            priority={idx === current}
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
          />
        </div>
      ))}
      {renderText && (
        <div
          className={`pointer-events-none absolute top-1/2 left-0 z-20 w-full -translate-y-1/2 text-center transition-all duration-[4000ms] ease-in-out ${
            showText ? (fadingOut ? 'opacity-0' : 'opacity-100') : 'opacity-0'
          }`}
        >
          {/* Only render text when showText is true, so it never flashes before fade-in */}
          {showText ? renderText(current) : null}
        </div>
      )}
    </div>
  );
};

export default Slide;
