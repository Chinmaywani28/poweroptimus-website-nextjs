"use client"
import Link from 'next/link';
import './facility-sections-carousel.css'; // Import HomePage specific styles
import { useState, useRef, useEffect } from 'react';


const FacilitySectionsCarousel = ( ) => {

  const images = [
    "/sus-dev-carousel-one.png",
    "/sus-dev-carousel-two.png",
    "/sus-dev-carousel-three.png",
    "/sus-dev-carousel-four.png"
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto slide
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % images.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, images.length]);



  return (
    <div
      className="sus-carousel-wrap"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className="carousel-slide" key={index}>
            <img src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      <div className="dot-icons">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === activeIndex ? "active-dot" : ""}`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default FacilitySectionsCarousel