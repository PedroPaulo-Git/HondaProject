'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const banners = [
  '/banner15.jpg',
  '/banner7.jpg',
  '/banner8.jpg',
  '/banner9.png',
  '/banner10.jpg',
  '/banner11.jpg',
  '/banner12.jpg',
  '/banner14.jpg',
  '/banner13.jpg',
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalBanners = banners.length;
  const extendedBanners = [...banners, banners[0]]; // Duplicamos o primeiro no final

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === totalBanners) {
      setTimeout(() => {
        setIsTransitioning(false); // Remove a transição
        setCurrentIndex(0);
      }, 1000); // Aguarda a transição antes de resetar

      setTimeout(() => {
        setIsTransitioning(true); // Reativa a transição
      }, 1100);
    }
  }, [currentIndex, totalBanners]);

  return (
    <div className="relative w-full h-[190px] md:h-[400px] lg:h-[600px] overflow-hidden bg-gray-100">
      <div
        ref={carouselRef}
        className={`flex h-full ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedBanners.map((banner, index) => (
          <div key={`${banner}-${index}`} className="relative w-full h-full flex-shrink-0">
            <Image
              src={banner}
              alt={`Banner ${index + 1}`}
              fill
              priority={index === currentIndex}
              className="object-fill"
              sizes="100vw"
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
