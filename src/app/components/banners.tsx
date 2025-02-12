'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

  
const banners = [
    '/banner1.jpg',
  
    '/banner3.jpg',
    '/banner4.jpg',// Adicione mais banners conforme necessário  
    '/banner5.jpg',
  ];
  
export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === banners.length - 1) {
          // Move o último banner para a frente suavemente
          setTimeout(() => {
            if (carouselRef.current) {
              carouselRef.current.style.transition = 'none';
              setCurrentIndex(0);
              setTimeout(() => {
                if (carouselRef.current) {
                  carouselRef.current.style.transition = 'transform 1s ease-in-out';
                }
              }, 50);
            }
          }, 700);
          return prevIndex + 1;
        }
        return prevIndex + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden flex justify-end -m-[1px] ">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.concat(banners[0]).map((banner, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={banner}
              alt={`Banner ${index + 1}`}
              width={1600}
              height={800}
              className="w-screen h-full 2xl:max-h-[600px] lg:max-h-[600px]  2xl:object-fill  "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
  